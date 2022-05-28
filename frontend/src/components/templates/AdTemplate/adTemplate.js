
import { Button, TextField, Switch, Typography, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import AdContext from "../../../contexts/advertisement";
import { CreateAd, UpdateAdImage } from "../../../requesters/services/services";
import PreviewAd from "../../atoms/previewAd/previewAd";
import TitleDisplay from "../../atoms/titleDisplay/titleDisplay";
import AdList from "../../molecules/AdList/AdList";
import HomeHeader from '../../molecules/homeHeader/home-header';
import { InputStyle } from '../../atoms/input/input';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import { ptBR } from 'date-fns/locale';
import { storage } from '../../../lib/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import { useEffect } from "react";
import { useRef } from "react";

function AdTemplate() {
    const state = useContext(AdContext).state;
    const setState = useContext(AdContext).setState;
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [successMessage, setSuccessMessage] = useState('');
    const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
    const [image, setImage] = useState(null)
    const [adId, setAdId] = useState('')
    const metadata = {
        contentType: 'image/jpeg'
    };
    const [isSaving, seIsSaving] = useState({
        isSaving: false,
        saved: false,
        isCreating: false,
        created: false
    })
    const handleAddNewAd = () => {
        localStorage.setItem('isIncluding', 'true')
        setState({
            ...state,
            inEdition: true
        })
    }
    const [ad, setAd] = useState({
        "_id": "03121",
        "updatedAt": "2022-05-15T15:45:17.942Z",
        "createdAt": "2022-05-15T15:45:17.942Z",
        "title": "000",
        "text": "00",
        "fileURL": "/",
        "startDate": "2022-05-15T15:00:00.000Z",
        "endDate": "2022-05-20T15:00:00.000Z",
        "value": 0,
        "sponsor": "321321",
        "__v": 0,
        "status": "Parado"
    })
    const [newAd, setNewAd] = useState({
        "title": "",
        "text": "",
        "fileURL": "https://",
        "startDate": "",
        "endDate": "",
        "value": 0,
        "sponsor": "init",
        "status": ""
    })
    const saveAd = async () => {
        setDisplaySuccessMessage(true)
        setSuccessMessage('Fazendo upload da imagem! Aguarde...')
        uploadImage()
    }
    const uploadImage = async () => {
        if (image == null)
            return;
        const imageRef = ref(storage, `adImages/${localStorage.getItem('adId') + '.ad.' + v4() + image.name}`)
        const uploadTask = uploadBytesResumable(imageRef, image, metadata);
        await uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            }
        )
        let url = null;
        let aux = false;

        do {
            try {
                url = await getDownloadURL(imageRef);
                aux = false
                if (url === null)
                    aux = true
            } catch (e) {
                aux = true;
                if (url !== null)
                    localStorage.setItem('adUrl', url)
                console.log(url)
            }
        } while (aux)
        localStorage.setItem('adUrl', url)
        if (localStorage.getItem('adUrl') !== null) {
            console.log('start saving')
            console.log(localStorage.getItem('adUrl'))
            seIsSaving({
                isSaving: true,
            })
        }
    }
    const [auxiliar, setAuxiliar] = useState(true)

    useEffect(() => {

        if (isSaving.isSaving) {
            setNewAd({
                ...newAd,
                status: ad.status,
                fileURL: localStorage.getItem('adUrl'),
                adUserId: localStorage.getItem('userId')
            })
            seIsSaving({
                isSaving: false,
                saved: true,
            })
            setAuxiliar(true)
        }
        else if (isSaving.saved) {
            let ad = null;
            console.log(auxiliar)
            if(auxiliar){
                criacao()
                setAuxiliar(false)
            }
            async function criacao() {
                console.log(newAd)
                ad = (await CreateAd({
                    ...newAd,
                    fileURL: 'fileUrl',
                    adUserId: localStorage.getItem('userId') ? localStorage.getItem('userId') : 'adUserId',
                    startDate: document.getElementById('startDate').value ? document.getElementById('startDate').value : new Date().toString(),
                    endDate: document.getElementById('endDate').value ? document.getElementById('endDate').value : new Date().toString(),
                    title: document.getElementById('Adtitle').value ? document.getElementById('Adtitle').value : 'title',
                    text: document.getElementById('Adtext').value ? document.getElementById('Adtext').value : 'text',
                    value: document.getElementById('Advalue').value ? document.getElementById('Advalue').value : '100',
                })).data
                console.log({...ad,'>>>>':'>>>>'})
                setAdId(ad._id)
                localStorage.setItem('adId', adId)
                if (ad !== null) {
                    seIsSaving({
                        saved: false,
                        isCreating: true
                    })
                }
            }
        }
        else if (isSaving.isCreating) {
            console.log('is Creating')
            async function updateImage() {
                let data = null;                   
                console.log(localStorage.getItem('adId'))
                console.log(localStorage.getItem('adUrl'))
                data = await (UpdateAdImage(adId, localStorage.getItem('adUrl')))
                console.log({...data, 'daaaata':'dataa'})
                if (data !== null) {
                    console.log('done is Creating')
                    seIsSaving({
                        isCreating: false,
                        created: true
                    })
                }
            }
            updateImage()
        }
        else if (isSaving.created) {
            console.log('is created')
            localStorage.removeItem('adUrl')
            setDisplaySuccessMessage(true)
            setSuccessMessage('Ad incluido com sucesso')
            seIsSaving({
                isSaving: false,
                saved: false,
                isCreating: false,
                created: false
            })
            console.log('done is created')
            //window.location.href = '/ads'
        }
    }, [isSaving.isSaving, isSaving.saved, isSaving.isCreating, isSaving.created, newAd, ad.status, adId, auxiliar])

    return (<div style={{
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '10px'
    }}>
        <HomeHeader />
        <div>
            <TitleDisplay background={true} title="Propagandas" />
            {!state.inEdition && <div
                style={{
                    display: 'flex',
                    marginTop: '20px',
                }}>
                <AdList />

                <div style={{
                    display: 'grid',
                    width: '50%',
                }}>
                    <Button
                        children='Adicionar Nova Propaganda'
                        variant="outlined"
                        style={{
                            marginBottom: '20px',
                            maxHeight: '100px',
                            width: '100%',

                        }}
                        onClick={handleAddNewAd}
                    >
                    </Button>
                    {state.inPreview && <PreviewAd />}
                </div>
                {!state.inPreview && <div style={{
                    display: 'grid',
                }}></div>}
            </div>}
            {state.inEdition && <div
                style={{
                    display: 'flex',
                    marginTop: '20px',
                    justifyContent: 'space-around'
                }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <DatePicker
                            date={startDate}
                            onDateChange={setStartDate}
                            locale={ptBR}
                        >
                            {({ ...inputProps }) => (
                                <TextField
                                    id="startDate"
                                    label="Data De Inicio"
                                    defaultValue={ad.startDate}
                                    {...inputProps}
                                />
                            )}
                        </DatePicker>

                        <div style={{ width: '10px' }}></div>
                        <DatePicker date={endDate} onDateChange={setEndDate} locale={ptBR}>
                            {({ inputProps }) => (
                                <TextField
                                    id="endDate"
                                    label="Data De Término"
                                    defaultValue={ad.endDate}
                                    {...inputProps}
                                />
                            )}
                        </DatePicker>
                    </div>
                    <input style={{
                        marginTop: '200px',
                        marginBottom: '50px'
                    }} type='file'
                        onChange={(e) => { setImage(e.target.files[0]) }}
                    ></input>
                    <div>

                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                        <Button style={{
                            'background': 'linear-gradient(180deg, rgba(28, 106, 224, 0.539) 21.92%, rgba(162, 33, 223, 0.483) 129.03%), linear-gradient(0deg, rgba(62, 67, 205, 0.7), rgba(62, 67, 205, 0.7)), #FFFFFF',
                            'borderRadius': '6px',
                            'color': 'white',
                            'minWidth': '100px',
                            'height': '40px'
                        }}
                            onClick={() => {
                            }}
                            href='/'
                        >VOLTAR</Button>
                        <Button
                            style={{
                                'background': 'linear-gradient(180deg, rgba(28, 106, 224, 0.539) 21.92%, rgba(162, 33, 223, 0.483) 129.03%), linear-gradient(0deg, rgba(62, 67, 205, 0.7), rgba(62, 67, 205, 0.7)), #FFFFFF',
                                'borderRadius': '6px',
                                'color': 'white',
                                'minWidth': '100px',
                                'marginLeft': '10px',
                                'height': '40px'
                            }}
                            onClick={() => {
                                saveAd();
                            }}
                        >SALVAR</Button>
                        {displaySuccessMessage && <Typography
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                display: 'flex',
                                color: '#f00'
                            }} >{successMessage}</Typography>
                        }
                    </div>
                </div>
                <div style={{ display: 'grid' }}>
                    <InputStyle key='Adtitle' style={{}} id="Adtitle" title="Titulo"></InputStyle>
                    <InputStyle key='Adtext' style={{}} id="Adtext" title="Texto"></InputStyle>
                    <InputStyle key='Advalue' style={{}} id="Advalue" title="Valor"></InputStyle>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <FormGroup name='type'
                            style={{
                                width: '100%',
                                alignContent: 'end'
                            }}
                        >
                            <FormControlLabel id="formLabelStatus"
                                onChange={() => {
                                    if (ad.status === 'Online') {
                                        setAd({
                                            ...ad,
                                            status: 'Parado'
                                        })
                                    }
                                    else {
                                        setAd({
                                            ...ad,
                                            status: 'Online'
                                        })
                                    }
                                }}
                                control={<Switch defaultChecked id="isOnline" />} label={ad.status} />
                        </FormGroup>
                    </div>
                </div>

            </div>}
        </div>

    </div>
    );
}

export default AdTemplate;

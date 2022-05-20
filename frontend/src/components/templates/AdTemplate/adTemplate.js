
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
import { ref, getDownloadURL, listAll, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import { useEffect } from "react";

function AdTemplate() {
    const state = useContext(AdContext).state;
    const setState = useContext(AdContext).setState;
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [successMessage, setSuccessMessage] = useState('');
    const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
    const [image, setImage] = useState(null)
    const metadata = {
        contentType: 'image/jpeg'
    };

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
        "fileURL": "",
        "startDate": "",
        "endDate": "",
        "value": 0,
        "sponsor": "",
        "status": ""
    })
    const saveAd = async () => {
        await setNewAd({
            ...newAd,
            status: ad.status
        })
        await setNewAd({
            ...newAd,
            fileURL: 'urlçlll',
            adUserId: localStorage.getItem('userId')
        })
        await CreateAd({
            ...newAd, startDate: document.getElementById('startDate').value,
            endDate: document.getElementById('endDate').value,
            title: document.getElementById('Adtitle').value,
            text: document.getElementById('Adtext').value,
            value: document.getElementById('Advalue').value,
        }, image)
            .then((response) => {
                setDisplaySuccessMessage(true)
                setSuccessMessage('Ad incluido com sucesso')
                localStorage.setItem('adId', response.data._id)
            }).then(() => {
                uploadImage()
            }).then(() => {
                UpdateAdImage(localStorage.getItem('adId'), localStorage.getItem('adUrl'))
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                window.location.href = '/ads/'
            })

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
        const url = await getDownloadURL(imageRef);
        localStorage.setItem('adUrl', url)

    }

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

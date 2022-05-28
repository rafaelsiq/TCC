import { AdSource } from '../../components/atoms/adSource/adSource';
import { storage } from '../../lib/firebase';
import {ref, listAll, getDownloadURL} from 'firebase/storage';

export const getAll = async () => {
    let list: AdSource[] = []
    const adImages = ref(storage,'adImages');
    const adVideos = ref(storage,'adVideos');
    const imageList = await listAll(adImages);
    const videoList = await listAll(adVideos);

    for(let i in imageList.items){
        let photoURL = await getDownloadURL(imageList.items[i]);
        list.push({
            name: imageList.items[i].name, 
            url: photoURL,
            type: 'image'
        })
    }
    for(let i in videoList.items){
        let videoURL = await getDownloadURL(videoList.items[i]);
        list.push({
            name: videoList.items[i].name, 
            url: videoURL,
            type: 'video'
        })
    }

    return list
}
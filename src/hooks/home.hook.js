import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';
import ImagePicker from 'react-native-image-crop-picker';
import { RNFFmpeg } from 'react-native-ffmpeg';

export const useHome = () => {
    const [videos, setVideos] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const snapshot = firestore().collection("videos").onSnapshot(snapshot => {
            setVideos(snapshot.docs.map(video => video.data()));
            setLoading(false);
        });

        return () => { snapshot(); }
    }, []);

    const openGallery = () => {
        ImagePicker.openPicker({
            mediaType: 'video'
        }).then(extractAndUpload)
    }

    const openCamera = () => {
        ImagePicker.openCamera({
            mediaType: 'video'
        }).then(extractAndUpload);
    }

    const extractAndUpload = async (response) => {
        if (response?.path) {
            const name = `Welnes-${response.modificationDate}.mp4`;
            await uploadVideo(`${response.path}`, `${name}`);
            RNFFmpeg.execute(`-ss 00:00:01 -i ${response.path} -vf scale=400:-1 -vframes 1 file://${RNFS.DownloadDirectoryPath}/${name.replace(".mp4", ".jpg")}`).then(e => {
                if (!e) uploadThumb(`file://${RNFS.DownloadDirectoryPath}/${name.replace(".mp4", ".jpg")}`, `${name.replace(".mp4", ".jpg")}`);
            });
        }
    }

    const uploadVideo = async (filePath, name) => {
        setUploading(true);
        const ref = storage().ref(`videos/${name}`);
        await ref.putFile(filePath);
    }

    const uploadThumb = async (filePath, name) => {
        if (!RNFS.exists(filePath)) {
            console.warn('again');
            uploadThumb(filePath, name);
        }
        const ref = storage().ref(`thumbnails/${name}`);
        await ref.putFile(filePath);
        const videoURL = await storage().ref(`videos/${name.replace(".jpg", ".mp4")}`).getDownloadURL();
        const thumbnailURL = await ref.getDownloadURL();
        firestore().collection("videos").doc().set({
            video: videoURL,
            thumbnail: thumbnailURL
        }).then(() => {
            setUploading(false);
            alert("Video Uplaoded Successfully!");
        });
    }

    return { videos, uploading, loading, openGallery, openCamera };
}
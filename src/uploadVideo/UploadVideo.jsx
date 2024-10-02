import axios from "axios";

export const uploadVideo = async (file) => {
    // const cloudName = import.meta.env.VITE_CLOUD_NAME;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'video_lms');
    try{
        let api = `https://api.cloudinary.com/v1_1/dnvmj9pvk/video/upload`;

        const res = await axios.post(api, data);
        const { secure_url } = res.data;
        return secure_url;

    } catch (err) {
        console.log(err);
        return '';
    }
}
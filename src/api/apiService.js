//src/api/apiservice
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const getQRCode = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/photos/${id}`);
        return response.data;
    } catch (error) {
        console.error('큐알코드 실패했슴다 : ', error);
        throw error;
    }
};


import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getLeaders = async () => {
    try {
        const response = await api.get('/leaders');
        return response.data;
    } catch (error) {
        console.error('Error fetching leaders:', error);
        throw error;
    }
};

export const getLeaderById = async (id) => {
    try {
        const response = await api.get(`/leaders/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching leader:', error);
        throw error;
    }
};

export const getAwards = async () => {
    try {
        const response = await api.get('/awards');
        return response.data;
    } catch (error) {
        console.error('Error fetching awards:', error);
        throw error;
    }
};

export default api; 
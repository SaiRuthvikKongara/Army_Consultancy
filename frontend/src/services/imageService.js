import axios from 'axios';

const API_URL = 'http://localhost:5000/api/images';

export const imageService = {
    // Upload an image
    uploadImage: async (file, category) => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('category', category);
        
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },

    // Get image by ID
    getImage: (imageId) => {
        return `${API_URL}/${imageId}`;
    },

    // Get images by category
    getImagesByCategory: async (category) => {
        const response = await axios.get(`${API_URL}/category/${category}`);
        return response.data;
    },

    // Delete image
    deleteImage: async (imageId) => {
        const response = await axios.delete(`${API_URL}/${imageId}`);
        return response.data;
    }
}; 
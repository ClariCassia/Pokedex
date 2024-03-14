import { typeImages } from '../services/getTypeSimbol';

export const getTypeImage = (type) => {
    return typeImages[type] || 'url_da_imagem_default.png';
};

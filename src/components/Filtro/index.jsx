import React, { useState } from 'react';
import { CustomSelect, SelectLabel, SelectSelected, SelectItems, Option } from './style';
import { typeImages } from '../../services/getTypeSimbol';

const opcoesTipo = [
    { value: '', label: 'Todos os tipos' },
    { value: 'normal', label: 'Normal' },
    { value: 'fighting', label: 'Lutador' },
    { value: 'flying', label: 'Voador' },
    { value: 'poison', label: 'Venenoso' },
    { value: 'ground', label: 'Terrestre' },
    { value: 'rock', label: 'Pedra' },
    { value: 'bug', label: 'Inseto' },
    { value: 'ghost', label: 'Fantasma' },
    { value: 'steel', label: 'Aço' },
    { value: 'fire', label: 'Fogo' },
    { value: 'water', label: 'Água' },
    { value: 'grass', label: 'Grama' },
    { value: 'electric', label: 'Elétrico' },
    { value: 'psychic', label: 'Psíquico' },
    { value: 'ice', label: 'Gelo' },
    { value: 'dragon', label: 'Dragão' },
    { value: 'dark', label: 'Sombrio' },
    { value: 'fairy', label: 'Fada' },
];

export function Filtro({ handleTipoClick }) {
    const [selectedType, setSelectedType] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const getTypeImage = (type) => {
        return typeImages[type] || 'url_da_imagem_default.png';
    };

    const handleSelectClick = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectChange = (value,label) => {
        setSelectedType(label);
        handleTipoClick(value);
        setShowOptions(false);
    };

    return (
        <CustomSelect>
            <SelectLabel htmlFor="type">Filtrar por tipo: </SelectLabel>
            <SelectSelected onClick={handleSelectClick}>
                {selectedType || 'Selecione uma opção'}
            </SelectSelected>
            <SelectItems style={{ display: showOptions ? 'block' : 'none' }}>
                <div>
                    {opcoesTipo.map((opcao) => (
                        <Option
                            key={opcao.value}
                            onClick={() => handleSelectChange(opcao.value, opcao.label)}
                        >
                            {opcao.label}
                            {opcao.value && (
                                <img
                                    src={getTypeImage(opcao.value)}
                                    alt={opcao.label}
                                    style={{ width: '20px', height: '20px', marginLeft: '5px' }}
                                />
                            )}
                        </Option>
                    ))}
                </div>
            </SelectItems>
        </CustomSelect>
    );
}

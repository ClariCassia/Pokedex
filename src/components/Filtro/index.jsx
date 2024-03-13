import React from 'react'
import { useState } from 'react';
import { Container } from './style';

const opcoesTipo = [
    { value: '', label: 'Todos os tipos' },
    { value: '1', label: 'Normal' },
    { value: '2', label: 'Lutador' },
    { value: '3', label: 'Voador' },
    { value: '4', label: 'Veneno' },
    { value: '5', label: 'Terra' },
    { value: '6', label: 'Pedra' },
    { value: '7', label: 'Inseto' },
    { value: '8', label: 'Fantasma' },
    { value: '9', label: 'Aço' },
    { value: '10', label: 'Fogo' },
    { value: '11', label: 'Água' },
    { value: '12', label: 'Grama' },
    { value: '13', label: 'Elétrico' },
    { value: '14', label: 'Psíquico' },
    { value: '15', label: 'Gelo' },
    { value: '16', label: 'Dragão' },
    { value: '17', label: 'Sombrio' },
    { value: '18', label: 'Fada' },
];

export function Filtro({ handleTipoClick }) {
    
    const [selectedType, setSelectedType] = useState('');   

    return (
        <Container>
            <label htmlFor="type">Filtrar por tipo: </label>
            <select value={selectedType} onChange={(e) => {
                setSelectedType(e.target.value);
                handleTipoClick(e.target.value);
            }}>
                {opcoesTipo.map((opcao) => (
                    <option key={opcao.value} value={opcao.value}>
                        {opcao.label}
                    </option>
                ))}
            </select>
        </Container>
    );
}

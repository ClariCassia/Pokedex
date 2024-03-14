import React from 'react';
import { CustomSelect, SelectLabel, SelectSelected, SelectItems, Option } from './style';
import { getTypeImage } from '../../services/getTypeImage';
import { optionsType } from './../../services/optionsType';
import { useSelectState } from './../../hooks/useSelectState';

export function Filtro({ handleTypeClick }) {
    const {
        selectedType,
        showOptions,
        handleSelectClick,
        handleSelectChange,
    } = useSelectState();

    const handleTipoChange = (value) => {
        handleTypeClick(value);
    };

    return (

        <CustomSelect>
            <SelectLabel htmlFor="type">Filtrar por tipo: </SelectLabel>

            <SelectSelected onClick={handleSelectClick}>
                {selectedType || 'Selecione uma opção'}
            </SelectSelected>

            <SelectItems show={showOptions}>
                <div>
                    {optionsType.map((opcao) => (
                        <Option
                            key={opcao.value}
                            onClick={() => {
                                handleSelectChange(opcao.value, opcao.label);
                                handleTipoChange(opcao.value);
                            }}
                        >
                            {opcao.label}
                            {opcao.value && (
                                <img
                                    src={getTypeImage(opcao.value)}
                                    alt={opcao.label}
                                />
                            )}
                        </Option>
                    ))}
                </div>
            </SelectItems>

        </CustomSelect>
    );
}

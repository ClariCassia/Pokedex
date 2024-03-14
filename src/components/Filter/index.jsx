import React from 'react';
import { CustomSelect, SelectLabel, SelectSelected, SelectItems, Option } from './style';
import { getTypeImage } from '../../services/getTypeImage';
import { optionsType } from './../../services/optionsType';
import { useSelectState } from './../../hooks/useSelectState';
import { useTheme } from './../../hooks/useTheme';

export function Filter({ handleTypeClick }) {

    const { theme } = useTheme();     

    const {
        selectedType,
        showOptions,
        handleSelectClick,
        handleSelectChange,
    } = useSelectState();

    const handleTipoChange = (value, label) => {
        handleTypeClick(value);
    };

    return (

        <CustomSelect >

            <SelectLabel theme={theme} htmlFor="type">Filtrar por tipo: </SelectLabel>

            <SelectSelected theme={theme} onClick={handleSelectClick}>
                {selectedType || 'Selecione uma opção'}
            </SelectSelected>

            <SelectItems theme={theme} show={showOptions.toString()}>
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

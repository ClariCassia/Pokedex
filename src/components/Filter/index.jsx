import { CustomSelect, SelectLabel, SelectSelected, SelectItems, Option } from './style';
import { getTypeImage } from '../../services/getTypeImage';
import { optionsType } from './../../services/optionsType';
import { useSelectState } from './../../hooks/useSelectState';
import { useTheme } from './../../hooks/useTheme';


export function Filter({ handleTypeClick }) {
    const { theme } = useTheme();
    const { selectedType, showOptions, handleSelectClick, handleSelectChange, setShowOptions } = useSelectState();

    const handleSelectOptionClick = (value) => {
        handleTypeClick(value);
        setShowOptions(false);
    };

    return (
        <CustomSelect>
            <SelectLabel theme={theme} htmlFor="type">Filtrar por tipo: </SelectLabel>
            <SelectSelected theme={theme} onClick={handleSelectClick}>
                {selectedType || 'Selecione uma opção'}
            </SelectSelected>
            <SelectItems theme={theme} show={`${showOptions}`}>
                <div>
                    {optionsType.map((option) => (
                        <FilterOption
                            key={option.value}
                            option={option}
                            handleSelectOptionClick={handleSelectOptionClick}
                        />
                    ))}
                </div>
            </SelectItems>
        </CustomSelect>
    );
}

function FilterOption({ option, handleSelectOptionClick }) {
    const handleOptionClick = () => {
        handleSelectOptionClick(option.value);
    };

    return (
        <Option onClick={handleOptionClick}>
            {option.label}
            {option.value && (
                <img
                    src={getTypeImage(option.value)}
                    alt={option.label}
                />
            )}
        </Option>
    );
}

import { useState } from 'react';
export function useSelectState(initialValue = '') {
    
    const [selectedType, setSelectedType] = useState(initialValue);
    const [showOptions, setShowOptions] = useState(false);
    const handleSelectClick = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectChange = (value, label) => {
        setSelectedType(label);
        setShowOptions(false);
    };

    return {
        selectedType,
        showOptions,
        handleSelectClick,
        handleSelectChange,
    };
}

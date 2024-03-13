import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;

    label{
        font-weight: bold;
        color: rgb(0, 74, 148);
    }

    select {
        padding: 2px 10px;
        border-radius: 2px;
        border: 1px solid rgba(0, 74, 148, 0.445);
        outline: none;
        cursor: pointer; 
    }

    @media (max-width: 1024px) {
        padding: 20px;
    }
`;

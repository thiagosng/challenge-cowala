import styled from "styled-components";
import InputMask from "react-input-mask";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
`;


export const Fields = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
`;

export const FieldPC = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const FieldP = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 380px;
`;

export const FieldC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 380px;
`;

export const FieldI = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;
`;

export const FieldB = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
`;

export const FieldIP = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const FieldLabels = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
`;


export const Input = styled.input`
    height: 44px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    align-items: center;
    /* &:focus {
        outline: none;
        border: 1px solid #0A1633;
    }
     */
`;

export const InputPr = styled.input`
    height: 44px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    align-items: center;
    /* &:focus {
        outline: none;
        border: 1px solid #0A1633;
    } */
    
`;

export const InputPh = styled(InputMask)`
    
    height: 44px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    align-items: center;
    /* &:focus {
        outline: none;
        border: 1px solid #0A1633;
    } */
    
`;

export const Button = styled.button`
    height: 44px;
    margin-top: 11px;
    border: 1px solid #ccc;
    align-items: center;
    background: #00D9D0;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    &:focus {
        outline: none;
        border: 1px solid #0A1633;
    }
    &:hover {
        background: #0A1633;
        color: #00D9D0;
        cursor: pointer;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ButtonSave = styled.button`
    height: 44px;
    width: 140px;
    margin-top: 11px;
    margin-right: 10px;
    border: 1px solid #ccc;
    align-items: center;
    background: #0A1633;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    &:focus {
        outline: none;
        border: 1px solid #0A1633;
    }
    &:hover {
        background: #00D9D0;
        color: #FFF;
        cursor: pointer;
    }
`;

export const ButtonCleaner = styled.button`
    height: 44px;
    width: 140px;
    margin-left: 10px;
    margin-top: 11px;
    border: 1px solid #ccc;
    align-items: center;
    background: #0A1633;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    &:focus {
        outline: none;
        border: 1px solid #0A1633;
    }
    &:hover {
        background: #00D9D0;
        color: #FFF;
        cursor: pointer;
    }
`;
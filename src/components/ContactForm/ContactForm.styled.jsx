import styled from "styled-components";

export const Form = styled.form`
    width: 450px;
    padding: 10px;
    margin-top: 25px;
    border: 1px solid #000;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    font-weight: 500;
`;
export const FormInput = styled.input`
    width: 200px;
    margin-top: 5px;
    border: 1px solid;
    border-radius: 3px;
    height: 30px;
    font-size: 20px;
    &:focus{
        border: 2px solid;
        border-color: #00bfff;
        outline: none;
    }
`;
export const FormButton = styled.button`
    width: 150px;
    height: 30px;
    font-weight: 700;
    margin-top: 25px;
    border-radius:  7px;
    border: 1px solid rgba(0,0,0,0.2);
    &:active{
        background-color: #00bfff;
    }
`;
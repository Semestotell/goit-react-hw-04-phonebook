import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
`;
export const Input = styled.input`
    width: 150px;
    margin-top: 10px;
    height: 20px;
    border-radius: 4px;
    &:focus{
        border: 2px solid;
        border-color: #00bfff;
        outline: none;
    }
`;
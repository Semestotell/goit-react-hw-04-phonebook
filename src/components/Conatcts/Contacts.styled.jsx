import styled from "styled-components"; 

export const ContactList = styled.ul`
    
`;
export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    &:not(:first-child){
        margin-top: 20px;
    }
`;
export const Contact = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin:0;
`;
export const ContactButton = styled.button`
    width: 70px;
    height: 20px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
    font-weight: bold;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 10px;
    }
    
    :focus {
        background-color: #00bfff;
        color: #000000;
        transition: all 0.2s;
    }
`;

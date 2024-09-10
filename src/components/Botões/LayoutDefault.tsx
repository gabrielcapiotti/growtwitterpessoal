import styled from "styled-components";

export const LayoutDefault = styled.button`
    width: 150px;
    height: auto;
    margin: 10px;
    background-color: ${(props) => props.theme.colors.quaternary};
    color: #000000;
    text-align: start;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.05); 
        transition: transform 0.3s ease;
    }
`;

export const ButtomConfirm = styled.button`
    width: 120px;
    height: 30px;
    margin: 5px;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: white;
    border-radius: 15px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    font-size: 15px;
    display: inline-block; 

    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #3c3cdb;
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }

    &:link, &:visited, &:active {
        text-decoration: none;
        color: white; 
    }
`;
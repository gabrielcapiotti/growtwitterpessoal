import styled from "styled-components";

export const PaginaLogin = styled.main`
    display: flex;
    background-color: ${(props) => props.theme.colors.quaternary};
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const LoginEstilo = styled.main`
    display: flex;
    align-items: center; 
    width: 700px;
    height: 250px;
    background-color: ${(props) => props.theme.colors.tertiary};
`;

export const Formulario = styled.main`
    align-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 25vw;
    height: 250px;
    background-color: white;
`;

export const CampoTexto = styled.input`
    width: 250px;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
`;

export const Textualizacao = styled.main`
    width: 450px;
    height: 250px;
    text-align: justify;
    font-size: 16px;
    padding: 10px;
    color: white;
`;
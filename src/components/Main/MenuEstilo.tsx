import styled from "styled-components";


export const MenuEstilo = styled.main`
    display: flex;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Esquerda = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    width: 20vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.quaternary};
    color: black;
    font-family: Arial, Helvetica, sans-serif;

    & > button {
        margin-bottom: 10px;
    }
`;

export const GrupoBotoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
`;


export const Centro = styled.main`
    width: 80vw; /* Tamanho maior para o centro */
    max-width: 800px; /* Define um limite máximo de largura */
    height: 100vh;
    background-color: #ffffff;
    color: #000000;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    overflow-y: auto; 
    
    /* Estiliza a barra de rolagem para torná-la invisível em navegadores WebKit como Safari e Chrome */
    ::-webkit-scrollbar {
        width: 0px; /* Largura da barra de rolagem setada para 0 para torná-la invisível */
        background: transparent; /* Fundo transparente */
    }

    /* Estiliza a barra de rolagem para torná-la invisível em navegadores baseados em Firefox */
    scrollbar-width: none; /* Firefox */

    @media (max-width: 768px) {
        width: 100vw; /* Para telas menores, usa 100% da largura */
        padding: 10px;
    }
`;



export const CentroInterno = styled.main`
    color: #000000;
    justify-content: center;
    align-items: start;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    max-width: 608px; /* Define uma largura máxima para centralizar */
    display: flex;
    flex-direction: column; /* Coloca o conteúdo em coluna */
    padding-left: 10px;
`;


export const TweetArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    background-color: #f5f5f5;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    resize: none;

    @media (max-width: 768px) {
        font-size: 14px;
        min-height: 80px;
    }
`;

export const TweetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
`;

export const TweetItem = styled.div`
    background-color: #f9f9f9; /* Cor de fundo clara para os tweets */
    border: 1px solid #ddd; /* Borda suave */
    padding: 15px;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombras sutis */
    transition: background-color 0.2s ease;
    border: 1px solid black;

    &:hover {
        background-color: #f1f1f1; /* Fundo mais escuro ao passar o mouse */
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom: 10px; /* Espaçamento abaixo do nome de usuário e data */
        
        img {
            border-radius: 50%; /* Torna a imagem circular */
            width: 40px;
            height: 40px;
            margin-right: 10px; /* Espaçamento entre a imagem e o texto */
        }

        strong {
            font-size: 16px;
            margin-right: 5px;
        }

        span {
            font-size: 12px;
            color: #555;
        }
    }

    p {
        font-size: 14px;
        margin-bottom: 10px;
        color: #333;
        

    }

    .tweet-actions {
        display: block;
        justify-content: start;
        font-size: 12px;
        color: #888;

        span {
            cursor: pointer;
            &:hover {
                color: #000; /* Destaca quando o usuário passa o mouse */
            }
        }
    }
`;


export const ImagemIcon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px; /* Define uma largura maior para exibir o conteúdo */
    height: auto; /* Altura automática, ajustada ao conteúdo */
    background-color: #ffffff; /* Fundo branco */
    padding: 20px; /* Espaçamento interno */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombras suaves */
    z-index: 1000; /* Certifica-se de que a modal fique acima de outros elementos */

    @media (max-width: 768px) {
        width: 90vw; /* Largura mais responsiva em telas menores */
        padding: 15px;
    }

    @media (max-width: 480px) {
        width: 100vw; /* Ocupa 100% da largura em telas muito pequenas */
        padding: 10px;
    }
`;




export const Direita = styled.main`
    width: 40vw;
    background-color: ${(props) => props.theme.colors.quaternary};
    color: black;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    

    @media (max-width: 768px) {
        display: none; /* Esconde a seção direita em telas menores */
    }
`;

export const Atualizacoes = styled.main`
    display: flex;
    flex-direction: column; 
    margin-left: 30px;
    margin-top: 40px;
    width: 260px;
    height: 310px;
    border-radius: 15px;
    background-color: #9e9e9e;
    color: #000000;
    justify-content: start;
    padding-left: 10px;
    padding-top: 10px; 
    padding-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Titulo = styled.h4`
    color: #000000;
    margin-bottom: 15px; 
    font-size: 18px;
`;

export const Subtitulo = styled.div`
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 15px;
`;

export const ItemAtualizacao = styled.div`
    font-size: 14px;
    color: #333333;
    margin-bottom: 10px;
    font-weight: normal;
    font-style: italic;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const SessaoUsuario = styled.div`
    margin: 0px;
    padding: 0px;
`;

export const PerfilSair = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
     
`;

export const ZonaInferior = styled.main`
    display: "flex"; 
    width: "20vw";
    padding: 10px;
    align-items:center;
`;

export const Imagem = styled.img`
    border-radius: 80%;
    border: 1px solid black;
    width: 30px; 
    height: 40px;
`;


export const PerfilCentral = styled.div`
    width: 50vw;
    height: 40px;
    background-color: #ffffff;
    color: black;
    padding-left: 10px;
`;
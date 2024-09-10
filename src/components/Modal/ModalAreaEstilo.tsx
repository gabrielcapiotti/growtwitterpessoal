import styled from 'styled-components';

// Estilização da Modal em si
export const ModalEstilo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 400px; /* Define a largura fixa */
  height: 300px; /* Define a altura fixa */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Estilização do Overlay, que cobre o fundo da página
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); /* Fundo escuro para o overlay */
  z-index: 1000; /* Overlay abaixo da modal */
`;

// Área interna da Modal, com espaçamento e flexibilidade
export const ModalAreaEstilo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// Header da Modal, com um título simples
export const ModalHeader = styled.h2`
  margin-bottom: 15px;
  font-size: 18px;
`;

// Textarea da Modal, onde o usuário insere o conteúdo (ex: tweet)
export const ModalTextarea = styled.textarea`
  width: 100%;
  height: 100px; /* Altura fixa para o textarea */
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none; /* Impede o redimensionamento */
  overflow: hidden; /* Impede o aparecimento da barra de rolagem */
  overflow-x: hidden;
  margin-bottom: 15px;
`;

// Botões da Modal, estilizados para aparência consistente
export const ModalButton = styled.button`
  padding: 20px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #333;
  
  &:hover {
    background-color: #ccc;
    color: #333;
  }
`;

// Área das ações da Modal, organizando os botões lado a lado
export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

// ModalEstilo.ts
import styled from 'styled-components';

export const ModalContainer = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 400px; /* Largura ajustada */
  height: auto; /* Altura ajustável */
  padding: 20px; /* Adiciona espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve */
  background-color: #ffffff; /* Fundo branco */
  display: flex;
  flex-direction: column;
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75); /* Fundo semi-transparente */
`;

export const ModalHeader = styled.h2`
  margin-bottom: 15px;
  font-size: 18px;
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 15px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

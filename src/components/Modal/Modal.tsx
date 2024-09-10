import iconClose from '../../../public/X.svg';
import { ModalAreaEstilo, ModalEstilo } from './ModalAreaEstilo';
import { ModalOverlay } from './ModalEstilo';

interface ModalProps {
    value: string;
    setValue: (e: any) => void;
    actionCancel: () => void;
    actionConfirm: () => void;
}

export function Modal({ actionCancel, actionConfirm, value, setValue }: ModalProps) {
    return (
        <>
            {/* O Overlay fica por trás do modal e fecha ao clicar fora */}
            <ModalOverlay onClick={actionCancel} />

            {/* O Modal principal com seu conteúdo */}
            <ModalEstilo>
                <ModalAreaEstilo>
                    {/* Botão para fechar o modal */}
                    <button onClick={actionCancel} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                        <img style={{ width: '1rem' }} src={iconClose} alt="Fechar modal" />
                    </button>

                    {/* Campo de texto para o tweet */}
                    <textarea
                        placeholder="Escreva seu tweet aqui"
                        value={value}
                        onChange={setValue}
                        style={{
                            width: '100%',
                            height: '100px',
                            padding: '10px',
                            marginTop: '10px',
                            fontSize: '14px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            outline: 'none',
                        }}
                    />

                    {/* Botões de confirmação e cancelamento */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <button
                            onClick={actionConfirm}
                            style={{
                                backgroundColor: '#1DA1F2',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '14px',
                            }}
                        >
                            Tweetar
                        </button>
                        <button
                            onClick={actionCancel}
                            style={{
                                backgroundColor: '#f5f5f5',
                                color: '#333',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '14px',
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </ModalAreaEstilo>
            </ModalEstilo>
        </>
    );
}

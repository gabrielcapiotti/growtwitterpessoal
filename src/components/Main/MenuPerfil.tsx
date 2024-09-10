import { ReactNode, useEffect, useState } from "react";
import { Atualizacoes, Centro, Direita, Esquerda, GrupoBotoes, Imagem, MenuEstilo, PerfilSair, SessaoUsuario, TweetContainer, TweetItem, ZonaInferior } from "./MenuEstilo";
import { ButtomConfirm, LayoutDefault } from "../Botões/LayoutDefault";
import { Link, useNavigate } from "react-router-dom";
import LogoGrowtwitter from "../../assets/logo_growtweet.svg";
import paginaInicial from "../../assets/icone_pagina inicial.svg";
import explorar from "../../assets/icone_explorar.svg";
import perfil from "../../assets/icone_perfil_selecionado.svg";
import { CartaoAssunto } from "../CardAssuntos/CardAssuntos";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ModalAreaEstilo, ModalEstilo } from "../Modal/ModalAreaEstilo";
import { ModalOverlay } from "../Modal/ModalEstilo";
import Gandalf from "../../assets/download (14).jpg";
import BotaoLike from "../../assets/icone_curtir.svg"
import BotaoComment from "../../assets/icone_responder.svg"

// Interface para representar o conteúdo dos tweets
interface Tweet {
    id: number;
    username: string;
    content: string;
    date: Date | string;
    comments: string[]; // Lista de comentários como strings
    likes: number; // Número de likes
}

const saveTweetsToLocalStorage = (tweets: Tweet[]) => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
};

const loadTweetsFromLocalStorage = (): Tweet[] => {
    const storedTweets = localStorage.getItem('tweets');
    if (storedTweets) {
        return JSON.parse(storedTweets);
    }
    return [];
};

interface MenuProps {
    children?: ReactNode;
}

export function MenuPerfil({ children }: MenuProps) {
    const navigate = useNavigate();
    const [userLogged, setUserLogged] = useState<{ name?: string, username?: string } | null>(null);
    const [tweetContent, setTweetContent] = useState(''); // Conteúdo do tweet atual
    const [tweets, setTweets] = useState<Tweet[]>(loadTweetsFromLocalStorage());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [selectedTweetId, setSelectedTweetId] = useState<number | null>(null);
    const [commentContent, setCommentContent] = useState('');

    // Verifica o login e redireciona se o usuário não estiver logado
    useEffect(() => {
        const storedUser = localStorage.getItem('userLogged');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser && parsedUser.email && parsedUser.id) {
                setUserLogged(parsedUser);
            } else {
                navigate('/Login');
            }
        } else {
            navigate('/Login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userLogged');
        setUserLogged(null);
        navigate('/Login');
    };

    const handleTweet = () => {
        if (tweetContent.trim() === '') return;
        const newTweet: Tweet = {
            id: tweets.length + 1,
            username: userLogged?.username || 'Usuário',
            content: tweetContent,
            date: new Date(),
            comments: [], // Inicializa sempre como array vazio
            likes: 0, // Inicializa com 0 likes
        };
        const updatedTweets = [newTweet, ...tweets];
        setTweets(updatedTweets);
        saveTweetsToLocalStorage(updatedTweets);
        setTweetContent('');
        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTweetContent('');
    };

    const openCommentModal = (tweetId: number) => {
        setSelectedTweetId(tweetId);
        setIsCommentModalOpen(true);
    };

    const closeCommentModal = () => {
        setIsCommentModalOpen(false);
        setCommentContent('');
    };

    const handleComment = () => {
        if (commentContent.trim() === '' || selectedTweetId === null) return;

        const updatedTweets = tweets.map(tweet => {
            if (tweet.id === selectedTweetId) {
                return {
                    ...tweet,
                    comments: [...tweet.comments, commentContent], // Adiciona o comentário
                };
            }
            return tweet;
        });

        setTweets(updatedTweets);
        saveTweetsToLocalStorage(updatedTweets);
        setCommentContent('');
        setIsCommentModalOpen(false); // Fecha o modal após comentar
    };

    // Função para curtir um tweet
    const handleLikeTweet = (tweetId: number) => {
        const updatedTweets = tweets.map(tweet => {
            if (tweet.id === tweetId) {
                return { ...tweet, likes: tweet.likes + 1 };
            }
            return tweet;
        });

        setTweets(updatedTweets);
        saveTweetsToLocalStorage(updatedTweets);
    };

    return (
        <MenuEstilo>
            {children}
            <Esquerda>
                <GrupoBotoes>
                    <img src={LogoGrowtwitter} alt="Logo Growtwitter" />
                    <LayoutDefault as={Link} to="/"> <img src={paginaInicial} alt="Página Inicial" />Pagina Inicial</LayoutDefault>
                    <LayoutDefault as={Link} to="/Explorar"> <img src={explorar} alt="Explorar" /> Explorar</LayoutDefault>
                    <LayoutDefault as={Link} to="/Perfil"> <img src={perfil} alt="Perfil" />Perfil</LayoutDefault>
                    <ButtomConfirm onClick={openModal} style={{ width: "150px" }}>Tweetar</ButtomConfirm>
                </GrupoBotoes>

                <ZonaInferior>
                    <PerfilSair>
                        <SessaoUsuario>
                            {userLogged?.name || 'Nome'}
                            <br />
                            @{userLogged?.username || 'Usuario'}
                        </SessaoUsuario>
                        <ButtomConfirm onClick={handleLogout}>Sair</ButtomConfirm>
                    </PerfilSair>
                </ZonaInferior>
            </Esquerda>

            <Centro>
                <h1>Perfil de @{userLogged?.username}</h1>

                <TweetContainer>
                    {tweets.map((tweet) => (
                        <TweetItem key={tweet.id}>
                            <div>
                                <Imagem src={Gandalf} alt="Avatar" />
                                <div>
                                    <strong>{tweet.username}</strong> • {formatDistanceToNow(new Date(tweet.date || Date.now()), { addSuffix: true, locale: ptBR })}
                                </div>
                            </div>
                            <p>{tweet.content}</p>
                            <div className="tweet-actions">
                                {/* Botão de Curtir usando uma imagem */}
                                <img
                                    src={BotaoLike}  // Substitua pelo caminho da sua imagem de curtir
                                    alt="Curtir"
                                    style={{ cursor: 'pointer', width: '20px', height: '20px', marginRight: '8px' }}  // Estilização da imagem
                                    onClick={() => handleLikeTweet(tweet.id)}  // Função de curtir
                                />
                                {tweet.likes || 0} curtidas
                                &nbsp;•&nbsp;

                                {/* Botão de Comentários usando uma imagem */}
                                <img
                                    src={BotaoComment}  // Substitua pelo caminho da sua imagem de comentários
                                    alt="Comentários"
                                    style={{ cursor: 'pointer', width: '20px', height: '20px', marginRight: '8px' }}  // Estilização da imagem
                                    onClick={() => openCommentModal(tweet.id)}  // Função de abrir o modal de comentários
                                />
                                {tweet.comments.length || 0} comentários
                            </div>

                        </TweetItem>
                    ))}
                </TweetContainer>
            </Centro>

            <Direita>
                <Atualizacoes>
                    <CartaoAssunto />
                </Atualizacoes>
            </Direita>

            {isModalOpen && (
                <>
                    <ModalOverlay onClick={closeModal} />
                    <ModalEstilo>
                        <ModalAreaEstilo>
                            <h2>Digite seu tweet aqui!</h2>
                            <textarea
                                value={tweetContent}
                                onChange={(e) => setTweetContent(e.target.value)}
                                placeholder="Escreva seu tweet"
                                style={{ width: '90%', height: '100px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                <ButtomConfirm onClick={handleTweet}>Tweetar</ButtomConfirm>
                                <ButtomConfirm onClick={closeModal}>Cancelar</ButtomConfirm>
                            </div>
                        </ModalAreaEstilo>
                    </ModalEstilo>
                </>
            )}

            {isCommentModalOpen && (
                <>
                    <ModalOverlay onClick={closeCommentModal} />
                    <ModalEstilo>
                        <ModalAreaEstilo style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                            <h2>Comentários</h2>
                            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                                {tweets.find(tweet => tweet.id === selectedTweetId)?.comments.map((comment, index) => (
                                    <TweetItem key={index}>
                                        <div style={{ color: '#333', fontSize: '14px' }}>
                                            <strong>@Usuário</strong> • {formatDistanceToNow(new Date(Date.now()), { addSuffix: true, locale: ptBR })}
                                        </div>
                                        <p style={{ color: '#333', fontSize: '14px' }}>{comment}</p>
                                    </TweetItem>
                                ))}
                            </div>
                            <textarea
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                                placeholder="Escreva seu comentário"
                                style={{ width: '90%', height: '100px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd', color: '#333' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                <ButtomConfirm onClick={handleComment}>Comentar</ButtomConfirm>
                                <ButtomConfirm onClick={closeCommentModal}>Cancelar</ButtomConfirm>
                            </div>
                        </ModalAreaEstilo>

                    </ModalEstilo>
                </>
            )}
        </MenuEstilo>
    );
}

export default MenuPerfil;

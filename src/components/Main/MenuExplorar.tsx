import { Atualizacoes, Centro, CentroInterno, Direita, Esquerda, GrupoBotoes, Imagem, ItemAtualizacao, MenuEstilo, PerfilCentral, PerfilSair, SessaoUsuario, Subtitulo, Titulo, ZonaInferior } from "./MenuEstilo";
import { ReactNode } from "react";
import { ButtomConfirm, LayoutDefault } from "../Botões/LayoutDefault";
import { Link } from "react-router-dom";
import paginaInicial from "../../assets/icone_pagina inicial.svg";
import explorar from "../../assets/icone_explorar.svg";
import perfil from "../../assets/icone_perfil_selecionado.svg";
import { CartaoAssunto } from "../CardAssuntos/CardAssuntos";
import LogoGrowtwitter from "../../assets/logo_growtweet.svg"

interface MenuProps {
    children?: ReactNode;
}

export function MenuExplorar({ children }: MenuProps) {

    return (
        <MenuEstilo>
            {children}
            <Esquerda>
                <GrupoBotoes>
                    <img src={LogoGrowtwitter} />
                    <LayoutDefault as={Link} to="/"> <img src={paginaInicial} />Pagina Inicial</LayoutDefault>
                    <LayoutDefault as={Link} to="/Explorar"> <img src={explorar} /> Explorar</LayoutDefault>
                    <LayoutDefault as={Link} to="/Perfil"> <img src={perfil} />Perfil</LayoutDefault>
                    <ButtomConfirm as={Link} to="/" style={{ width: "150px" }}>Tweetar</ButtomConfirm>
                </GrupoBotoes>

                <ZonaInferior>
                    <PerfilSair>
                        <div style={{ marginRight: '5px' }}>
                            <Imagem src={perfil} />
                        </div>
                        <SessaoUsuario>
                            Nome
                            Usuario
                        </SessaoUsuario>
                        <ButtomConfirm as={Link} to="/Login">Sair</ButtomConfirm>
                    </PerfilSair>
                </ZonaInferior>
            </Esquerda>

            <Centro>
                <PerfilCentral>
                    <SessaoUsuario>
                        <b style={{ fontSize: "30px" }}>Explorar</b>
                    </SessaoUsuario>
                </PerfilCentral>
                <CentroInterno>
                    <Titulo>O que está acontecendo?</Titulo>

                    <Subtitulo>
                        Esportes - Há 45 min
                        <br />
                        <ItemAtualizacao>
                            Assuntos Sobre esportes
                        </ItemAtualizacao>
                    </Subtitulo>

                    <Subtitulo>
                        Assuntos do Momento em Brasil
                        <br />
                        <ItemAtualizacao>
                            Assuntos do Momento
                        </ItemAtualizacao>
                    </Subtitulo>

                    <Subtitulo>
                        Músicas - Assuntos do Momento
                        <br />
                        <ItemAtualizacao>
                            Assuntos Sobre Músicas
                        </ItemAtualizacao>
                    </Subtitulo>

                    <Subtitulo>
                        Cinema - Assuntos do Momento
                        <br />
                        <ItemAtualizacao>
                            Assuntos Sobre Filmes e Cinema
                        </ItemAtualizacao>
                    </Subtitulo>

                    <Subtitulo>
                        Cinema - Assuntos do Momento
                        <br />
                        <ItemAtualizacao>
                            Assunto do Momento em Porto Alegre
                        </ItemAtualizacao>
                    </Subtitulo>

                    <Subtitulo>
                        Daphne -Principal Assunto do Momento
                        <br />
                        <ItemAtualizacao>
                            Assuntos Sobre a Daphne
                        </ItemAtualizacao>
                    </Subtitulo>

                    <Subtitulo>
                        Cinema - Assuntos do Momento
                        <br />
                        <ItemAtualizacao>
                            Assuntos Sobre Filmes e Cinema
                        </ItemAtualizacao>
                    </Subtitulo>
                </CentroInterno>
            </Centro>

            <Direita>
                <Atualizacoes>
                    <CartaoAssunto />
                </Atualizacoes>
            </Direita>
        </MenuEstilo>
    );
}



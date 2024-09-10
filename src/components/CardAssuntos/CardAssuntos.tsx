import { ItemAtualizacao, Subtitulo, Titulo } from "../Main/MenuEstilo"

export function CartaoAssunto() {
    return (
        <>

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

            <ItemAtualizacao><a href="/Explorar">Mostrar Mais</a></ItemAtualizacao>
        </>
    )
}


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doPost } from '../../services/api';
import { CampoTexto, Formulario, LoginEstilo, PaginaLogin, Textualizacao } from './LoginEstilo';
import { ButtomConfirm } from '../Botões/LayoutDefault';


function CriarContaConteudo() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const navigate = useNavigate();

    async function handleCreateAccount() {
        if (!email || !password || !name || !username) {
            alert('Favor preencher os campos.');
        }

        const response = await doPost('/users', { email, password, name, username }, '');

        if (response.success) {
            navigate('/');
        }
    }

    return (
        <PaginaLogin>
            <LoginEstilo>
                <Textualizacao>
                    <h2>Growtwitter</h2>
                    <h5>Trabalho final do bloco intermediário</h5>
                    <p>
                        O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que
                        buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único.
                        Seja parte desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de
                        todo o mundo e a disseminação de ideias.
                    </p>
                </Textualizacao>
                <Formulario>
                    <form onSubmit={handleCreateAccount}>
                        <label htmlFor="name">Nome</label>
                        <CampoTexto type="text" id="name" value={name} onChange={ev => setName(ev.target.value)} />

                        <label htmlFor="username">Apelido</label>
                        <CampoTexto type="text" id="username" value={username} onChange={ev => setUsername(ev.target.value)} />

                        <label htmlFor="email">Email</label>
                        <CampoTexto type="text" id="email" value={email} onChange={ev => setEmail(ev.target.value)} />

                        <label htmlFor="password">Senha</label>
                        <CampoTexto type="password" id="password" value={password} onChange={ev => setPassword(ev.target.value)} />

                        <ButtomConfirm type="submit" style={{ width: "265px" }}>Criar Conta</ButtomConfirm>
                        <a href="/Login" style={{ fontSize: "11px" }}>Já tem conta? Faça Login!</a>
                    </form>
                </Formulario>
            </LoginEstilo>
        </PaginaLogin>
    );
}

export default CriarContaConteudo;
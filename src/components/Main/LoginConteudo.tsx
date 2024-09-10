import { useState } from "react";
import { CampoTexto, Formulario, LoginEstilo, PaginaLogin, Textualizacao } from "./LoginEstilo";
import { ButtomConfirm } from "../Botões/LayoutDefault";
import { useNavigate } from "react-router-dom";
import { doPost } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export function LoginConteudo() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();

        if (!email || !password) {
            toast.error('Favor preencher os campos.', { position: 'top-center', autoClose: 2000 });
            return;
        }

        const data = { email, password };
        setLoading(true);

        try {
            const response = await doPost('/auth', data);
            if (response.success) {
                const token = response.data.token;
                const dataLogin = { email: data.email, token: token, id: response.data.id, name: response.data.name, username: response.data.username };

                localStorage.setItem('userLogged', JSON.stringify(dataLogin));
                toast.success('Login efetuado com sucesso!', { position: 'top-center', autoClose: 2000 });

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                toast.error('Erro no login. Verifique suas credenciais.');
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao tentar fazer login.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <PaginaLogin>
            <ToastContainer />
            <LoginEstilo>
                <Textualizacao>
                    <h2>Growtwitter</h2>
                    <h5>Trabalho final do bloco intermediário</h5>
                    <p>O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa...</p>
                </Textualizacao>
                <Formulario>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <CampoTexto type="text" id="email" value={email} onChange={ev => setEmail(ev.target.value)} />
                        <label htmlFor="password">Senha</label>
                        <CampoTexto type="password" id="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                        {loading ? 'Carregando...' : <ButtomConfirm type="submit" style={{ width: "250px" }}>Entrar</ButtomConfirm>}
                        <Link to="/CriarConta" style={{ fontSize: "11px" }}> Ainda não tem conta? Criar Conta.</Link>
                    </form>
                </Formulario>
            </LoginEstilo>
        </PaginaLogin>
    );
}

export default LoginConteudo;

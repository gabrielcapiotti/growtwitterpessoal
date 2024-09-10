import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // URL da API backend
});

export async function doPost(url: string, data: any, token: string = '') {
    try {
        const response = await api.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            return { success: true, data: response.data };
        }
        return { success: false, msg: 'Erro no login.' };
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return { success: false, msg: 'Credenciais inválidas.' };
        }
        return { success: false, msg: 'Erro ao tentar fazer login.' };
    }
}

export async function doGet<T>(url: string, token: string): Promise<{ success: boolean; data?: T; auth: boolean }> {
    try {
        const response = await api.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
            return { success: true, data: response.data, auth: true };
        }
        return { success: false, auth: false };
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return { success: false, auth: false };
        }
        return { success: false, auth: false };
    }
}

export async function doDel(url: string, token: string) {
    try {
        const response = await api.delete(url, { headers: { Authorization: `Bearer ${token}` } });
        if (response.status === 200) {
            return { success: true, data: response.data, auth: true };
        }
        return { success: false, msg: 'Erro ao deletar', auth: false };
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return { success: false, msg: 'Erro ao deletar', auth: false };
        }
        return { success: false, msg: 'Erro ao deletar', auth: false };
    }
}

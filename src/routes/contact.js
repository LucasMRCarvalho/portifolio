import express from 'express';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    if (!nome || !email || !telefone || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    try {
        await sendEmail(nome, email, telefone, mensagem);
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        res.status(500).json({ error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' });
    }
});

export default router;

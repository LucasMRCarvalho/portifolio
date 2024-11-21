import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js'; // Importa as rotas de contato

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Middleware para JSON
app.use(express.static('public')); // Serve os arquivos da pasta public

// Rotas
app.use('/api/contact', contactRoutes); // Configura a rota de contato

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/api/config', (req, res) => {
    res.json({ apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3001" });
});
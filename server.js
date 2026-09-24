import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

// Servir arquivos estáticos da pasta dist gerada pelo Vite
app.use(express.static(distPath));

// Suporte para rotas de SPA (Single Page Application)
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send('Build do frontend não encontrado. Por favor, execute "npm run build" antes de iniciar o servidor.');
  }
});

app.listen(PORT, () => {
  console.log(`[Codekis Lab] Servidor ativo e ouvindo na porta ${PORT}`);
});

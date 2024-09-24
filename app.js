const express = require('express');
const fs = require('fs');
const path = require('path');

// Configuração do servidor Express
const app = express();
const PORT = process.env.PORT || 3000;

// Função para ler o arquivo JSON
function getNews() {
    const filePath = path.join(__dirname, 'news.json');
    
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

// Rota para scraping
app.get('/news', async (req, res) => {
    const news = getNews();
    res.setHeader('Content-Type', 'application/json'); // Define o tipo de conteúdo como JSON
    res.send(JSON.stringify(news, null, 2)); // Formata o JSON com indentação de 2 espaços
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Running at port: ${PORT}`);
});

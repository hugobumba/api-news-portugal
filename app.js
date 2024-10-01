const express = require('express');
const fs = require('fs');
const path = require('path');

// Express server configs
const app = express();
const PORT = process.env.PORT || 3000;

// Read JSON file from 'data' folder
function getNews() {
    const filePath = path.join(__dirname, 'data', 'news.json'); // Apontar para a pasta 'data'
    
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

// News route
app.get('/api/news', async (req, res) => {
    const news = getNews();
    res.setHeader('Content-Type', 'application/json'); // Define o tipo de conteúdo como JSON
    res.send(JSON.stringify(news, null, 2)); // Formata o JSON com indentação de 2 espaços
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Running at port: ${PORT}`);
});

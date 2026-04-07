const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json())

const users = [ 
    {id: 1, username: 'admin', password: 'admin123'},
    {id: 2, username: 'Pedro', password: 'senha456'},
    {id: 3, username: 'guest', password: 'guest789'},
];

app.post('/login', (req, res) => {
    const {username, password } = req.body;

    if (
        !username ||
        !password ||
        username.includes(';') ||
        password.includes(';')
    ) {
        return res.status(400).json({
            success: false,
            message: 'Entrada invalida. Verifique os campos e tente novamente.'
        });
    }

    const user = users.find(
    (u) => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            success: false,
            message: 'Usuario ou senha incorretos.',
        });
    }   

    return res.status(200).json({
        success: true,
        message: `Bem-vindo, ${user.username}! Login efetuado com sucesso.`,
        userID: user.id,
    });
});

app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});    



   

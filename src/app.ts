import express from 'express';
import cors from 'cors';
import { DatabaseModel } from './model/databasemodel';

const port: number = 3333;

const server = express();
server.use(cors());
server.use(express.json());


server.get('/', (req, res) => {
    res.json({ mensagem: "Olá mundo, está é minha primeira aplicação web"});
});

  server.get('/pessoas',(req, res) =>{
    res.json({mensagem:"Aqui será apresentado o dado das pessoas"});
  });

  new DatabaseModel().testeConexao().then((resdb) =>{
    if(resdb){
      console.log("conexao com banco de dados realizada com sucesso!");
      server.listen(port,() =>{
        console.log("servidor iniciado no endereço https://localhost:${port}");
      })

    } else {
      console.log("Erro ao conectar com o banco de dados");
    }
  });


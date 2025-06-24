import express, { json } from  'express';
import 'dotenv';
import 'dotenv/config'

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor escutando a porta ${port}`);
})
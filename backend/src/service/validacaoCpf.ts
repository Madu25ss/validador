import axios from "axios"
import 'dotenv';
import 'dotenv/config';
import { response } from "express";

const apikeyCpf = process.env.APIKEYCPF;

async function validarCPF(cpf: string, nascimento?: string ) {
  const url = 'https://api.cpfhub.io/api/cpf';

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apikeyCpf,
  };

  const body = {
    cpf,
    birthDate: nascimento,
  };

  const response = await axios.post(url, body, { headers });
  return response.data;
}

export default validarCPF;
import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apikeyPlaca = process.env.APIKEYBYTOOLS;

async function geraPlaca(points: boolean, state: string, make: string, year: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/veiculos`;


  const headers = {
    "x-api-key": apikeyPlaca,
  };

  try {
    const response = await axios.get(url, { params: {points, state, make, year}, headers});
    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao gerar Placa");
  }
}

export default geraPlaca;

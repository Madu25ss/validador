import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apikeyPlaca = process.env.APIKEYBYTOOLS;

export async function validarPlaca(plate: string) {
  const url = `https://api.bytools.tech/api/v1/public/validadores/placa-veiculo`;

  const headers = {
    "x-api-key": apikeyPlaca,
  };

  const response = await axios.get(url, { params: { plate }, headers });
  return response.data;
}

export async function geraPlaca(points: boolean, state: string, make: string, year: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/veiculos`;


  const headers = {
    "x-api-key": apikeyPlaca,
  };

  const response = await axios.get(url, { params: {points, state, make, year}, headers});
  return response.data;
}

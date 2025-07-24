import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apikeyCnh = process.env.APIKEYBYTOOLS;

export async function validarCNH(number: string) {
  const url = `https://api.bytools.tech/api/v1/public/validadores/cnh`;

  const headers = {
    "x-api-key": apikeyCnh,
  };

  const response = await axios.get(url, { params: { number }, headers });
  return response.data;
}

export async function geraCnh(points: string, allInformation: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/cnh`;

  const headers = {
    "X-API-KEY": apikeyCnh,
  };

  const response = await axios.get(url, { params: {points, allInformation}, headers},);
  return response.data;
}

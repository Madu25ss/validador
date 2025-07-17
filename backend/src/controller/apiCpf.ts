import express from "express";
import { Request, Response, NextFunction } from "express";
import {validarCPF, geraCpf} from "../service/validacaoCpf";


export const validacaoCPF = async (req: Request, res: Response, _nxt: NextFunction) => {
  const {cpf, nascimento} = req.body;

  if (!cpf) {
    res.status(400).json({error: 'O Campo CPF é Obrigatório'})
  } 


//  else if (!nascimento) {} Validação quando a data de nascimento não for enviada

try {
  const resultado = await validarCPF(cpf, nascimento);
  res.status(200).json({
    sucess: true,
    message: 'CPF válido!',
    data: {
      nome: resultado.data.name,
      nascimento: resultado.data.birthDate,
      cpf: resultado.data.cpfNumber,
      situacao: resultado.data.situation,
    }
  });
} catch (error) {
  // console.error('Erro ao validar o CPF: ', error.message);
  res.status(500).json({error: 'Erro ao validar CPF'})
}

};

export const geracaoCPF = async (req: Request, res: Response, _nxt: NextFunction) => {
  
}
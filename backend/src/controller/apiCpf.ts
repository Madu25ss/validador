import express from "express";
import { Request, Response, NextFunction } from "express";
import { validarCPF, geraCpf } from "../service/validacaoCpf";

export const validacaoCPF = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
): Promise<any> =>  {
  const { cpf, nascimento } = req.body;

  if (!cpf) {
    res.status(400).json({ error: "O Campo CPF é Obrigatório" });
  }


  try {
    const resultado = await validarCPF(cpf, nascimento);
    res.status(200).json({
      success: true,
      message: "CPF válido!",
      data: {
        nome: resultado.data.name,
        nascimento: resultado.data.birthDate,
        cpf: resultado.data.cpfNumber,
        situacao: resultado.data.situation,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao validar CPF" });
  }
};

export const geracaoCPF = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
): Promise<any> => {
  const { points, state } = req.query;

  try {
    const resultado = await geraCpf(String(points), String(state));
    if (res.status(200)) {
      res.status(200).json({
        success: true,
        dataCpf: resultado.data.cpf,
      });
    } else {
      return res.status(400).json({
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar CPF" });
  }
};

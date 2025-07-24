import express from "express";
import { Request, Response, NextFunction } from "express";
import { validarCNH, geraCnh } from "../service/validacaoCnh";

export const validacaoCNH = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
) => {
  const { number } = req.query;

  if (!number) {
    res.status(400).json({ error: "O Campo CNH é Obrigatório" });
  }

  try {
    const resultado = await validarCNH(String(number));

    if (resultado.data.valid === true) {
      res.status(200).json({
        success: true,
        valid: true,
        message: "CNH válida!",
      });
    } else {
      return res.status(400).json({
        success: false,
        valid: false,
        message: "CNH inválida",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao validar CNH" });
  }
};

export const geracaoCNH = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
) => {
  const { points, allInformation} = req.query;

  try {
    const resultado = await geraCnh(String(points), String(allInformation));
    if (res.status(200)) {
      res.status(200).json({
        success: true,
        dataCnh: resultado.data,
      });
    } else {
      return res.status(400).json({
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar CNH"});
  }
};


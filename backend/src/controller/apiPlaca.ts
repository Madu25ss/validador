import express from "express";
import { Request, Response, NextFunction } from "express";
import { validarPlaca, geraPlaca } from "../service/validacaoPlaca";

export const validacaoPlaca = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
): Promise<any> => {
  const { plate } = req.query;

  if (!plate) {
    res.status(400).json({ error: "O Campo é Obrigatório" });
  }

  try {
    const resultado = await validarPlaca(String(plate));

    if (resultado.data.valid === true) {
      res.status(200).json({
        success: true,
        data: resultado.data,
      });
    } else {
      return res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao validar Placa" });
  }
};


export const geracaoPlaca = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
): Promise<any> => {

  const {points, state, make, year} = req.query;

  try {
    const resultado = await geraPlaca(
      points === "true",
      String(state),
      String(make),
      String(year),
    )
    if (res.status(200)) {
      res.status(200).json({
        data: resultado.data,
      });
    } else {
      return res.status(400).json({
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar Placa"});
  }
};

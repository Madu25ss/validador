import express from "express";
import { Request, Response, NextFunction } from "express";
import { validarCNPJ, geraCnpj, validarCNPJsimples } from "../service/validacaoCnpj";

export const validacaoCNPJ = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
): Promise<any> => {
  
  let { cnpj } = req.params;
  

  if (!cnpj) {
    res.status(400).json({ error: "O Campo CNPJ é Obrigatório" });
  }


  try {
    const resultado = await validarCNPJ(cnpj);
    res.status(200).json({
      success: true,
      message: "CNPJ válido!",
      data: {
        //pode estar errado
        razaoSocial: resultado.razao_social,
        nomeFantasia: resultado.nome_fantasia,
        naturezaJuridica: resultado.natureza_juridica,
        descricaoSituacaoCadastral: resultado.descricao_situacao_cadastral,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao validar CNPJ" },);
  }
};

export const validacaoCNPJsimples = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
): Promise<any> => {
  
  let { cnpj } = req.query;
  

  if (!cnpj) {
    res.status(400).json({ error: "O Campo CNPJ é Obrigatório" });
  }

  try {
    const resultado = await validarCNPJsimples(String(cnpj));
    res.status(200).json({
      data: resultado.data,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao validar CNPJ Simples" },);
  }
};

export const geracaoCNPJ = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
): Promise<any> => {
  const { points} = req.query;

  try {
    const resultado = await geraCnpj(String(points));
    if (res.status(200)) {
      res.status(200).json({
        success: true,
        dataCnpj: resultado.data,
      });
    } else {
      return res.status(400).json({
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar CNPJ"});
  }
};


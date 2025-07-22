import express from "express";
import { Request, Response, NextFunction } from "express";
import validarCNPJ from "../service/validacaoCnpj";
import geraCnpj from "../service/criacaoCnpj";

export const validacaoCNPJ = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
) => {
  const { cnpj } = req.params;
  

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
    // console.error('Erro ao validar o CPF: ', error.message);
    res.status(500).json({ error: "Erro ao validar CNPJ" });
  }
};

export const geracaoCNPJ = async (
  req: Request,
  res: Response,
  _nxt: NextFunction
) => {
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


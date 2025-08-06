import { Router } from "express";
import { geracaoCPF, validacaoCPF } from "../controller/apiCpf";
import { validacaoCNPJ, validacaoCNPJsimples } from "../controller/apiCnpj";
import { validacaoCNH, geracaoCNH } from "../controller/apiCnh";
import { geracaoCNPJ } from "../controller/apiCnpj";
import { validacaoPlaca, geracaoPlaca } from "../controller/apiPlaca";

const router = Router();

//ROTAS PARA VALIDAÇÃO:
router.post("/validarCPF", validacaoCPF);
router.get("/validaCNPJ/:cnpj", validacaoCNPJ);
router.get("/validaCNPJsimples", validacaoCNPJsimples);
router.get("/validaCNH", validacaoCNH);
router.get("/validaPlaca", validacaoPlaca);

//ROTAS PARA GERAÇÃO
//"NO OVERLOADS MATCHES THIS CALL": resolvido com :Promise<any> => na controller
router.get("/geraCPF", geracaoCPF);
router.get("/geraCNPJ", geracaoCNPJ);
router.get("/geraCNH", geracaoCNH);
router.get("/geraPlaca", geracaoPlaca);

export default router;

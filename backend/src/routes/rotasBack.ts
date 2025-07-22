import { Router } from "express";
import { geracaoCPF, validacaoCPF } from "../controller/apiCpf";
import { validacaoCNPJ } from "../controller/apiCnpj";
import { validacaoCNH, geracaoCNH } from "../controller/apiCnh";
import { geracaoCNPJ } from "../controller/apiCnpj";
import { validacaoPlaca, geracaoPlaca } from "../controller/apiPlaca";

const router = Router();

router.use("/validarCPF", validacaoCPF);
router.get("/validaCNPJ/:cnpj", validacaoCNPJ);
//RESOLVER NO OVERLOADS MATCHES THIS CALL
router.get("/validaCNH", validacaoCNH);
router.get("/geraCPF", geracaoCPF);
router.get("/geraCNPJ", geracaoCNPJ);
router.get("/geraCNH", geracaoCNH);
router.get("/validaPlaca", validacaoPlaca);
router.get("/geraPlaca", geracaoPlaca);

export default router;

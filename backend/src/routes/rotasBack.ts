import { Router } from "express";
import { geracaoCPF, validacaoCPF } from "../controller/apiCpf";
import { validacaoCNPJ } from "../controller/apiCnpj";
import { validacaoCNH } from "../controller/apiCnh";

const router = Router();

router.use("/validarCPF", validacaoCPF);
router.get("/validaCNPJ/:cnpj", validacaoCNPJ);
//resolver 
router.get("/validaCNH", validacaoCNH);
router.get("/geraCPF", geracaoCPF);

export default router;

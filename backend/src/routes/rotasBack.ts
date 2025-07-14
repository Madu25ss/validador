import { Router } from "express";
import { validacaoCPF } from "../controller/apiCpf";
import { validacaoCNPJ } from "../controller/apiCnpj";
import { validacaoCNH } from "../controller/apiCnh";

const router = Router();

router.use("/validarCPF", validacaoCPF);
router.get("/validaCNPJ/:cnpj", validacaoCNPJ);
router.get("/validaCNH", validacaoCNH);

export default router;

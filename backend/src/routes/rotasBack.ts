import { Router } from "express";
import { validacaoCPF } from "../controller/apiCpf";


const router = Router();

router.use("/validarCPF", validacaoCPF);

export default router;
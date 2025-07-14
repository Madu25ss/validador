import { create } from 'zustand'

type EstadoValidador = {
  cnh: string;
  resultado?: boolean;
  validaInput?: boolean;
  retornoJson: string[];
  naoExibir?: boolean;
  sucesso?: boolean;
  carregando: boolean;

  setCnh: (valor: string) => void;
  setResultado: (valor: boolean ) => void;
  setValidaInput: (valor: boolean) => void;
  setRetornoJson: (valor: string[]) => void;
  SetNaoExibir: (valor: boolean) => void;
  setSucesso: (valor: boolean) => void;
  setCarregando: (valor: boolean) => void};

export const useValidadorStore = create<EstadoValidador>((set) => ({
  cnh: "",
  resultado: undefined,
  validaInput: undefined,
  retornoJson: [],
  naoExibir: undefined,
  sucesso: undefined,
  carregando: false,

  setCnh: (valor) => set({ cnh: valor }),
  setResultado: (valor) => set({ resultado: valor }),
  setValidaInput: (valor) => set({ validaInput: valor }),
  setRetornoJson: (valor) => set({ retornoJson: valor }),
  SetNaoExibir: (valor) => set({ naoExibir: valor }),
  setSucesso: (valor) => set({sucesso: valor}),
  setCarregando: (valor) => set({carregando: valor}),
}));

import { create } from 'zustand'

type EstadoValidador = {
  resultado?: boolean;
  retornoJson: string[];
  naoExibir?: boolean;
  sucesso?: boolean;


  setResultado: (valor: boolean ) => void;
  setRetornoJson: (valor: string[]) => void;
  SetNaoExibir: (valor: boolean) => void;
  setSucesso: (valor: boolean) => void;
};

export const useGeradorStore = create<EstadoValidador>((set) => ({

  resultado: undefined,
  retornoJson: [],
  naoExibir: true,
  sucesso: undefined,



  setResultado: (valor) => set({ resultado: valor }),
  setRetornoJson: (valor) => set({ retornoJson: valor }),
  SetNaoExibir: (valor) => set({ naoExibir: valor }),
  setSucesso: (valor) => set({sucesso: valor}),

}));

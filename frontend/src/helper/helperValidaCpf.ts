import { useHooksStore } from "../store/storeHooks";

export function useValidacaoInputCpf() {
  const { setSucesso, SetNaoExibir } = useHooksStore();

  return (cpf: string) => {
    SetNaoExibir(true);

    function isSequencia(cpfNumero: string) {
      const sequencia = cpfNumero[0].repeat(cpfNumero.length);
      return sequencia === cpfNumero;
    }

    if (isSequencia(cpf)) {
      setSucesso(false);
      return false;
    }

    function criaDigito(cpfParcial: string) {
      const cpfArray = Array.from(cpfParcial);
      let regressivo = cpfArray.length + 1;

      const total = cpfArray.reduce((ac: number, val) => {
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
      }, 0);

      let digito = 11 - (total % 11);
      return digito > 9 ? "0" : String(digito);
    }

    const cpfParcial = cpf.slice(0, -2);
    const digito1 = criaDigito(cpfParcial);
    const digito2 = criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    const valido = novoCpf === cpf;
    setSucesso(valido);
    return valido;
  };
}

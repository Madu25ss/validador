import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHooksStore } from "../store/storeHooks";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

type propsValidacao = {
  validacao?: boolean;
};

const Validacao = (props: propsValidacao) => {
  const { carregando } = useHooksStore();

  if (carregando) {
    // iconDiv = <FontAwesomeIcon icon={faCheck} className="text-green-700" />;
    return (
      <div className="flex flex-col text-xs w-fit pr-2  pl-1 mt-1">
        <div className="flex flex-row space-x-1">
          <div><FontAwesomeIcon icon={faArrowsRotate} className="text-zinc-400" /></div>
          <div className="text-xs text-zinc-500">Carregando...</div>
        </div>
      </div>
    );
  }

  let iconDiv, textDiv;

  if (props.validacao == true) {
    iconDiv = <FontAwesomeIcon icon={faCheck} className="text-green-700" />;
    textDiv = <div className="text-xs text-green-700">Válido</div>;
  } else if (props.validacao === undefined) {
    <div></div>;
  } else if (props.validacao == false) {
    iconDiv = <FontAwesomeIcon icon={faXmark} className="text-red-800" />;
    textDiv = <div className="text-xs text-red-800">Inválido</div>;
  } else {
    return null;
  }

  return (
    <div className="flex flex-col text-xs w-fit pr-2 mt-1 pl-1">
      <div className="flex flex-row space-x-1">
        <div>{iconDiv}</div>
        <div>{textDiv}</div>
      </div>
    </div>
  );
};

export default Validacao;

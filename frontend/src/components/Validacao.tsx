import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



type propsValidacao = {
  validacao?: boolean;
};

const Validacao = (props: propsValidacao) => {

   let iconDiv, textDiv;

    if (props.validacao == true) {
      iconDiv = <FontAwesomeIcon icon={faCheck} className='text-green-700'/>;
      textDiv = <div className='text-xs text-green-700'>Válido</div>;
    } else if (props.validacao === undefined) {
      <div>não identificado</div>
    } else {
      iconDiv = <FontAwesomeIcon icon={faXmark} className='text-red-700'/>;
      textDiv = <div className='text-xs text-red-700'>Inválido</div>;
    }; 

  return (
    <>
      <div>{iconDiv}</div>
      <div>{textDiv}</div>
    </>
  )
}

export default Validacao
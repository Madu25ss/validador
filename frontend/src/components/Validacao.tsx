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
      <div></div>
    } else {
      iconDiv = <FontAwesomeIcon icon={faXmark} className='text-red-800'/>;
      textDiv = <div className='text-xs text-red-800'>Inválido</div>;
    }; 

  return (
    <div className='flex flex-col text-xs w-fit pr-2'>
      <div className='flex flex-row space-x-1'>
        <div>{iconDiv}</div>
        <div>{textDiv}</div>
      </div>
    </div>
  )
}

export default Validacao


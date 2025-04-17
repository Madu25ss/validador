type BotaoProps = {
    onClick: () => void;
};


const Botao = (props: BotaoProps) => {
  return (
    <button 
    type="button" 
    className="rounded bg-blue-400 text-white py-1 px-2 mt-2 cursor-pointer transition delay-100 duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-1" 
    onClick={props.onClick}>
        Enviar
    </button>
  )
}

export default Botao;
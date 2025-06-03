type BotaoProps = {
    onClick: () => void;
};


const Botao = (props: BotaoProps) => {
  return (
    <button 
    type="button" 
    className="rounded bg-blue-700 text-white text-sm py-1 px-2 mt-8 cursor-pointer transition delay-80 duration-300 ease-in-out hover:bg-blue-900 hover:-translate-y-0.5 shadow-md/30" 
    onClick={props.onClick}>
        Enviar
    </button>
  )
}

export default Botao;
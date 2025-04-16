type BotaoProps = {
    onClick: () => void;
};


const Botao = (props: BotaoProps) => {
  return (
    <button type="button" className="rounded bg-blue-400 text-white py-1 px-2 mt-2 cursor-pointer active:transform-[scale(1.1)] hover:bg-blue-600" onClick={props.onClick}>
        Enviar
    </button>
  )
}

export default Botao;
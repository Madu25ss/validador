type BotaoProps = {
  onClick: () => void;
  name: string;
};

const Botao = (props: BotaoProps) => {
  return (
    <button
      type="button"
      className="rounded bg-teal-700 text-white text-sm py-1 px-2 cursor-pointer transition delay-80 duration-300 ease-in-out hover:bg-teal-900 hover:-translate-y-0.5 shadow-md/30 min-w-22"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Botao;

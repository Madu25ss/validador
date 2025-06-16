

type TextoProps = {
  name: string
};

const TextoDesc = (props: TextoProps) => {
  return (
    <>
      <div className="w-full mb-4">
        <div>
          <h3 className="text-base text-zinc-500">{`Digite um ${props.name} e clique em "Enviar" para verificar se ele é válido ou falso.`}</h3>
        </div>
      </div>
    </>
  );
};

export default TextoDesc;



type TextoProps = {
  text: string
};

const TextoDesc = (props: TextoProps) => {
  return (
    <>
      <div className="w-full mb-4">
        <div>
          <h3 className="text-base text-zinc-500">{`${props.text}`}</h3>
        </div>
      </div>
    </>
  );
};

export default TextoDesc;

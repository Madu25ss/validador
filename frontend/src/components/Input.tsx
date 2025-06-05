type InputProps = {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  disabled?: boolean;
  maxLength: number;
  widthValue: number;
};

const Input = (props: InputProps) => {
  return (
    <div className=" flex w-full">
      <div className="flex flex-row border border-solid border-red-800 w-full space-x-4 py-2">
        <div
          className="flex flex-col"
          style={{ width: `${props.widthValue}%` }}
        >
          <label
            className="text-sm text-zinc-700"
            htmlFor="inputTexto"
          >{`${props.name.toUpperCase()}`}</label>
          <input
            className="h-8 text-sm text-neutral-500 bg-white rounded border border-solid border-neutral-400 outline-0 focus:border-teal-800 px-2"
            type="text"
            id="inputTexto"
            name={props.name}
            value={props.value}
            onChange={(evt) => props.onChange(evt.target.value)}
            placeholder={props.placeholder}
            disabled={props.disabled}
            maxLength={props.maxLength}
          />
        </div>
        {/* só aparecer após clicar o botão */}
        <div className="flex flex-col justify-end text-xs border w-fit pr-2">
          <div className="flex flex-row space-x-2 pt-1">
            <div className="">icon</div>
            <div className="">Validação</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;

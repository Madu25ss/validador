type InputProps = {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  disabled?: boolean;
  maxLength: number;
  widthValue: number;
  validacao?: boolean;
  obrigatorio?: boolean;
  inputVazio?: boolean;
};

const Input = (props: InputProps) => {
  let validaCor;

  if (props.obrigatorio === true) {
    if (props.inputVazio === false) {
      validaCor = `border-red-800`;
    }
  } else {
    validaCor = `border-neutral-400`;
  }

  return (
    <div className=" flex w-full ">
      <div className="flex flex-row w-full space-x-2">
        <div
          className="flex flex-col"
          style={{ width: `${props.widthValue}%` }}
        >
          <label
            className="text-sm text-zinc-700"
            htmlFor="inputTexto"
          >{`${props.name}`}</label>
          <input
            className={`h-8 text-sm text-neutral-500 bg-white rounded border border-solid border-neutral-400 ${validaCor} outline-0 focus:border-teal-800 px-2 w-full`}
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
      </div>
    </div>
  );
};

export default Input;

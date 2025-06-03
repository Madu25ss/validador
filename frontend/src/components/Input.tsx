type InputProps = {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (text: string) => void;
    disabled?: boolean;
    maxLength: number;
}

const Input = (props: InputProps) => {
  return (
    <div className=" flex w-100% space-x-2 w-fit">
      <div className="flex flex-col">
          <label className="mb-1 mt-2 text-xs text-zinc-700" htmlFor="inputTexto">{`${props.name.toUpperCase()}`}</label>
          <input 
          className="h-8 text-xs text-neutral-500 bg-white rounded border border-solid border-neutral-400 outline-0 focus:border-blue-400 px-2"
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
      <div className="flex flex-col w-50  justify-end text-xs">
          <div className="h-5 flex flex-row space-x-1 pt-1">
            <div className="">
              icon
            </div>
            <div className="">
              Validação
            </div>
          </div>
      </div>

    </div>
  )
}

export default Input;
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
    <div className="flex flex-col max-w-72">
        <label className="mb-8 mt-2" htmlFor="inputTexto">{`Digite o ${props.name.toUpperCase()}`}</label>
        <input 
        className="h-8 text-xl text-neutral-500 bg-white rounded border border-solid border-neutral-400 outline-0 focus:border-blue-400 px-2"
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
  )
}

export default Input;
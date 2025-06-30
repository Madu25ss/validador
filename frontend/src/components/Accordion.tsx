import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"


type propsAcco = {
  disabled?: boolean,
  textInfos: string
}



export default function AccordionDemo(props: propsAcco) {
  let retornoComponentes;
  if (props.disabled == false) {
    retornoComponentes = <Accordion
      type="single"
      collapsible
      className="w-full max-h-35 text-sm text-zinc-500 bg-slate-100 rounded border border-solid border-neutral-400"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="max-h-35 pr-1 ">
        <AccordionTrigger>Dados</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance max-h-20">
          <p>
            
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  } else {
    retornoComponentes;
  }

  return (
    <div>
    {retornoComponentes}
    </div>
  )
}

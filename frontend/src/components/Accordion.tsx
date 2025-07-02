import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

type propsAcco = {
  disabled?: boolean;
  textInfos: string[];
};

export default function AccordionDemo(props: propsAcco) {
  let retornoComponentes;

  if (props.disabled == false ) {
    retornoComponentes = (
      <Accordion
        type="single"
        collapsible
        className="text-sm text-zinc-600 bg-slate-100 rounded border border-neutral-400 w-full "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full h-8">Dados</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 text-pretty border w-full whitespace-nowrap ">
            
            {props.textInfos.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  } else {
    retornoComponentes;
  }

  return <div>{retornoComponentes}</div>;
}

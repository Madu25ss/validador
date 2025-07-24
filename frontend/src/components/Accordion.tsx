
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type propsAcco = {
  disabled?: boolean;
  textInfos: string[];
  height: string;
};

export default function AccordionDemo(props: propsAcco) {
  let retornoComponentes;

  if (props.disabled === false) {
    retornoComponentes = (
      <Accordion
        type="single"
        collapsible
        className="text-sm text-zinc-600 bg-slate-100 rounded border border-neutral-400 w-full "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className={`${props.height} w-full `}>Dados</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1.5 text-pretty">
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

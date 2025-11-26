import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Question 1",
    answer: "Answer 1"
  },
  {
    id: "item-2",
    question: "Question 2",
    answer: "Answer 2"
  },
  {
    id: "item-3",
    question: "Question 3",
    answer: "Answer 3"
  }
];

export default function Page() {
  return (
    <div><Accordion
      type="single"
      className="w-full"
      defaultValue="item-1"
    >
      {
        items.map( item => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
    </div>
  );
}


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Quanto tempo ci vuole per configurare TaskSync.AI?',
      answer: 'La configurazione iniziale richiede meno di 2 minuti. Basta collegarsi con i tuoi account esistenti (Trello, Todoist, etc.) e TaskSync inizierà immediatamente a sincronizzare i tuoi task. L\'AI impara dalle tue abitudini nei primi giorni per fornirti suggerimenti sempre più accurati.'
    },
    {
      question: 'I miei dati sono sicuri? Dove vengono archiviati?',
      answer: 'Assoluta sicurezza dei dati è la nostra priorità. Utilizziamo crittografia end-to-end, i server sono localizzati in Europa (GDPR compliant), e non accediamo mai ai contenuti dei tuoi task. Puoi disconnettere qualsiasi integrazione in qualsiasi momento e tutti i dati vengono immediatamente rimossi.'
    },
    {
      question: 'Posso usare TaskSync con il mio team?',
      answer: 'Sì! Il piano Team è progettato specificamente per i gruppi di lavoro. Puoi creare dashboard condivise, vedere lo stato dei task di tutto il team, e ricevere analytics aggregate. Ogni membro mantiene la propria privacy sui task personali mentre condivide quelli del progetto.'
    },
    {
      question: 'Come funziona la prioritizzazione AI?',
      answer: 'La nostra AI analizza diversi fattori: deadline, parole chiave nei titoli, frequenza di modifica, tempo dedicato storicamente a task simili, e il tuo comportamento passato. Nel tempo impara i tuoi pattern e può predire accuratamente cosa dovresti fare per primo per massimizzare la produttività.'
    },
    {
      question: 'Cosa succede se cancello il mio account?',
      answer: 'Puoi cancellare il tuo account in qualsiasi momento dalle impostazioni. Tutti i tuoi dati vengono immediatamente rimossi dai nostri server e le sincronizzazioni vengono interrotte. I task originali rimangono intatti nelle tue piattaforme originali (Trello, Todoist, etc.).'
    },
    {
      question: 'Supportate integrazioni personalizzate?',
      answer: 'Nel piano Team offriamo integrazioni custom via API REST. Se usi una piattaforma di task management non ancora supportata, il nostro team tecnico può sviluppare un\'integrazione dedicata. Contatta il nostro supporto per discutere le tue esigenze specifiche.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Domande <span className="gradient-text">frequenti</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tutto quello che devi sapere su TaskSync.AI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Non trovi la risposta che cerchi?</p>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            Contatta il nostro supporto →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

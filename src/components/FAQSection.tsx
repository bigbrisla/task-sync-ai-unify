
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How long does it take to set up TaskSync.AI?',
      answer: 'Initial setup takes less than 2 minutes. Simply connect to your existing accounts (Trello, Todoist, etc.) and TaskSync will immediately start syncing your tasks. The AI learns from your habits in the first few days to provide increasingly accurate suggestions.'
    },
    {
      question: 'Is my data safe? Where is it stored?',
      answer: 'Absolute data security is our priority. We use end-to-end encryption, servers are located in Europe (GDPR compliant), and we never access the content of your tasks. You can disconnect any integration at any time and all data is immediately removed.'
    },
    {
      question: 'Can I use TaskSync with my team?',
      answer: 'Yes! The Team plan is specifically designed for work groups. You can create shared dashboards, see the status of all team tasks, and receive aggregate analytics. Each member maintains privacy on personal tasks while sharing project ones.'
    },
    {
      question: 'How does AI prioritization work?',
      answer: 'Our AI analyzes various factors: deadlines, keywords in titles, frequency of modifications, time historically spent on similar tasks, and your past behavior. Over time it learns your patterns and can accurately predict what you should do first to maximize productivity.'
    },
    {
      question: 'What happens if I delete my account?',
      answer: 'You can delete your account at any time from settings. All your data is immediately removed from our servers and synchronizations are stopped. Original tasks remain intact in your original platforms (Trello, Todoist, etc.).'
    },
    {
      question: 'Do you support custom integrations?',
      answer: 'In the Team plan we offer custom integrations via REST API. If you use a task management platform not yet supported, our technical team can develop a dedicated integration. Contact our support to discuss your specific needs.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about TaskSync.AI
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
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            Contact our support →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

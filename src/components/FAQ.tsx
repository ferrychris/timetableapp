import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="border-b border-purple-800">
    <button className="w-full py-6 text-left flex justify-between items-center hover:text-purple-300">
      <span className="text-lg font-medium">{question}</span>
      <ChevronDown className="w-5 h-5 flex-shrink-0" />
    </button>
    <div className="pb-6 text-purple-200">
      {answer}
    </div>
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      question: "How does the timetable generator work?",
      answer: "Our AI-powered system analyzes your requirements, teacher availability, and classroom constraints to generate optimal timetables automatically."
    },
    {
      question: "Can I customize the scheduling rules?",
      answer: "Yes, you can set specific rules for teacher availability, subject sequencing, and classroom allocation to match your school's needs."
    },
    {
      question: "Is it easy to make changes to the generated timetable?",
      answer: "Absolutely! You can easily make manual adjustments to the generated timetable while maintaining all scheduling constraints."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
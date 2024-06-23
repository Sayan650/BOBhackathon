"use client"

import React, { useState } from 'react';

const faqs = [
  {
    question: 'How is Simple different from Complex?',
    answer:
      'Simple is designed to be an easy-to-use and affordable solution for small businesses and organizations. Complex is a more feature-rich platform that is better suited for larger enterprises.',
  },
  {
    question: 'Can I cancel my plan at any time?',
    answer:
      'Yes, you can cancel your plan at any time. However, you will still be responsible for paying the remainder of the term for the plan you signed up for.',
  },
  {
    question: 'How is Simple different from Complex?',
    answer:
      'Simple is designed to be an easy-to-use and affordable solution for small businesses and organizations. Complex is a more feature-rich platform that is better suited for larger enterprises.',
  },
  {
    question: 'Can I cancel my plan at any time?',
    answer:
      'Yes, you can cancel your plan at any time. However, you will still be responsible for paying the remainder of the term for the plan you signed up for.',
  },
  {
    question: 'How is Simple different from Complex?',
    answer:
      'Simple is designed to be an easy-to-use and affordable solution for small businesses and organizations. Complex is a more feature-rich platform that is better suited for larger enterprises.',
  },
  {
    question: 'Can I cancel my plan at any time?',
    answer:
      'Yes, you can cancel your plan at any time. However, you will still be responsible for paying the remainder of the term for the plan you signed up for.',
  },
  {
    question: 'How is Simple different from Complex?',
    answer:
      'Simple is designed to be an easy-to-use and affordable solution for small businesses and organizations. Complex is a more feature-rich platform that is better suited for larger enterprises.',
  },
  {
    question: 'Can I cancel my plan at any time?',
    answer:
      'Yes, you can cancel your plan at any time. However, you will still be responsible for paying the remainder of the term for the plan you signed up for.',
  },
];

function FAQ({ question, answer, isOpen = false }) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-2 flex items-center">
      <svg
        className="h-8 w-8 mr-4 text-gray-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        
      </svg>
      <div className="w-full">
        <button
          className="flex justify-between items-center w-full focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
          <span className="transition duration-300 ease-in-out transform {open ? 'rotate-180' : ''}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v13m0-4h-3v4m3-4v-3l4-4m0 0l-4 4z" />
            </svg>
          </span>
        </button>
        {open && <p className="pt-2 text-gray-700">{answer}</p>}
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Questions we often get</h2>
      <div>
        {faqs.map((faq, index) => (
          <FAQ key={index} {...faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;

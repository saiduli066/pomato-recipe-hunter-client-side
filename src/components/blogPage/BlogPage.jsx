import React, { useRef } from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

const BlogPage = () => {
  const QUESTIONS = [
    {
      question:
        "Tell us the differences between uncontrolled and controlled components.",
      answer:
        "Uncontrolled components allow the form data to be handled by the DOM itself, while controlled components allow the form data to be handled by React.",
    },
    {
      question: "How to validate React props using PropTypes?",
      answer:
        "You can use the PropTypes library to validate the props of a React component by defining the expected data type and whether the prop is required or not.",
    },
    {
      question: "Tell us the difference between Node.js and Express.js.",
      answer:
        "Node.js is a runtime environment for executing JavaScript code outside of a browser, while Express.js is a framework built on top of Node.js that provides an easier way to build web applications using Node.js.",
    },
    {
      question: "What is a custom hook, and why will you create a custom hook?",
      answer:
        "A custom hook is a JavaScript function that utilizes one or more of React’s built-in hooks to implement a specific behavior in a reusable way. You would create a custom hook to abstract complex logic or functionality that is commonly used in your React application.",
    },
  ];

  const MyDoc = () => (
    <Document>
      {QUESTIONS.map((q, i) => (
        <Page key={i}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            {q.question}
          </Text>
          <Text>{q.answer}</Text>
        </Page>
      ))}
    </Document>
  );

  const pdfRef = useRef();

  return (
    <div className="flex flex-col items-center justify-center my-5 min-h-screen">
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-xl md:text-4xl font-bold text-center mb-8">
          <div className="inline-block mr-2" />
          Blog Questions
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {QUESTIONS.map((q, i) => (
            <div
              key={i}
              className="border border-gray-300 shadow-md rounded-lg p-6 bg-white"
            >
              <h2 className="text-lg font-bold mb-2">{q.question}</h2>
              <p className="text-gray-700">{q.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <PDFDownloadLink
            document={<MyDoc />}
            fileName="blog-questions.pdf"
            ref={pdfRef}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-600"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


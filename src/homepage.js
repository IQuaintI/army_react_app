import React from "react";
import { useState } from "react";

import "./homepage.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={toggleAccordion}>
        {title}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const App = () => {
  const accordionItems = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 3",
      content: "Content for Accordion Item 3",
    },
  ];

  return <Accordion items={accordionItems} />;
};

function Grid(props) {
  return (
    <>
      <button className="grid-button">
        <h2>{props.name}</h2>
      </button>
    </>
  );
}

function Homepage() {
  return (
    <div className="header">
      <h1>Army WebStudy</h1>
      <p>A (Semi) Complete Encyclopedia of Army Trivia</p>

      <div className="grid">
        <Grid name="Army History" />
        <Grid name="Weapons" />
        <Grid name="Vehicles" />
        <Grid name="Uniforms" />
        <Grid name="Army History" />
        <Grid name="Weapons" />
        <Grid name="Vehicles" />
        <Grid name="Uniforms" />
        <Grid name="Army History" />
        <Grid name="Weapons" />
        <Grid name="Vehicles" />
        <Grid name="Uniforms" />

        <App />
      </div>
    </div>
  );
}

export default Homepage;

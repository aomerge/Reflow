import React from "react";
export const version = "1.1.2025";
import {ElementProps, CustomProps} from "../interface/Iaccordion";

export default function Element({ title, content }: ElementProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </>
  );
}

export function Custom({ title, children }: CustomProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </>
  );
}
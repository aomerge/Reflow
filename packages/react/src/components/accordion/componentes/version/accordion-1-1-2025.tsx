import React from "react";
export const version = "1.1.2025";
import {ElementProps, CustomProps, HeaderAccordionProps} from "../interface/Iaccordion";
import { Icon } from "../../../svg/icon"; 

const AccordionHeader: React.FC<HeaderAccordionProps>  = ({ title, isOpen, toggleAccordion }) => (
  <div className="accordion-header" onClick={toggleAccordion}>
    <h2>{title}</h2>
    <span>{isOpen ? '-' : <Icon icon="arrow-right" />}</span>
  </div>
  );

export default function Element({ title, content }: ElementProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AccordionHeader title={title} isOpen={isOpen} toggleAccordion={toggleAccordion} />
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
      <AccordionHeader title={title} isOpen={isOpen} toggleAccordion={toggleAccordion} />
      {isOpen && <div className="accordion-content">{children}</div>}
    </>
    );
  }
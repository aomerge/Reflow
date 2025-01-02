import React from 'react';

export interface AccordionProps {
    title: string;
    content?: string ;
    template?: string;
    children?: React.ReactNode;
  }

export interface ElementProps {
    title: string;
    content?: string;
  }

export interface CustomProps {
    title: string;
    children?: React.ReactNode;
  }

export interface HeaderAccordionProps {
    title: string;
    isOpen: boolean;
    toggleAccordion: () => void;
}


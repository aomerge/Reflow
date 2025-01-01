export interface CustomCSSTransitionProps {
    in: boolean;
    timeout: number;
    classNames: string;
    unmountOnExit?: boolean;
    children: React.ReactElement;
    none?: boolean;
  }
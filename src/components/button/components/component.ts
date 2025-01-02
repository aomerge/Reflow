import React from "react";

const Dropdown = React.lazy(() => import("./versions/button-1-1-2024").then(module => ({ default: module.Dropdown })));
const Button = React.lazy(() => import("./versions/button-1-1-2024").then(module => ({ default: module.Button })));

export { Dropdown, Button } ;
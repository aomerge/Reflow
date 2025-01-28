import React from "react";

export const Static = React.lazy(() => import("./version/accordion-1-1-2025"));
export const Custom = React.lazy(() => import("./version/accordion-1-1-2025").then(module => ({ default: module.Custom })));
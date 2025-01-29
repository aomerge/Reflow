import React from "react";


export const Breadcrumb = React.lazy(() => import('./version/11-01-2025').then(module => ({ default: module.Breadcrumb })));
 
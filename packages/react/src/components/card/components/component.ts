import React from "react";

const Card = React.lazy(() => import("./versions/card-1-1-2025").then(module => ({ default: module.Card })));

export {
    Card
};
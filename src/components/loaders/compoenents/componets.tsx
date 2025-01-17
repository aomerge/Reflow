import React from "react";

const Loader =  React.lazy(() => import('./version/loaders-16-01-2025').then(module => ({ default: module.SkeletonLoader })));

export {
    Loader
}
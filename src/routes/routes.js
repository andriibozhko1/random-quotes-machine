import React, { lazy } from 'react';

const TagList = lazy(() => import("../containers/TagList/TagList"));
const Quotes = lazy(() => import("../containers/Quotes/Quotes"));

const routes = [
    {
      path: "/",
      exact: true,
      render: props => <TagList {...props} />
    },
    {
      path: '/:id',
      render: props => <Quotes {...props} />
    }
];

export default routes;
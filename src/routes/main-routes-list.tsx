import { routeList } from '@constants';
import { RouteObject } from 'react-router-dom';
import { ContactPage, HomePage, PortfolioPage } from '@pages';
import { DefaultRoute } from './DefaultRoute';

export const mainRoutesList: RouteObject[] = [
  { index: true, element: <DefaultRoute></DefaultRoute> },
  {
    path: routeList.home,
    element: <HomePage></HomePage>,
  },
  {
    path: routeList.portfolio,
    element: <PortfolioPage></PortfolioPage>,
  },
  {
    path: routeList.contacts,
    element: <ContactPage></ContactPage>,
  },
];

import { routeList } from '@constants';
import { MainConversationsPage } from '@/pages/conversations';
import { RouteObject } from 'react-router-dom';

export const mainRoutesList: RouteObject[] = [
  { index: true, element: <MainConversationsPage></MainConversationsPage> },
  {
    path: routeList.main,
    element: <MainConversationsPage></MainConversationsPage>,
  },
];

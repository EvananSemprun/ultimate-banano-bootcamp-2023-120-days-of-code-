import Home from "../pages/home";
import States from "../pages/states";
import Digimons from "../pages/digimons";

const routes = [
  {
    title: 'States',
    path: '/states',
    component: States,
  },
  {
    title: 'Digimons',
    path: '/digimons',
    component: Digimons,
  },
  {
    title: 'Home',
    path: '/',
    component: Home,
  },
];

export default routes;
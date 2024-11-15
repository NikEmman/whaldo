import App from "./App";
import Instructions from "./components/Instructions";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Instructions />,
      },
    ],
  },
];

export default routes;

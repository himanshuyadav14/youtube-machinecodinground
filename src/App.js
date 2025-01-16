import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import Maincontent from "./components/Maincontent";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontent />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
  {
    path: "/watch",
    element: <WatchPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="overflow-x-hidden">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import MainLayout from "../layouts/MainLayout";
import Situation from "../pages/Situation";
import Game from "../pages/Game";
import Congratulations from "../pages/Congratulations";
import Team from "../pages/Team";
import Nope from "../pages/Nope";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children:
        [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/situation",
            element:<Situation/>
          },
          {
            path: "/game",
            element:<Game/>
          },
          {
            path: "/congratulations",
            element:<Congratulations/>
          }
          ,
          {
            path:"/team",
            element:<Team/>
          }
          ,
          {
            path:"/tramposo",
            element:<Nope/>
          }
        ]
    }

  ]
)
import './App.css';
import React from 'react';
import Head from "./components/Head.js";
import Watch from './components/Watch.js';
import Body from './components/Body.js';
import { Provider } from 'react-redux';
import Store from './redux/Store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error.js';
import MainContainer from './components/MainContainer.js';
import SearchVideo from './components/SearchVideo.js';

const router = createBrowserRouter([
   {
      path: "/",
      element: (
          <>
              <Head />
              <Body />
          </>
      ),
      children: [
         {
            path: "/",
            element: <MainContainer />
         },
         {
            path: "/watch",
            element: <Watch />
         },
         {
            path: "/results",
            element: <SearchVideo />
         }
      ],
      errorElement: <Error />
   }
]);

const App = () => {
    return (
        <Provider store={Store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;

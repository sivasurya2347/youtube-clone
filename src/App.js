import './App.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './redux/Store.js';
import Head from "./components/Head.js";
import Watch from './components/Watch.js';
import Body from './components/Body.js';
import Error from './components/Error.js';
import MainContainer from './components/MainContainer.js';
import SearchResult from './components/SearchResult.js';

const App = () => {
    const [videosearch, setvideosearch] = useState([]);

    const handleSearch = (data) => {
        setvideosearch(data);
        console.log(data)
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Head onSearch={handleSearch}/>
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
                    element: <SearchResult videosearch={videosearch} />
                }
            ],
            errorElement: <Error />
        }
    ]);

    return (
        <Provider store={Store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;

import React from 'react'
import { Home,About,UserLayout } from './components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
    ]
  },
]);



const App = () => {
  return (
    <>
      {/* <Navbar />
      <main>
        <div id='home'>
          <Home />
        </div>
        
        <div id='about'>
          <About/>
        </div>
      </main> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
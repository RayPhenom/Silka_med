import React from 'react'
import { Home,About,UserLayout, Services, Doctors, Blog } from './components';
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
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"doctors",
        element:<Doctors/>
      },
      {
        path:"blog",
        element:<Blog/>
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

         <div id='services'>
        <Service/>
      </div>
      </main> */}
     
      <RouterProvider router={router} />
    </>
  )
}

export default App
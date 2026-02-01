import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import ParamComp from './components/ParamComp.jsx';
import Courses from './components/Courses.jsx';
import MockTest from './components/MockTest.jsx';
import Projects from './components/Projects.jsx';
const router = createBrowserRouter(
  [
    {path:"/",
        element : <div>
        <Navbar/>
        <Home />

        </div>
    },

    {path:"/about",
     element : <div>
        <Navbar/>
        <About />
        </div>
    },
    {path:"/dashboard",
     element : <div>
        <Navbar/>
        <Dashboard />
        </div>,
     children:[
          {
            path:'courses',
            element:<Courses />
          },
          {
            path:'mock-tests',
            element:<MockTest />
          },
          {
            path:'projects',
            element:<Projects />
          }
        ]
    },
    {
      path:"/student/:id",
      element:<div>
        <Navbar/>
        <ParamComp />
        </div>
    },
    {
      path:"*",
      element:<div>
        <Navbar/>
        <h1>404 - Page Not Found</h1>
        </div>
    }
  ]
);

function App() {
 
  return (
    <div>
      
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
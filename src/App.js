import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Error from './Component/Error/Error';
import Enroll from './Component/Enroll/Enroll';
import Teacher from './Component/Teachers/Teacher';


function App() {
const router = createBrowserRouter([
  {path: "/", element: <Home></Home>},
  {path: "/home", element: <Home></Home>},
  {path: "/courses", element: <Courses></Courses>},
  {path: "/about", element: <About></About>},
  {path: "/enroll", element: <Enroll></Enroll>},
  {path: "/teacher", element: <Teacher/>},
  {path: "*", element: <Error></Error>}

])

  return (
    // <div className="App">
    //   <BrowserRouter>
    //   <Header></Header>
    //   <Routes>
    //   <Route path='/' element={<Home></Home>}></Route>
    //   <Route path='/home' element={<Home></Home>}></Route>
    //   <Route path='/courses' element={<Courses></Courses>}></Route>
    //   <Route path='/about' element={<About></About>}></Route>
    //   <Route path='/enroll' element={<Enroll></Enroll>}></Route>
    //   <Route path='/teacher' element={<Teacher/>}/>
    //   <Route path='*' element={<Error></Error>}></Route>
    //   </Routes>
    //   <Footer></Footer>
    //   </BrowserRouter>
    // </div>
<RouterProvider router={router}/>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Error from './Component/Error/Error';
import Enroll from './Component/Enroll/Enroll';
import Teacher from './Component/Teachers/Teacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/courses' element={<Courses></Courses>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/enroll' element={<Enroll></Enroll>}></Route>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

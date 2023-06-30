import './App.css';
import Footer from "./components/footer/footer";
import Header from './components/header/header';
import Landingpage from './screens/landingpage/landingpage'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Mynotes from "./screens/mynotes/mynotes";
import Loginscreen from './screens/loginscreen/loginscreen';
import Registerscreen from './screens/registerscreen/registerscreen';
import CreateNote from './screens/CreateNote/createNote';
import SingleNote from  './screens/Singlenote';
import { useState } from 'react';
const App=() =>{
  const[search,setSearch]=useState("");

  return (
    <BrowserRouter>
      <Header setSearch={Landingpage}/>
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} exact/>
          <Route path="/login" element={<Loginscreen/>} exact/>
          <Route path="/register" element={<Registerscreen/>} exact/>
          <Route path="/createnote" element={<CreateNote/>} exact/>
         <Route path="/node/:id" element={<SingleNote/>} exact/>
          <Route path="/mynotes" element={<Mynotes />} />

        </Routes>

        {/*<Landingpage/>*/}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

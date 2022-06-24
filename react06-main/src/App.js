import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';
import Notice from './components/Notice';
import Event from './components/Event'
import {Manual, Policy, Rule, Info} from './pages/FooterMenu'
import Form from './components/Form';
import ProgramList from './components/ProgramList';
import Detail from './components/Detail';
import { useState,useEffect } from 'react';

//Routes 감싸주는 아이 Route 그 안에 내부에 들어가는 아이 
//npm i react-router-dom

function App() {
  const title = 'site';


    const [cardData,setCardData] = useState([]);    
    useEffect(()=>{
        fetch(`http://localhost:3000/data/cardData.json`)
        .then(response => response.json())
        .then(cardData=>setCardData(cardData))
        .catch(error=>{console.log(error);})
    },[])
    console.log(cardData);
  return (
    <div className="App">
      <BrowserRouter>
      <Header title={title} />
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cardList' element={<CardList />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/manual' element={<Manual />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/rule' element={<Rule />} />
          <Route path='/info' element={<Info />} />
          <Route path='/event' element={<Event />} />
          <Route path='/form' element={<Form />} />
          <Route path='/program' element={<ProgramList />} />
          <Route path='/detail/:id' element={<Detail cardData={cardData} title={title}/>} />

        </Routes>
        <Footer title={title} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

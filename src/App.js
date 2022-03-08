import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import {useState} from 'react'
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';

function App() {
  const [chosenTopic, setChosenTopic] = useState("")
  return (
    <div className="wrapper">
      
      <Header />
      <div>
      <Nav
        setChosenTopic={setChosenTopic} />
        </div>
      <Routes>
        <Route path='/' element={<ArticleList />}/>
      </Routes>
    </div>
  );
}

export default App;


//  <Routes>
//           <Route path='/' element={<ItemList
//             basket={basket}
//             setBasket={setBasket}/>} />
//            <Route path='/basket' element={<Basket 
//             setBasket={setBasket}
//             basket={basket}/>} />
//         </Routes>

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import {useState} from 'react'
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import TopicPages from './components/TopicPages';

function App() {
  const [chosenTopic, setChosenTopic] = useState("")
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="wrapper">
      
      <Header />
      <div>
      <Nav
        setChosenTopic={setChosenTopic} />
        </div>
      <Routes>
        <Route path='/' element={<ArticleList
          articles={articles} setArticles={setArticles} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path='/:topic' element={<TopicPages
          chosenTopic={chosenTopic}  articles={articles} setArticles={setArticles} isLoading={isLoading} setIsLoading={setIsLoading} />}/>        
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

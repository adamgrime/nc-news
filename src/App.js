import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import TopicPages from './components/TopicPages';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className="wrapper">
      
      <Header />
      <div>
      <Nav
        />
        </div>
      <Routes>
        <Route path='/' element={<ArticleList/>} />
        <Route path='/:topic' element={<TopicPages/>} />    
        <Route path='/articles/:article_id' element={<SingleArticle/>} />
      </Routes>
    </div>
  );
}

export default App;



import Add from './components/Add';
import Header from './components/Header';
import {HashRouter as Router , Routes , Route} from 'react-router-dom'; 
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import ContextProvider from './components/context/GlobalState';
import './App.css'
import Footer from './components/Footer';


const App = () => {
  

  return (
    <>
    <Router>

      <ContextProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Watchlist/>}/>
        <Route path='/watched' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>
        
      </Routes>
      </ContextProvider>
      
    </Router>
    <Footer/>
    </>
  );
};
export default App;

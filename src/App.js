import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import MatchedCards from './components/MatchedCards';

function App() {
  return (
    <div className="App">
        <Header />
        <CardContainer />
        <MatchedCards />
    </div>
  );
}

export default App;

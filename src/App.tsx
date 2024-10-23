import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <MoviesGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;

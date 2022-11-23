import './App.css';
import Menu from './components/navigation';
import MyCarousel from './components/carousel';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Menu />
      <MyCarousel />
      <Content />
    </div>
  );
}

export default App;

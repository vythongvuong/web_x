import './App.css';
import './Component/CSS/DungChung/Container.scss';
import './Component/CSS/DungChung/style.css'
import Home from './Component/Main/Home';
import Header from './Component/DungChung/Header';
import './Static_File/owlcarousel/assets/owl.carousel.min.css'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
        <Header/>
        <Home />
    </div>
  );
}

export default App;

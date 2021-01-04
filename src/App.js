import './App.css';
import Header from './Components/Header';
import leftMenu from './Components/leftMenu';
import rightThread from './Components/rightThread';
import mainFeed from './Components/mainFeed';

function App() {
  return (
    <div className="App">
      {/* <p>Hello world</p> */}
      <Header />
      {/* Header */}
      {/* Side left menu */}
      <leftMenu />
      {/* Body */}
      <mainFeed />
      {/* Stories */}
      {/* Feed */}
      <rightThread />
      {/* Side right menu */}
    </div>
  );
}

export default App;

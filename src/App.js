import './App.css';
import Header from './Components/Header';
import LeftMenu from './Components/LeftMenu';
import RightThread from './Components/RightThread';
import MainFeed from './Components/MainFeed';

function App() {
  return (
    <div className="app">
      {/* <p>Hello world</p> */}
      <Header />
      {/* Header */}
      {/* Side left menu */}
      <div className="app_body">
        <LeftMenu />
        {/* Body */}
        <MainFeed />
        {/* Stories */}
        {/* Feed */}
        <RightThread />
        {/* Side right menu */}
      </div>
    </div>
  );
}

export default App;

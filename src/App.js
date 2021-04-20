import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Dogcard from './components/Dogcard';
import Footer from './components/Footer';
import data from './data'

function App() {
  const WELCOME = 'welcome', REGISTER = 'register', INFO = 'info'
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;
  let header = null;
switch(currentScreen) {
  case WELCOME: {
    content = <Welcome 
      nextScreen= {() => setCurrentScreen(REGISTER)}
    />
    header = <Header 
      goBack = {false}
    />
  }

    break;
    case REGISTER: {
      content = <Register
      nextScreen= {() => setCurrentScreen(INFO)}
      />
    header = <Header 
    goBack = {() => setCurrentScreen(WELCOME)}
    />
    }
 
    break;
    default: {
      content = <Dogcard name= {data[0].name} img={data[0].img}  
      sex={data[0].sex} breed={data[0].breed} chipNumber={data[0].chipNumber} />
      header = <Header 
      goBack = {() => setCurrentScreen(REGISTER)}
    />
    }
 
    }
  return (
    <div >
      {header}
      {/* <Header /> */}
      <div className="App">
      {content}
      {/* //<Dogcard name= {data[0].name} img={data[0].img}  sex={data[0].sex} breed={data[0].breed} chipNumber={data[0].chipNumber} /> */}
      </div>
      
      <Footer />
    </div>

  );
}

export default App;

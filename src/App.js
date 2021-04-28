import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Dogcard from './components/Dogcard';
import Footer from './components/Footer';


  


function App() {

  const WELCOME = 'welcome', REGISTER = 'register', INFO = 'info'
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  
  const url = "https://api.jsonbin.io/b/6087d57ff6655022c46d0611"
  const [hasData, setHasData] = useState([]);
  let [welcomePictures, setWelcomePictures] = useState([]);
useEffect( ()=>{
  async function fetchData(){
    const response =  await fetch(url);
    const data = await response.json();
    setHasData(data)
    console.log(data)
  } 
  
  fetchData();
  
},[])
  let content = null;
  let header = null;

  useEffect( ()=>{
    if(hasData.length > 1){
      let intervalId = setInterval(()=> {
        setWelcomePictures([hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img]);
      }, 2000);
      return () => {
        
        clearInterval(intervalId);
      }
    }
  }, [2000])


function randomPictureNumber(input) {
  return Math.floor(Math.random() * input.length); 
}
 
switch(currentScreen) {
  case WELCOME: {
    let picture = null
    if(hasData.length > 1){
      picture = welcomePictures
    }
    content = <Welcome picture= {picture}
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
      content = hasData.map( info => 
      <Dogcard name= {info.name} img={info.img}  
      sex={info.sex} breed={info.breed} chipNumber={info.chipNumber} />)
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

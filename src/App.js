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
  let [dogKey, setDogKey] = useState("");
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
      if(welcomePictures) {
        setWelcomePictures([hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img,
        hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img,
        hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img, 
        hasData[randomPictureNumber(hasData)].img,
        hasData[randomPictureNumber(hasData)].img])
      }
      let intervalId = setInterval(()=> {
        setWelcomePictures(prevValue =>{
          if(prevValue === []) {
            return [hasData[randomPictureNumber(hasData)].img, 
            hasData[randomPictureNumber(hasData)].img, 
            hasData[randomPictureNumber(hasData)].img,
            hasData[randomPictureNumber(hasData)].img, 
            hasData[randomPictureNumber(hasData)].img,
            hasData[randomPictureNumber(hasData)].img, 
            hasData[randomPictureNumber(hasData)].img, 
            hasData[randomPictureNumber(hasData)].img,
            hasData[randomPictureNumber(hasData)].img]
          }
          return [hasData[randomPictureNumber(hasData)].img, 
          prevValue[0], 
          prevValue[1], 
          prevValue[2], 
          prevValue[3],
          prevValue[4], 
          prevValue[5],
          prevValue[6],
          prevValue[7]]
        });
      }, 2000);
      return () => {
        
        clearInterval(intervalId);
      }
    }
  }, [hasData, 2000])


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
      content = <div className="RegisterContent">
        {hasData.map( info => <Register  
      key= {info.chipNumber} 
      name= {info.name} img={info.img}
        nextScreen= {() => {
          setCurrentScreen(INFO)
          setDogKey(info.chipNumber)}}
        />)}
      </div>
    header = <Header 
    goBack = {() => setCurrentScreen(WELCOME)}
    />
    }
 
    break;
    default: {
      let dogDataArray = hasData.filter( dog => dog.chipNumber === dogKey)
      let dogData = dogDataArray[0]
      console.log("help", dogData)
      content =  
      <Dogcard present={dogData.present.toString()} age={dogData.age} name= {dogData.name} img={dogData.img}  
      sex={dogData.sex} breed={dogData.breed} chipNumber={dogData.chipNumber} 
      ownerFname={dogData.owner.name} ownerLname={dogData.owner.lastName} 
      phone={dogData.owner.phoneNumber}/>
      header = <Header 
      goBack = {() => setCurrentScreen(REGISTER)}
    />
    }
 
    }
  return (
    <div >
      {header}
     
      <div className="App">
      {content}
    
      </div>
      
      <Footer />
    </div>

  );
}

export default App;

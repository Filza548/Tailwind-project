import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleSection from './components/ArticleSection.jsx'
import ArticleSecond from './components/ArticleSecond.jsx'
import ArticleThird from './components/ArticleThird.jsx'
import FifthSec from "./components/FifthSec.jsx"
import Footer from "./components/Footer"
import ForthSec from "./components/ForthSec"
import Header from "./components/Header"
import HeroSec from "./components/HeroSec"
import SecondSec from "./components/SecondSec"
import ThirdSec from "./components/ThirdSec"

function App() {


  return (
    <>
    
    {/* <h1 className='text-blue-900 text-9xl'>hello everyone kaise hain</h1> */}

<Header/>
  <HeroSec/>
  <SecondSec/>
  <ThirdSec/>
  <ForthSec/>
    <ArticleSection/>
    <ArticleSecond/>
    <ArticleThird/>
  <FifthSec/>
  <Footer/>
  

    </>
  )
}

export default App

import './App.css'
import HeroSection from './Components/Hero';
import Navigation from './Components/Navigation';
const App=()=>{    //capital letter denotes it is a component
    return (
        <div>
            <Navigation/>
            <HeroSection/>


        </div>
    )
}
export default App;
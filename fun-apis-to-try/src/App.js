import './App.css';
import Nav from "./components/Nav/Nav"
import ApiCards from "./components/card/card"
import CatFacts from "./Apis/catFacts"
import BottomTab from "./components/BottomTab/BottomTab"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <img src="https://image.freepik.com/free-vector/glowing-circular-background_1035-782.jpg" className="App-logo" alt="logo" />
        <p>
          Get caught in the blackhole of random API's and the seemingly endless data they have
        </p>
       
        <ApiCards></ApiCards>
        <CatFacts></CatFacts>
        <ApiCards></ApiCards>
        <ApiCards></ApiCards>
        <BottomTab></BottomTab>
        
      </header>
    </div>
  );
}

export default App;

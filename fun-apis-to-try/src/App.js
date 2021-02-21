import './App.css';
import Nav from "./components/Nav/Nav"
import ApiCards from "./components/card/card"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <img src="https://expertphotography.com/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg" className="App-logo" alt="logo" />
        <p>
          Ehello World
        </p>
        <ApiCards></ApiCards>
        <ApiCards></ApiCards>
        <ApiCards></ApiCards>
        <ApiCards></ApiCards>

        
      </header>
    </div>
  );
}

export default App;

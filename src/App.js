// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;

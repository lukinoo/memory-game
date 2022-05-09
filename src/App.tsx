import "./styles/main.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Provider from "./useContext/Provider";

const App = () => {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Container />
      </Provider>
    </div>
  );
};

export default App;

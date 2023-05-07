import Musicas from "./pages/Musicas"; // importando página de Musicas
import Menu from "./components/Menu"
import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";
import Rotas from "./routes";

function App() {
  return (
    <>
      <Menu />
    
      <Rotas />
    </>
  );
}

export default App; 

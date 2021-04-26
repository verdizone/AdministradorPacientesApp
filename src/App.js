import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Administrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario />          
            </div>
            <div className="one-half column">
              2            
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

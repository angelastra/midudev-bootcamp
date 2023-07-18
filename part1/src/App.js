import './App.css';
import Mensaje from './Mensaje'

const Description = () =>{
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

function App() {

  return (
    <div className="App">
      <Mensaje msg='Estamos trabajando' fecha='13/07/2023'/>
      <Mensaje msg='En la intro a React' fecha='12/07/2023'/>
      <Mensaje msg='Sé feliz' fecha='11/07/2023'/>
      <Description></Description>
    </div>
  );
}

export default App;

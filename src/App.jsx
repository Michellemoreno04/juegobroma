import { useState } from 'react'
import './App.css'
import {  Route,Routes} from 'react-router-dom';
import { Final } from './final/final';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import sonrisa from './imagenes/sonrisa.jpeg'

function App() {
  const [contadorNo, setContadorNo] = useState(0);

  const navigate = useNavigate()

  const aumentarContadorNo = () => {
    setContadorNo(contadorNo + 30);
  };

  const redirigirSi = () => {
  
Swal.fire({
  position: "center",
  icon: "success",
  title: "Gracias papa Diosssss!",
  showConfirmButton: false,
  timer: 3500
})

 setInterval(() => {
  navigate('/final')
 }, 4000);  // en 4 segundo se ejecuta esto
  
  };

  return (
   <div>
    
     <div className="pregunta-container">
     <h1>Hola Bae!</h1>
      <img src={sonrisa} alt="" className='img-inicio'/>
      <h2 className="pregunta-titulo">¿Me das el chiquito?</h2>
      <div className="botones-container">
        
        <button className="boton-si" onClick={redirigirSi} style={{ fontSize: `${15 + contadorNo}px` }}>Sí</button>
        
        <button className="boton-no" onClick={aumentarContadorNo} >No</button>
      </div>
    </div>
   </div>
  );
};


export const  Rutas = () => {
  return (
     
    <Routes>
      <Route  path='/' element={<App/>}/> 
      <Route  path='/final' element={<Final/>}/> 
    </Routes>
    
  )
}


export default App

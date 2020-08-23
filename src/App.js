import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // state del formulario
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false); 

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    // console.log(ciudad);
      const consultarApi = async () => {
        if(consultar) {
          const appId = '40c594913d142621459222ad829a10a4';
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          console.log(resultado);
        }
    } 
    consultarApi();
  }, [consultar]);

  return (
    <Fragment>
      <Header
        titulo="Clima Reat App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

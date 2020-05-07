import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Timer } from 'easytimer.js';

class TP1 extends React.Component {

Simular(e,finsv,prox,col,sv){
    e.preventDefault();
    //Encabezado
    this.Encabezado();
    var tfinsv, tprox, ccol, esv;
    tfinsv = -(-finsv);
    tprox = -(-prox);
    ccol = -(-col);
    esv = -(-sv);
    //Crear Timers
    const time = new Timer();
    const countdown = new Timer();
    const time_finsv = new Timer();
    const time_prox = new Timer();

    //Inicializa Timers

    time.start();       
    time_finsv.start({countdown: true, precision: 'seconds', startValues : {seconds: tfinsv}});    
    time_prox.start({countdown: true, precision: 'seconds', startValues : {seconds: tprox}});
    countdown.start({countdown: true, precision: 'seconds', startValues : {seconds: 20}});    
    

    //Inicialización de Cola y PS
    let PS = esv;
    let cola = ccol;

    //Estado inicial
    console.log("|\t\t" + time.getTimeValues().toString() + " \t\t|\t  Finaliza en " + time_finsv.getTimeValues().seconds + " \t\t|\t\t Llega en " + time_prox.getTimeValues().seconds + " \t\t\t|\t\t " + cola + " \t\t|\t " + PS + " \t|\t\t ");

    time_finsv.addEventListener('targetAchieved', function(s){
      if (cola === 0){
        PS = 0;
        time_finsv.stop();
      }
      else if (cola > 0){
        cola = cola - 1;
        let s = getAleatorioEntero(4,7);
        time_finsv.start({countdown: true, startValues : {seconds: s}});
      }
    });

    time_prox.addEventListener('targetAchieved', function(){
      let c = getAleatorioEntero(2,4);
      time_prox.start({countdown: true, startValues : {seconds: c}});
      if (PS === 1){
        cola = cola + 1;
      }
      else if (PS === 0){
        PS = 1;
        let s = getAleatorioEntero(4,7);
        time_finsv.start({countdown: true, startValues : {seconds: s}});
      }
    });

    time.addEventListener('secondsUpdated', function(){
      console.log("|\t\t" + time.getTimeValues().toString() + " \t\t|\t  Finaliza en " + time_finsv.getTimeValues().seconds + " \t\t|\t\t Llega en " + time_prox.getTimeValues().seconds + " \t\t\t|\t\t " + cola + " \t\t|\t " + PS + " \t|\t\t ");
    })

    countdown.addEventListener('targetAchieved', function(){
      time.pause();
      time_finsv.pause();
      time_prox.pause();
      console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
    });

    function getAleatorioEntero(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



Encabezado(){
  console.log("|\t\t HORA ACTUAL \t\t|\t HORA DE FIN DE SERVICIO \t|\t HORA DE PROXIMA LLEGADA \t\t|\t CLIENTES EN COLA \t|\t PS \t|\t ");
}



  render(){

  return (
    <div>
      <form>
        <p className="h4 text-center mb-4">TP1 con valores por teclado</p>
        <label htmlFor="finsv" className="grey-text">
          Tiempo de atención
        </label>
        <input type="number" id="finsv" className="form-control" defaultValue="5"/>
        <br />
        <label htmlFor="prox" className="grey-text">
          Proximo cliente
        </label>
        <input type="number" id="prox" className="form-control"  defaultValue="7"/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Clientes en cola
        </label>
        <input type="number" id="col" className="form-control"  defaultValue="3" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Puesto de servicio
        </label>
        <select id = "sv" type="number" defaultValue="1">            
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        <div className="text-center mt-4">
        <button onClick={(e)=> {let finsv = document.getElementById("finsv").value;
          let prox = document.getElementById("prox").value;
          let col = document.getElementById("col").value; 
          let sv = document.getElementById("sv").value;
        this.Simular(e,finsv,prox,col,sv)}}>Simular</button>
        </div>
      </form>
    </div>
  )
}
}

export default TP1;
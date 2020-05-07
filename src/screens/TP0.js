import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';


class TP0 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      min: '',
      max: '',
      cant: ''
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }


  Calcular(e,min,max,cant){
    //Esto hace que no se refresque la pagina cuando aprieto el botón
    e.preventDefault();
    //INICIALIZO LAS VARIABLES
    const d = (max-min)/10; //Calculo el tamaño del decil
    var minimo, maximo, cantidad;
    minimo = -(-min); //Casteo las variables a number
    maximo = -(-max);
    cantidad = -(-cant)
    let decil = [0,0,0,0,0,0,0,0,0,0];
    let acu = 0;
    let desv = 0;

    //Empiezo a generar numeros aleatorios y comparo para ver si pertenecen
    //algun decil y cuento cuántas veces aparecen los numeros por decil
    for (let index = 0; index < cantidad; index++) {
      let n = this.getAleatorio(minimo,maximo);
      if (minimo<=n && n <=(minimo+d)) {
        decil[0]= decil[0] + 1;
      }

      else if ((minimo+d)<n && n <=(minimo+(2*d))){
        decil[1]= decil[1] + 1;
      }

      else if ((minimo+2*d)<n && n <=(minimo+(3*d))){
        decil[2]+=1;
      }

      else if ((minimo+3*d)<n && n <=(minimo+(4*d))){
        decil[3]+=1;
      }

      else if ((minimo+4*d)<n && n <=(minimo+(5*d))){
        decil[4]+=1;
      }

      else if ((minimo+5*d)<n && n <=(minimo+(6*d))){
        decil[5]+=1;
      }

      else if ((minimo+6*d)<n && n <=(minimo+(7*d))){
        decil[6]+=1;
      }

      else if ((minimo+7*d)<n && n <=(minimo+(8*d))){
        decil[7]+=1;
      }

      else if ((minimo+8*d)<n && n <=(minimo+(9*d))){
        decil[8]+=1;
      }

      else if ((minimo+9*d)<n && n <=(minimo+(10*d))){
        decil[9]+=1;
      }
      else{
        console.log("NADA");
      }

      }

      //Sumo las frecuencias de los deciles
      acu = decil[0]+decil[1]+decil[2]+decil[3]+decil[4]+decil[5]+decil[6]+decil[7]+decil[8]+decil[9];
      //Calculo la desviación con la funcion de abajo
      desv = this.desviacion(decil);

      //Muestro los resultados en pantalla
      console.log("F(x) Decil entre " + this.truncate(minimo,2) + " y " + this.truncate((minimo+d),2) + ": " + decil[0] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+d),2) + " y " + this.truncate((minimo+2*d),2) + ": " + decil[1] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+2*d),2) + " y " + this.truncate((minimo+3*d),2) + ": " + decil[2] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+3*d),2) + " y " + this.truncate((minimo+4*d),2) + ": " + decil[3] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+4*d),2) + " y " + this.truncate((minimo+5*d),2) + ": " + decil[4] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+5*d),2) + " y " + this.truncate((minimo+6*d),2) + ": " + decil[5] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+6*d),2) + " y " + this.truncate((minimo+7*d),2) + ": " + decil[6] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+7*d),2) + " y " + this.truncate((minimo+8*d),2) + ": " + decil[7] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+8*d),2) + " y " + this.truncate((minimo+9*d),2) + ": " + decil[8] + "\n" +
      "F(x) Decil entre " + this.truncate((minimo+9*d),2) + " y " + this.truncate((minimo+10*d),2) + ": " + decil[9] + "\n" +
      "Media: " + (acu/10) + "\n" +
      "Desviación: " + desv
      );
    }

  truncate (num, places) {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
  }

  desviacion (array){
    const n = array.length;
    const mean = array.reduce((a,b) => a+b)/n;
    const s = Math.sqrt(array.map(x => Math.pow(x-mean,2)).reduce((a,b) => a+b)/n);
    return s;
  }

  /*Math.random() devuelve un aleatorio entre 0 y 1*/
  /**
   * Devuelve un número aleatorio entre min (inclusive) and max (excluido (si quiero 50 tengo que poner 51))
  */
  getAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Devuelve un número aleatorio ENTERO entre min y max (inclusive)
   * Para esto existe el Math.round() pero no da una distribución uniforme
  */
  getAleatorioEntero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  render(){
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Ingrese el rango y números deseados</p>
        <label htmlFor="minimo" className="grey-text">
          Mínimo
        </label>
        <input type="number" id="minimo" className="form-control" value={this.min} defaultValue="1" onChange={this.onChange}/>
        <br />
        <label htmlFor="maximo" className="grey-text">
          Máximo
        </label>
        <input type="number" id="maximo" className="form-control" value={this.max} defaultValue="100" onChange={this.onChange}/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Números deseados
        </label>
        <input type="number" id="cantidad" className="form-control" value={this.cant} defaultValue="100" onChange={this.onChange}/>
        <br />
        <div className="text-center mt-4">
        <button onClick={(e)=> {let min = document.getElementById("minimo").value;
          let max = document.getElementById("maximo").value;
          let cant = document.getElementById("cantidad").value; 
        
        this.Calcular(e,min,max,cant)}}>Calcular</button>
                </div>
              </form>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
}

export default TP0;
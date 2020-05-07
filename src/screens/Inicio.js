import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

import {
  Link
} from "react-router-dom";


function Inicio() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Button variant="light" className="mr-2"><Link to="/TP0">TP0</Link></Button>
      <Button variant="success" className="mr-2"><Link to="/TP1">TP1</Link></Button>
      <Button variant="danger" className="mr-2">TP 2</Button>
      </header>
    </div>
  );
}

export default Inicio;
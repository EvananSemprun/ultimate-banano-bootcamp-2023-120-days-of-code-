import React, { Component } from "react";
import logo from "./logo.svg";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
state={
  fecha: new Date("2018", "06", "22")
}

onChange=fecha=>{
  this.setState({fecha: fecha});
}

mostrarFecha = fecha=>{
  alert(fecha);
}

  render() {
    return (
      <>
        <div className="contenedor">
          <div className="center">
           <DatePicker selected={this.state.fecha} onChange={this.onChange}/>
           <br /><br />

           <input type="button" value="Mostrar Fecha" className="btn btn-primary" onClick={()=>this.mostrarFecha(this.state.fecha)}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;

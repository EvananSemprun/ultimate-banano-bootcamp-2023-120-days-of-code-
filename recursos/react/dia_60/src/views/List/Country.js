import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Container, Table, Spinner } from 'react-bootstrap';
import Header from '../../components/Header';
import { Link } from "react-router-dom";
import {getCountryData} from "./../../api/request";

export default function Country() {
  const params = useParams();
  const {code} = params;
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState({});

  useEffect( () => {
    getCountry();
  }, []);

  const getCountry = async () => {
    const res = await getCountryData(code);
    console.log(res);
    setCountry(res);
    setLoading(false);
  }

  return(
    <>
    <Header />
    <div style={{marginTop: '15px'}}>
      {
        (loading) ? <>
          <div className ="text-center">
            <Spinner animation="grow" variant="success" />
          </div> 
        </>: 
        <>
        <Container>
          <img 
            alt="..."
            src={country.flags.png}
            style= {{
              width: '300px',
              border: '2px solid #444'
            }}
          />
          <h2> {country.name} </h2>
          <ul>
            <li><b>Capital: </b> {country.capital}</li>
            <li><b>Gentilicio: </b> {country.demonym}</li>
            <li><b>Codigo: </b> {country.alpha3Code}</li>
            <li><b>Pref. Telf: </b> +{country.callingCodes[0]}</li>
            <li><b>Area: </b> {country.area}</li>
            <li><b>Poblacion: </b> {country.population}</li>
            <li><b>Region: </b> {country.region}</li>
            <li><b>SubRegion: </b> {country.subregion}</li>
            <li>
              <b>Fronteras: </b> 
              {
                (country.borders) ? 
                <>
                  <ul style={{
                    listStyle: 'decimal'
                  }}>
                      {
                        country.borders.map( (b, i) => (
                          <li key={i}>{b}</li>
                        ))
                      }
                  </ul>
                </>: 
                <>
                  <span>No tiene fronteras</span>
                </>
              }
            </li>
            <li>
              <b>Zona horaria: </b> 
              <ul style={{
                listStyle: 'decimal'
              }}>
                  {
                    country.timezones.map( (t, i) => (
                      <li key={i}>{t}</li>
                    ))
                  }
              </ul>
            </li>
          </ul>
          
          <div style={{
            textAlign: 'right'
          }}>
            <Link to="/list" className="btn btn-primary"> Regresar </Link>
          </div>

        </Container>
        </>
      }
    
    </div>
    </>
  )
}


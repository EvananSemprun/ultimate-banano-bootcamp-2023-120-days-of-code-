import React, {useEffect, useState} from 'react';
import { Container, Table, Spinner, InputGroup, FormControl } from 'react-bootstrap';
import Header from '../../components/Header';
import {getCountriesData} from "./../../api/request";

export default function List() {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect( () => {
    getCountries();
  }, []);
  
  const getCountries = async () => {
    const res = await getCountriesData();
    console.log(res);
    setCountries(res);
    setData(res);
    setLoading(false);
  }

  const handleSearch = (text) => {
    if (text) {
      const newData = countries.filter( (item) => {
        const txtData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return txtData.indexOf(textData) > -1;
      });
      setSearch(text);
      setData(newData);
    } 
    else {
      setData(countries);
      setSearch(text);
    }   
  }

  return(
    <>
      <Header />

      <Container>
        <div className='text-center' style={{
          marginTop: '20px',
          marginBottom: '20px'
        }}>
          <h2> Obtencion de paises </h2>
        </div>
        
        <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Busca tu pais"
            value={search}
            onChange={(val) => handleSearch(val.target.value)}
          />
        </InputGroup>
        </div>
        {
          (loading) ? <>
            <div className ="text-center">
              <Spinner animation="grow" variant="success" />
            </div>
          </> : 
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Bandera</th>
                  <th>Nombre</th>
                  <th>Codigo</th>
                  <th>Telf</th>
                  <th>Dominio</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map( (c, i) => (
                    <tr key={i}>
                      <td>
                        <img 
                          style={{
                            width: '80px'
                          }}
                          alt="nada" 
                          src ={c.flags.png} />
                      </td>
                      <td>{c.name}</td>
                      <td>{c.alpha3Code}</td>
                      <td>+{c.callingCodes[0]}</td>
                      <td>{c.topLevelDomain[0]}</td>
                      <td>
                        <a href={`/country/${c.alpha2Code}`}> Ver mas </a>
                      </td>
                    </tr>
                  ) )
                }
              </tbody>
            </Table>
          </>
        }
       
      </Container>
    </>
  )
}


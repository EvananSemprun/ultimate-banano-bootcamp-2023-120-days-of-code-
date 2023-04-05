import React, { useState, useEffect } from 'react';
import { Card, CardBody,CardSubtitle, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';


function Digimons() {
  const [digimon, setDigimon] = useState([]);
  const [digimonl,setdigimonl] = useState('All')
  const [digis,setdigis] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(!dropdownOpen)

  const toggleStatus = (param) =>{
    if (param === 'All'){
      setdigis(true)
      setdigimonl('All')
    }else{
      setdigimonl(param)
      setdigis(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://digimon-api.vercel.app/api/digimon'
        )
        setDigimon(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [setDigimon]);

  return (
    <Container>
      
      <div className='p-5'>
        <h1>Selecciona un nivel</h1>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down" >
          <DropdownToggle caret color="dark">All</DropdownToggle>
          <DropdownMenu dark>
            <DropdownItem onClick={() => toggleStatus('In Training')}>In training</DropdownItem>
            <DropdownItem onClick={() => toggleStatus('Rookie')}>Rookie</DropdownItem>
            <DropdownItem onClick={() => toggleStatus('Champion')}>Champion</DropdownItem>
            <DropdownItem onClick={() => toggleStatus('Ultimate')}>Ultimate</DropdownItem>
            <DropdownItem onClick={() => toggleStatus('Fresh')}>Fresh</DropdownItem>
            <DropdownItem onClick={() => toggleStatus('Mega')}>Mega</DropdownItem>
            <DropdownItem onClick={() => toggleStatus('Armor')}>Armor</DropdownItem>
            <DropdownItem onClick={() => toggleStatus('All')}>All</DropdownItem>
          </DropdownMenu>
        </Dropdown> 
        
      <input className='buscar' placeholder='Disponible pronto.....'></input>
      </div>
      <Row>
      {
        digis === true ?(
          digimon.map((digimon) => (
            <Col className="bg-light border">
              <Card className="my-2" color="dark"  inverse style={{ width: '18rem' }} >
                <img src={digimon.img} alt={digimon.name} />
                <CardBody tag="h1">
                  <h6 className="text-center">{digimon.name}</h6>
                </CardBody>
                <CardSubtitle className="text-center">
                  {digimon.level}
                </CardSubtitle>
              </Card>
            </Col>
        ))
        )
       : (
        
        digimon.filter(digimon => digimon.level === digimonl).map((digimon) => (
        <Col className="bg-light border hoverpiola">
          <Card className="my-2"  color="dark"   inverse  style={{   width: '18rem'  }} >
            <img src={digimon.img} alt={digimon.name} />
            <CardBody tag="h1">
              <h6 className="text-center">{digimon.name}</h6>
            </CardBody>
            <CardSubtitle className="text-center">
              {digimon.level}
            </CardSubtitle>
          </Card>
        </Col>
    ))
    )
       
       }
      </Row>
      <footer className="footer">
    <p>pokemon es mejor ......</p>
  </footer>
    </Container>
  )
}

export default Digimons
/*
pokemon es mejor

*/ 
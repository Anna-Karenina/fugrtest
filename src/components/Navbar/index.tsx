import * as React from 'react'
import  logo  from './../../assets/logo.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from './Navbar.module.css'


interface INavbarProps {
  bg?: string;
  variant?: string;
  theme:string;
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Navibar: React.FC<INavbarProps> = ({theme, setTheme}) => {
  const [hovered, setHovered] = React.useState(false)

  const toggleHover = () => setHovered(!hovered);

  return (
<Navbar bg={theme} variant="dark" >
  <Navbar.Brand 
    href="https://future-group.ru/" 
    onMouseEnter={toggleHover}
    onMouseLeave={toggleHover}>
  <img
    alt="Future Group"
    src={logo}
    width="30"
    height="30"
    className="d-inline-block align-top"
  />{' '}
  <span
    className={hovered ? 
      styled.logo__tooltip+" "+styled.__hovered : styled.logo__tooltip}
  >
    Future
  </span>
  </Navbar.Brand>
  <Nav 
    className="justify-content-end" 
    style={{width: '100%'}} 
  >
    <Nav.Link 
      eventKey={2} 
      href="#nav"
      onClick = 
      { theme === 'dark' ?  
      ()=>setTheme('light') : ()=>setTheme('dark') }
    >
        { 
          theme === 'dark' ?  
          <span>Dark Theme</span> 
          :
           <span style ={{ color : '#333'}}>
             Light Theme
          </span>  
        }
      </Nav.Link>
    </Nav>
</Navbar>
  )
}
export default Navibar


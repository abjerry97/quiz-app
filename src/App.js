import React, { useState } from "react";
import {
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import * as FaIcons from "react-icons/fa";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SideBarr from "./components/SideBarr";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <BrowserRouter>
    <div className="App">
      <header className="row">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <button className="navbar-ico" onClick={showSidebar}>
              <FaIcons.FaAngleDown />
            </button>
            <Navbar.Brand href="#home">Quiz Online</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#deets">Aug 2, 2021</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Welcome Admin
                </Nav.Link>

                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <div className = "containerr">
        <div className="col-2">
          
            <SideBarr changeHandler={sidebar} />
            
        </div>
        <div className='col-10'>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/test" component={Test}></Route>
        </div>
        </div>
      </main>
      <footer>
        <div>footer</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

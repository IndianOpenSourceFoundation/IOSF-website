import React from 'react'
import "./navbar.css"

import { Navbar, Container, Button } from "react-bulma-components";
import NavModal from './components/NavModal';


class AppNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showNavModal: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  openNavModal = () => { this.setState({ showNavModal: true }) }
  closeNavModal = () => { this.setState({ showNavModal: false }) }


  handleClick = (id_name) => {
    document.getElementById(id_name).scrollIntoView();
  }

  render() {
    return (
      <div>
        <Navbar fixed="top">
          <Container>
            <Navbar.Brand>
              <Navbar.Item>
                <img src="/img/iosf-logo.png" alt="iosf-logo" />  <span>Indian Open Source Foundation</span>
              </Navbar.Item>
              <Navbar.Burger onClick={this.openNavModal} />
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Container position="end">
                <Navbar.Item onClick={() => this.handleClick("learningpath__section")}>
                  Learning Paths
            </Navbar.Item>
                <Navbar.Item onClick={() => this.handleClick("products__section")}>
                  Our Products
            </Navbar.Item>
                <Navbar.Item href="#">
                  Blog
            </Navbar.Item>
                <Navbar.Item href="https://toolsiosf.typeform.com/to/fl45kmgs">
                  <Button className="navbar__joinusBtn">
                    JOIN US
              </Button>
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Container>
        </Navbar>

        <NavModal showNavModal={this.state.showNavModal} closeNavModal={this.closeNavModal} />
      </div>

    )
  }
}

export default AppNavbar;

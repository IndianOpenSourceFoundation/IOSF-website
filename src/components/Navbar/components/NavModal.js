import React from "react";
import { Modal, Container, Button } from "react-bulma-components"
import "./navModal.css"

class NavModal extends React.Component {

  handleClick = (id_name) => {
    document.getElementById(id_name).scrollIntoView();
    this.props.closeNavModal();
  }

  render() { 
    return ( 
      <Modal className="navModal" show={this.props.showNavModal} onClose={this.props.closeNavModal}> 
        <Modal.Content>
          <Container>
            <div className="navModal__links">
              <Button onClick={() => this.handleClick("learningpath__section")}>Learning Paths</Button>
              <Button onClick={() => this.handleClick("products__section")}>Our Products</Button>
              <Button>Blogs</Button>
              <Button className="navModal__joinusBtn" renderAs="a" href="https://toolsiosf.typeform.com/to/fl45kmgs">
                JOIN US
              </Button>
            </div>
          </Container>
        </Modal.Content>
      </Modal>
     );
  }
}
 
export default NavModal;

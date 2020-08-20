import React from "react";
import "./index.css"

import { Section, Container, Columns, Card, Button } from 'react-bulma-components';

class Contribute extends React.Component {
  render() {
    return (
      <Section id="products__section" className="products__section">
        <Container>
          <h2 className="section__title">Contribute to Real-World Projects</h2>
          <Columns>
            <Columns.Column size={4}>
              <div className="product__card">
                <Card>
                  <Card.Content>
                    <img className="product__avatar" src="/img/dynamic_cli_avatar.png" alt="" />
                    <span className="product__progressTag">ON-GOING</span>
                    <h6 className="product__title">Dynamic CLI</h6>
                    <p>A CLI utility that can connect to an external databases, also fetch suggestions from different dev communities like stackoverflow and reddit.</p>
                    <Button className="product__contributeBtn" size="small" renderAs="a" href="https://github.com/IndianOpenSourceFoundation/dynamic-cli"><i className="fab grey-text fa-github"></i> CONTRIBUTE</Button>
                  </Card.Content>
                </Card>
              </div>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    )
  }
}

export default Contribute;

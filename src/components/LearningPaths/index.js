import React from "react";
import "./index.css";

import { Section, Content, Container, Columns, Button } from 'react-bulma-components'

const LearningPaths = () => (
  <Section id="learningpath__section" className="learningpath__section">
    <Container>
      <Content>
        <h2 className="section__title">Personalised Learning Paths for Devs</h2>
        <div className="learningpath__boxContainer">
          <Columns className="learningpath_box">
            <Columns.Column size={5}>
              <img src="/img/beginner-fiendly.svg" alt="beginnerfriendly-banner" />
            </Columns.Column>
            <Columns.Column size={6} offset={1}>
              <h3>Beginner Friendly Path</h3>
              <p>This path is specially designed for those who have little or zero experience in computer programming and open source.</p>
              <p>We will cover JavaScript, Python and Version Control (Git) form scratch and kick off by contributing to small yet interesting projects.</p>
              <Button className="learningpath__getStartedBtn" renderAs="a" href="https://github.com/IndianOpenSourceFoundation/Interesting-Python">GET STARTED <i className="fas fa-arrow-right"></i></Button>
            </Columns.Column>
          </Columns>
          <Columns className="learningpath_box">
            <Columns.Column className="advancedpath__image__small" size={5} offset={1}>
              <img src="/img/advanced-path.svg" alt="advancedpath-banner" />
            </Columns.Column>
            <Columns.Column size={6}>
              <h3>Hands-on Code Path</h3>
              <p>This path is a step further, we will use our programming skills and logic to contribute and build products that will solve a real-life problem.</p>
              <p>Contribute to our source code and help us build better products</p>
              <Button className="learningpath__getStartedBtn" renderAs="a" href="https://github.com/IndianOpenSourceFoundation/Interesting-Python">GET STARTED <i className="fas fa-arrow-right"></i></Button>
            </Columns.Column>
            <Columns.Column className="advancedpath__image__large" size={5} offset={1}>
              <img src="/img/advanced-path.svg" alt="advancedpath-banner" />
            </Columns.Column>
          </Columns>
        </div>
      </Content>
    </Container>
  </Section>
)

export default LearningPaths

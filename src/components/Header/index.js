import React from 'react';
import './index.css';
import { Container, Content, Button, Section, Columns } from 'react-bulma-components';

import AppNavbar from '../Navbar/AppNavbar';

const Header = () => {

  const handleClick = (id_name) => {
    document.getElementById(id_name).scrollIntoView();
  }

  return (
    <>
      <header>
        <AppNavbar />
        <Container>
          <div className="header__heroContainer">
            <Content>
              <div className="header__heroContent">
                <h2 className="header__heroHeading">Promoting open source, one step at a time</h2>
                <p className="header__heroSubheading">At IOSF we have taken a pledge to make open source contribution simplified. Join us in our journey and let's create effective products on our way.</p>
              </div>
              <div className="header__btnContainer">
                <Button className="header__heroJoinUsBtn" size="medium" renderAs="a" href="https://toolsiosf.typeform.com/to/fl45kmgs">JOIN US <i className="fas fa-arrow-right"></i></Button>
                <Button className="header__heroOurProductsBtn" onClick={() => handleClick("products__section")} size="medium">OUR PRODUCTS</Button>
              </div>
            </Content>
          </div>
        </Container>
        {/* <div className="header__heroSocialLinks">
              <a href="https://www.facebook.com/iosfindia/" className="btn btn-floating z-depth-0 facebook transparent grey-text"><i class="fab grey-text fa-facebook-f"></i></a>
              <a href="https://twitter.com/iosf_india" className="btn btn-floating z-depth-0 twitter transparent grey-text"><i class="fab grey-text fa-twitter"></i></a>
              <a href="https://www.instagram.com/iosf_india/" className="btn btn-floating z-depth-0 instagram transparent grey-text"><i class="fab grey-text fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/iosf/" className="btn btn-floating z-depth-0 linkedin transparent grey-text"><i class="fab grey-text fa-linkedin"></i></a>
              <a href="https://github.com/IndianOpenSourceFoundation" className="btn btn-floating z-depth-0 github transparent grey-text"><i class="fab grey-text fa-github"></i></a>
            </div> */}
      </header>
      <Section>
        <Container>
          <Content>
            <h3 className="togetherLetsTitle">Together Let's</h3>
          </Content>
          <Columns className="togetherLets__cardContainer">
            <Columns.Column className="togetherLets__card">
              <Content>
                <img src="/img/learn_avatar.png" alt="" />
                <h3>Learn</h3>
                <p>There's always a room for learning here. We are constantly learning new skills and concepts at all levels which help us increase the quality of our products.</p>
              </Content>
            </Columns.Column>
            <Columns.Column>

              <Content>
                <img src="/img/contribute_avatar.png" alt="" />
                <h3>Contribute</h3>
                <p>An active community of contributors that are passionate about product development and want to create something big.</p>
              </Content>

            </Columns.Column>
            <Columns.Column>
              <Content>
                <img src="/img/mentor_avatar.png" alt="" />
                <h3>Mentor</h3>
                <p>IOSF loves mentoring sessions. It gives us an opportunity to share knowledge amongst fellow developers and encourage them into product development.</p>
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </>
  )
}

export default Header;

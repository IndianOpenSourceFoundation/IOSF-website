import React from "react";
import { Footer, Content, Container, Columns, Button } from 'react-bulma-components'
import "./index.css"

const AppFooter = () => {
  const date = new Date();

  return (
    <Footer>
      <Container>
        <Content>
          <blockquote>
            Join us as a contributor and associate with us in our journey for making <strong>Open Source Contribution</strong> lit 🔥 and super powerful for the budding and already existing developer community.
              <Button className="footer__joinUsBtn" size="medium" renderAs="a" href="https://toolsiosf.typeform.com/to/fl45kmgs">JOIN US <i className="fas fa-arrow-right"></i></Button>
          </blockquote>
          <Columns>
            <Columns.Column size={3}>
              <h4>Subscribe</h4>
              <form>
                <div className="field">
                  <div className="control">
                    <input className="input" placeholder="Enter your email, foo@bar.com" />
                  </div>
                </div>
                <Button className="footer__subscribeBtn" color="primary" size="small">SUBSCRIBE</Button>
              </form>
            </Columns.Column>
            <Columns.Column size={4} offset={1}>
              <h4>General Links</h4>
              <ul className="footer__links">
                <li>
                  <a className="footer-link grey-text text-lighten-1" href="/"
                  >About</a
                  >
                </li>
                <li>
                  <a className="footer-link grey-text text-lighten-1" href="/"
                  >Work</a
                  >
                </li>
                <li>
                  <a className="footer-link grey-text text-lighten-1 " href="/"
                  >Join</a
                  >
                </li>
                <li>
                  <a className="footer-link grey-text text-lighten-1" href="/"
                  >Blogs</a
                  >
                </li>
                <li>
                  <a className="footer-link grey-text text-lighten-1" href="/"
                  >Contact</a
                  >
                </li>
              </ul>
            </Columns.Column>
            <Columns.Column size={4}>
              <h4>Connect</h4>
              <div className="footer__socialLinks">
                <a href="https://www.facebook.com/iosfindia/" className="btn btn-floating z-depth-0 facebook transparent grey-text"><i className="fab grey-text fa-facebook-f"></i></a>
                <a href="https://twitter.com/iosf_india" className="btn btn-floating z-depth-0 twitter transparent grey-text"><i className="fab grey-text fa-twitter"></i></a>
                <a href="https://www.instagram.com/iosf_india/" className="btn btn-floating z-depth-0 instagram transparent grey-text"><i className="fab grey-text fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/iosf/" className="btn btn-floating z-depth-0 linkedin transparent grey-text"><i className="fab grey-text fa-linkedin"></i></a>
                <a href="https://github.com/IndianOpenSourceFoundation" className="btn btn-floating z-depth-0 github transparent grey-text"><i className="fab grey-text fa-github"></i></a>
              </div>
            </Columns.Column>
          </Columns>
          <div className="footer__copyright">
            <p>ping@iosf.com <br />&copy; Indian Open Source Foundation, {date.getFullYear()}</p>
          </div>
        </Content>
      </Container>
    </Footer>
  )
}

export default AppFooter;

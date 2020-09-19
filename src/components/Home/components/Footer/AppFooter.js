import React from "react";
import "./footer.css";
import {
  Footer,
  Content,
  Container,
  Level,
} from "react-bulma-components";
import ConnectBar from "./components/connect-bar";
import SubscribeBar from "./components/subscribe-bar";
import JoinUs from "./components/join-us-bar";

class AppFooter extends React.Component {
  backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {

    return (
      <Footer>
        <Container>
          <Content>
            <Level>
              <Level.Side align="left">
                <Level.Item>
                  <img src="/img/iosf-logo.png" alt="iosf-logo" />
                </Level.Item>
              </Level.Side>
              <Level.Side align="right">
                <Level.Item>
                  <div onClick={this.backToTop}>
                    <span className="has-text-white">Back To Top</span>
                    <i className="fas fa-arrow-up has-text-white"></i>
                  </div>
                </Level.Item>
              </Level.Side>
            </Level>
            <hr />
            <JoinUs/>
            <SubscribeBar/>
            <hr />
            <ConnectBar/>
          </Content>
        </Container>
      </Footer>
    );
  }
}

export default AppFooter;

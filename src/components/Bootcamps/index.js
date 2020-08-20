import React from "react";
import "./index.css"
import { Section, Button, Content, Container, Columns, Image } from "react-bulma-components";

const Bootcamps = () => (
  <Section className="bootcamp__notificationContainer">
    <Container>
      <Content>

      </Content>
      <Columns>
        <Columns.Column size={5}>
          <Image src="/img/contribute.svg" />
        </Columns.Column>
        <Columns.Column size={6} offset={1}>
          <Content>
            <h2 className="bootcamp__title">#WeekendBootcamps</h2>
            <div className="bootcamp__content">
              <p>
                Participate into our coding bootcamps and let's build some mini projects, brush-up concepts on computer programming, logic and problem solving.
                    Get <strong>IOSF Certified</strong>, build a portfolio and showcase your skills to the world.
                  </p>

            </div>
            <Button className="bootcamp__enrollBtn" renderAs="a" href="https://toolsiosf.typeform.com/to/KMqzcJHK">ENROLL NOW <i className="fas fa-arrow-right"></i></Button>
          </Content>
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
)

export default Bootcamps;

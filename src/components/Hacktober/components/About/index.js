import React from 'react';
import "./styles.css";

import { Container, Grid } from '@material-ui/core'

const About = () => {
  return ( 
    <div className="about__section">
      <Container> 
        <h3 className="about__title">About Hacktoberfest</h3>
        <div className="about__content">
          <p>Hacktoberfest is a monthlong celebration of open source software run by DigitalOcean. Hacktoberfest is open to everyone in our global community! Four quality pull requests must be submitted to public GitHub repositories. You can sign up anytime between October 1 and October 31.</p>
        </div>
      </Container>
    </div>
   );
}
 
export default About;
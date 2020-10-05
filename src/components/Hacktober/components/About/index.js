import React from 'react';
import "./styles.css";

import { Container, Grid, Link } from '@material-ui/core'

const About = () => {
  return ( 
    <div className="about__section">
      <Container> 
        <h3 className="about__title">About Hacktoberfest</h3>
        <div className="about__grid">
          <Grid container spacing={5}>
            <Grid item sm={5}>
              <img src="/img/hacktober/hacktoberfest_logo.svg" alt="hactoberfest-logo" width="100%" />
            </Grid>
            <Grid item sm={7}>
              <div className="about__content">
                <p>Hacktoberfest is a monthlong celebration of open source software run by DigitalOcean. Hacktoberfest is open to everyone in our global community! Four quality pull requests must be submitted to public GitHub repositories. You can sign up anytime between October 1 and October 31.</p>
                <p>To know more about Hacktober'20 and it's sponsors vistit the website @ <Link target="_blank" rel="noopener noreferrer" href="https://hacktoberfest.digitalocean.com/">hacktoberfest.digitalocean.com</Link> </p>
                <img src="/img/hacktober/hacktober_sponsors.png" alt="hactober-sponsors" width="70%" />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
   );
}
 
export default About;
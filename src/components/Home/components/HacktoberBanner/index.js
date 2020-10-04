import React from 'react';
import "./styles.css"

import { Container, Grid, Button, Link } from '@material-ui/core';

const HacktoberBanner = () => {
  return ( 
    <div className="hacktoberbanner__section">
      <div className="hacktoberbanner__img">
      <div className="hactoberbanner__text">
      <Container>
        <Grid container>
          <Grid item sm={7}>
            <h3>IOSF celebrates the season of open source <span role="img" aria-label="party emojis">🥳🎉</span></h3>
            <Link href="/hacktober">
              <Button variant="contained" size="large">
                Let's Contribute
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      </div>
      </div>
      <div className="hactoberbanner__text__sm">
        <Container>
          <h3>IOSF celebrates the season of open source <span role="img" aria-label="party-emojis">🥳🎉</span></h3>
          <Link>
            <Button href="/hacktober" variant="contained">
              Let's Contribute
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  );
}
 
export default HacktoberBanner;
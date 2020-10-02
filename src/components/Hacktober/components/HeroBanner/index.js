import React from 'react';
import "./styles.css";

import { Grid, Container, Link, Button } from '@material-ui/core'

const HeroBanner = () => {
  return ( 
    <div className="hero">
      <Container>
        <Grid container spacing={5}>
          <Grid item sm={6}>
            <div className="hero__heading">
              <h2 className="hero__title">Let's Contribute, <br /> One PR at a time.</h2>
              <p className="hero__subtitle">We are celebrating the season of open source contributions, <strong>Hacktober 20'</strong>. So pick up a project that suits you and get started.</p>
              <div className="hero__btns">
                <Link>
                  <Button variant="contained"
                    onClick={() => document.querySelector("#projects__section").scrollIntoView({behavior: "smooth"})}
                  >
                    View Projects
                  </Button>
                </Link>
                {/* <Link>
                  <Button variant="contained">
                    Know More
                  </Button>
                </Link> */}
              </div>
            </div>
          </Grid>
          <Grid item sm={6}>
            <div className="hero__image">
              
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
   );
}
 
export default HeroBanner;
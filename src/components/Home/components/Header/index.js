import React from 'react';
import { Button, Container, Grid, Link } from '@material-ui/core';
import { ArrowForward, GitHub } from '@material-ui/icons';

import "./styles.css";
import Navbar from "../Navbar"


const Header = () => {
  return ( 
    <div className="header">
      <Navbar />
      <Container>
        <Grid>
          <Grid item sm={6}>
            <div className="header__hero">
              <h2 className="header__hero__title">
                Promoting open source, <br />one step at a time
              </h2>
              <p className="header__hero__subtitle">
              At IOSF we have taken a pledge to make open source contribution simplified. Join us in our journey and let's create effective products on our way.
              </p>
              <div className="header__hero__btns">
                <Link href="https://lnkd.in/eWYs6nm">
                  <Button 
                    variant="contained" 
                    size="large" 
                    className="header__joinus__btn"
                    endIcon={<ArrowForward />}
                  >
                    Join Us</Button>
                </Link>
                <Link href="https://github.com/IndianOpenSourceFoundation">
                  <Button 
                  variant="contained" 
                  size="large" 
                  className="header__ourproducts__btn"
                  endIcon={<GitHub />}>Our Products</Button>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
   );
}
 
export default Header;
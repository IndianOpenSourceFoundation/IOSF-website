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
        <Grid container>
          <Grid item sm={6}>
            <div className="header__hero">
              <h2 className="header__hero__title">
                Kick-start your open source contributions
              </h2>
              <p className="header__hero__subtitle">
                Let's promote & simplify open source, one step at a time.
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
                  endIcon={<GitHub />}>Projects</Button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item sm={6}>
            <div className="header__banner">

            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
   );
}
 
export default Header;
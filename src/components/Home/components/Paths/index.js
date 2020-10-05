import React from 'react';
import "./styles.css";
import { Button, Container, Grid, Link } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";


const Paths = () => {
  return ( 
    <div id="paths__section" className="paths__section">
      <Container>
        <h3 className="paths__title">Personalised Learning Paths for Devs</h3>
        <div className="paths__grid">
          <Grid container spacing={5}>
            <Grid item sm={6}>
              <img src="/img/home/beginner-fiendly.svg" alt="beginner-friendly-banner" />
            </Grid>
            <Grid item sm={6} >
              <div className="paths__beginner">
                <h4>Beginner Friendly Path</h4>
                <p>This path is specially designed for those who have little or zero experience in computer programming and open source.
                  <br /> We will cover JavaScript, Python and Version Control (Git) form scratch and kick off by contributing to small yet interesting projects.
                </p>
                <Link href="https://github.com/IndianOpenSourceFoundation/Interesting-Python">
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                  >Get Started</Button>
                </Link>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item sm={6}>
              <div className="paths__beginner">
                <h4>Hands-on Code Path</h4>
                <p>This path is a step further, we will use our programming skills and logic to contribute and build products that will solve a real-life problem.
                  <br /> Contribute to our source code and help us build better products
                </p>
                <Link href="https://github.com/IndianOpenSourceFoundation/Interesting-Python">
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                  >Get Started</Button>
                </Link>
              </div>
            </Grid>
            <Grid item sm={6} >
              <img src="/img/home/advanced-path.svg" alt="advanced-banner" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
   );
}
 
export default Paths;
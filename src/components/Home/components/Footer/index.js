import React from 'react';
import "./styles.css";
import { Container, Grid, IconButton, TextField, Button, Link } from '@material-ui/core';
import { Facebook, Instagram, YouTube, Twitter, LinkedIn, GitHub } from '@material-ui/icons';


const Footer = () => {
  return (
    <footer className="footer__section">
      <Container>
        
        <div className="footer__blockquote">
          <blockquote>
            Join us as a contributor and associate with us in our journey for making Open Source Contribution lit 🔥 and super powerful for the budding and already existing developer community.
          </blockquote>
          <Link>
            <Button variant="link" size="large">Join Us</Button>
          </Link>
        </div>
        <div className="footer__grid">
          <Grid container spacing={5}>
            <Grid item sm={4}>
              <h4>General Links</h4>
              <ul className="footer__generallinks">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Work</a>
                </li>
                <li>
                  <a href="">Join</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </Grid>
            <Grid item sm={4}>
              <h4>Subscribe</h4>
              <form className="footer__subscribe">
                <TextField 
                label="Enter your email" 
                variant="outlined" />
                <Button type="submit" variant="contained" size="small">Subscribe</Button>
              </form>
            </Grid>
            <Grid item sm={4}>
              <h4>Connect</h4>
                <Link href="http://www.google.com">
                <IconButton size="medium">
                  <Facebook fontSize="large" style={{color: "#eee"}} />
                </IconButton>
                </Link>
                <IconButton>
                  <Instagram fontSize="large" style={{color: "#eee"}} />
                </IconButton>
                <IconButton>
                  <Twitter fontSize="large" style={{color: "#eee"}} />
                </IconButton>
                <IconButton>
                  <YouTube fontSize="large" style={{color: "#eee"}} />
                </IconButton>
                <IconButton>
                  <LinkedIn fontSize="large" style={{color: "#eee"}} />
                </IconButton>
                <IconButton>
                  <GitHub fontSize="large" style={{color: "#eee"}} />
                </IconButton>
            </Grid>
          </Grid>
          <div className="footer__copyright">
            <p>ping@iosf.in</p>
            <p>&copy; Indian Open Source Foundation, 2020</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
 
export default Footer;
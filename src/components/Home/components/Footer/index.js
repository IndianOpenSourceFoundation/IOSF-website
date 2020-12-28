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
            Join us as a contributor and associate with us in our journey for making Open Source Contribution lit <span role="img" aria-label="fire emoji">🔥</span> and super powerful for the budding and already existing developer community.
          </blockquote>
          <Link href="https://toolsiosf.typeform.com/to/fl45kmgs">
            <Button variant="contained" size="large">Join Us</Button>
          </Link>
        </div>
        <div className="footer__grid">
          <Grid container>
            <Grid item sm={4}>
              <h4>General Links</h4>
              <ul className="footer__generallinks">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="https://github.com/IndianOpenSourceFoundation">Work</a>
                </li>
                <li>
                  <a href="https://toolsiosf.typeform.com/to/fl45kmgs">Join</a>
                </li>
                <li>
                  <a href="https://iosf.in/hacktober">Hacktober</a>
                </li>
              </ul>
            </Grid>
            <Grid item sm={4}>
              <h4>Subscribe</h4>
              <form className="footer__subscribe">
                <TextField 
                label="Enter your email" 
                variant="outlined" />
                <Button type="submit" variant="contained" size="large">Subscribe</Button>
              </form>
            </Grid>
            <Grid item sm={4}>
              <h4>Connect</h4>
                <Link target="_blank" rel='noopener noreferrer'  href="https://www.facebook.com/iosfindia/?eid=ARDRVMvDpW-Q13ReYfutBPNs7y7shTHZVbxEGQWQ_65eFZrdExX3-FfA2z2obFImN3UVP57n7fsktZ4n&fref=tag">
                  <IconButton size="medium">
                    <Facebook fontSize="large" style={{color: "#eee"}} />
                  </IconButton>
                </Link>
                <Link target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/iosf_india/">
                  <IconButton>
                    <Instagram fontSize="large" style={{color: "#eee"}} />
                  </IconButton>
                </Link>
                <Link target="_blank" rel='noopener noreferrer' href="https://twitter.com/iosf_india">
                  <IconButton>
                    <Twitter fontSize="large" style={{color: "#eee"}} />
                  </IconButton>
                </Link>
                <Link target="_blank" rel='noopener noreferrer' href="https://www.youtube.com/channel/UCU16gJvjk-bB2RfwBIq2DSA">
                  <IconButton >
                    <YouTube fontSize="large" style={{color: "#eee"}} />
                  </IconButton>
                </Link>
                <Link target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/company/iosf/">
                  <IconButton>
                    <LinkedIn fontSize="large" style={{color: "#eee"}} />
                  </IconButton>
                </Link>
                <Link target="_blank" rel='noopener noreferrer' href="https://github.com/IndianOpenSourceFoundation">
                  <IconButton>
                    <GitHub fontSize="large" style={{color: "#eee"}} />
                  </IconButton>
                </Link>
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
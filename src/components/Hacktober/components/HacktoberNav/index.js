import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Link, Button } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import "./styles.css";

const HacktoberNav = () => {
  // const [open, setOpen] = useState(false)

  // const handleOpen = () => {
  //   setOpen(true);
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  return ( 
      <div className="hacktobernav">
        <AppBar>
          <Container>
           <Toolbar>
             <div className="hacktobernav__logo">
              <Link href="/hacktober">
                <img src="/img/hacktober/iosfxhack_logo.svg" height="40px" alt="iosf-logo" />
                {/* <h6>Indian Open Source Foundation</h6> */}
              </Link>
             </div>
             <div className="hacktobernav__links" style={{marginLeft: "auto"}}>
              <Link href="/" style={{paddingLeft: "50px"}}>
                Home
              </Link>
              <Link onClick={
                (e) => {
                  e.preventDefault()
                  document.querySelector("#projects__section").scrollIntoView({behavior: "smooth"})
                }
              } style={{paddingLeft: "50px"}}>
                Hactober Projects
              </Link>
              {/* <Link style={{paddingLeft: "50px"}}>
                Blog
              </Link> */}
              <Link href="https://github.com/IndianOpenSourceFoundation/" target="_blank" rel="noopener noreferrer" style={{paddingLeft: "50px"}}>
                <Button
                  endIcon={<GitHub />}
                >
                  GitHub
                </Button>
              </Link>
             </div>
             {/* <div className="hacktobernav__burgerIcon" style={{paddingLeft: "50px"}}>
              <IconButton onClick={handleOpen}>
                <Menu />
              </IconButton>
             </div> */}
           </Toolbar>
          </Container>
        </AppBar>
      </div>
   );
}
 
export default HacktoberNav;
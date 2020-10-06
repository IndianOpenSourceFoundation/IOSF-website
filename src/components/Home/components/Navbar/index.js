import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Link, IconButton, Button, Dialog } from '@material-ui/core';
import { Close, Menu } from '@material-ui/icons';

import "./styles.css";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  return ( 
      <div>
        <AppBar>
          <Container>
           <Toolbar>
             <div className="navbar__logo">
              <Link href="/">
                <img src="/img/iosf-logo.png" height="40px" alt="iosf-logo" />
                <h6>Indian Open Source Foundation</h6>
              </Link>
             </div>
             <div className="navbar__links" style={{marginLeft: "auto"}}>
              <Link 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#paths__section').scrollIntoView({ behavior: "smooth" })
                }}
              style={{paddingLeft: "50px"}}>
                Learning Path
              </Link>
              <Link href="https://github.com/IndianOpenSourceFoundation" style={{paddingLeft: "50px"}}>
                Our Products
              </Link>
              <Link href="https://iosf.in/hacktober" style={{paddingLeft: "50px"}}>
                Hacktober
              </Link>
              <Link href="https://toolsiosf.typeform.com/to/fl45kmgs" style={{paddingLeft: "50px"}}>
                <Button>
                  Join Us
                </Button>
              </Link>
             </div>
             <div className="navbar__burgerIcon" style={{paddingLeft: "50px"}}>
              <IconButton onClick={handleOpen}>
                <Menu />
              </IconButton>
             </div>
           </Toolbar>
          </Container>
        </AppBar>

        <Dialog fullScreen open={open} onClose={handleClose}>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={handleClose} style={{marginLeft: "auto"}}>
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container>
            <Link
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.querySelector('#paths__section').scrollIntoView({ behavior: "smooth" })
              }}
            >
              Learning Paths
            </Link>
            <Link href="https://github.com/IndianOpenSourceFoundation">
              Our Products
            </Link>
            <Link href="/hacktober">
              Hacktober
            </Link>
            <Link href="https://toolsiosf.typeform.com/to/fl45kmgs">
              <Button>
                Join Us
              </Button>
            </Link>
          </Container>
        </Dialog>

      </div>
   );
}
 
export default Navbar;
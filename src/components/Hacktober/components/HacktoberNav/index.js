import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Link, IconButton, Button, Dialog } from '@material-ui/core';
import { Close, Menu } from '@material-ui/icons';

import "./styles.css";

const HacktoberNav = () => {
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
              <Link href="hello">
                <img src="/img/hacktober/iosfxhack_logo.svg" height="40px" alt="iosf-logo" />
                {/* <h6>Indian Open Source Foundation</h6> */}
              </Link>
             </div>
             <div className="navbar__links" style={{marginLeft: "auto"}}>
              <Link style={{paddingLeft: "50px"}}>
                Home
              </Link>
              <Link style={{paddingLeft: "50px"}}>
                Hactober Projects
              </Link>
              <Link style={{paddingLeft: "50px"}}>
                Blog
              </Link>
              <Link style={{paddingLeft: "50px"}}>
                <Button>
                  GitHub
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
            <Link>
              Learning Paths
            </Link>
            <Link>
              Our Products
            </Link>
            <Link>
              Blog
            </Link>
            <Link>
              <Button>
                Join Us
              </Button>
            </Link>
          </Container>
        </Dialog>

      </div>
   );
}
 
export default HacktoberNav;
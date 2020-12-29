import React, { useState } from 'react';
import "./styles.css";
import { Container, Grid } from "@material-ui/core";

import PathDetail from './components/PathDetail';

const Paths = () => {
  const [ pathDetails ] = useState([
    {
      path_id: 1,
      path_title: "Beginner Friendly Path",
      path_content: "This path is specially designed for those who have little or zero experience in computer programming and open source. We will cover JavaScript, Python and Version Control (Git) form scratch and kick off by contributing to small yet interesting projects.",
      path_tags: ["JavaScript", "Python", "REST", "GIT", "COMMAND LINE"]
    },
    {
      path_id: 2,
      path_title: "Hands-on Path",
      path_content: "This path is a step further, we will use our programming skills and logic to contribute and build products that will solve a real-life problem. Contribute to our source code and help us build better products.",
      path_tags: ["React", "Django", "Design Systems", "OOPs", "Functional Programming"]
    }
  ])


  return ( 
    <section id="paths__section" className="paths__section">
      <Container>
        <h3 className="paths__title">Learning Paths</h3>
        <div className="paths__grid">
          <Grid container spacing={2}>
            {
              pathDetails && 
              (
                pathDetails.map(pathDetail => {
                  return(
                    <Grid key={pathDetail.path_id} item sm={6}>
                      <PathDetail title={pathDetail.path_title} content={pathDetail.path_content} tags={pathDetail.path_tags}  />
                    </Grid>
                  )
                })
              )
            }
          </Grid>
        </div>
      </Container>
    </section>
   );
}
 
export default Paths;
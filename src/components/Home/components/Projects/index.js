import React, { useState } from 'react';
import './styles.css';
import { Container, Grid } from '@material-ui/core';

import ProjectDetail from './components/ProjectDetail'

const Projects = () => {
  const [ projectDetails ] = useState(
    [
      {
        project_id: 1,
        project_title: "Dynamic",
        project_description: "lorem ispum dolor sit ammet"
      },
      {
        project_id: 2,
        project_title: "Easy Styles",
        project_description: "lorem ispum dolor sit ammet"
      },
      {
        project_id: 3,
        project_title: "Design Gallery",
        project_description: "lorem ispum dolor sit ammet"
      },
      {
        project_id: 4,
        project_title: "IOSF Blog",
        project_description: "lorem ipsum dolor sit ammet"
      }

    ]
  )


  return ( 
    <section className="projects__section">
      <Container>
        <h3 className="projects__title">Projects we're working on </h3>
        <div className="projects__grid">
          <Grid container spacing={2}>
            {
              projectDetails && 
              (
                projectDetails.map(projectDetail => {
                  return(
                    <Grid key={projectDetail.project_id} item sm={4}>
                      <ProjectDetail title={projectDetail.project_title} description={projectDetail.project_description}  />
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
 
export default Projects;
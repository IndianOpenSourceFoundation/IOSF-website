import React from 'react';
import "./styles.css";

import { Card, CardContent, CardActions, Button, Link } from '@material-ui/core'
import { GitHub } from '@material-ui/icons';

const ProjectDetail = ( { title, description, url} ) => {
  return (
    <Card className="projectDetail__card">
      <CardContent>
        <h4>{title}</h4>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <Link
          href={url}
        >
          <Button
            startIcon={<GitHub />}
          >
            VIEW PROJECT
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProjectDetail;
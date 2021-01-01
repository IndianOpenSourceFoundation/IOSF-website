import React from 'react';
import "./styles.css";

import { Card, CardContent, CardActions, Link, Button, Divider } from '@material-ui/core'

const PathDetail = ( { title, content, tags, url } ) => {
  return (
    <Card className="pathDetail__card">
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
        {
          tags && 
          (
            tags.map((tag, index) => <Button className="pathDetail__tag" key={index} variant="contained" size="small" disabled>{tag}</Button>)
          )
        }
      </CardContent>
      <Divider />
      <CardActions>
        <Link
          href={url}
        >
          <Button 
            variant="contained"
          >
            START PATH
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default PathDetail;
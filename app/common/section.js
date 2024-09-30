import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function CardWrapper({
  cms,
  title,
  description,
  Graph
}) {
  return (
    <React.Fragment>
      <Card variant='outlined'>
        <CardContent>
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              { cms }
            </Typography>
            <Typography variant='h5' component='div'>
              { title }
            </Typography>
            <Typography variant='body2'>
              { description }
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            { Graph && <Graph /> }
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default function Section({
  cms,
  title,
  description,
  Graph
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <CardWrapper cms={ cms } title={ title } description={ description } Graph={ Graph }/>
    </Box>
  );
}

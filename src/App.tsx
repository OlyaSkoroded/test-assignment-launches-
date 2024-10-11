import { Card, Stack, Typography } from '@mui/material';

import { LaunchesList } from './features';

const App = () => {
  return (
    <Stack direction='row'>
      <LaunchesList />
      <Card sx={{ minWidth: '30%', flexShrink: 1, height: '300px', position: 'sticky', top: 24 }}>
        <Stack alignContent='center' justifyContent='center' textAlign='center' sx={{ height: '100%', width: '100%' }}>
          <Typography variant='h5'>Energy consumption</Typography>
          <Typography variant='body1'>
            To calculate estimated energy consumption, please select at least one launch from the list.
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
};

export default App;

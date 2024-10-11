import { Box, Stack } from '@mui/material';
import { useState } from 'react';

import { EnergyConsumption, LaunchesList } from './features';
import { Launch } from './generated/graphql';

const App = () => {
  const [selectedLaunches, setSelectedLaunches] = useState<Launch[]>([]);

  const handleToggle = (newElem: Launch) => {
    const currentIndex = selectedLaunches.findIndex((elem) => elem.id === newElem.id);
    const newSelectedLaunches = [...selectedLaunches];

    if (currentIndex === -1) {
      newSelectedLaunches.push(newElem);
    } else {
      newSelectedLaunches.splice(currentIndex, 1);
    }

    setSelectedLaunches(newSelectedLaunches);
  };

  return (
    <Stack direction='row' maxWidth={1200} justifyContent='center' marginX='auto' gap={2}>
      <LaunchesList onToggle={handleToggle} selectedLaunches={selectedLaunches} />
      <Box sx={{ maxWidth: '40%', width: '100%', flexShrink: 1, height: '300px', position: 'sticky', top: 24 }}>
        <EnergyConsumption launches={selectedLaunches} onToggle={handleToggle} />
      </Box>
    </Stack>
  );
};

export default App;

import { Card, CardContent, List, ListItem, Skeleton, Stack } from '@mui/material';

import { PAGE_SIZE } from './useLaunchesList';

const emptyCards = new Array(PAGE_SIZE).fill(null).map((_, index) => `card-${index + 1}`);

export const LaunchesListSkeleton = () => {
  return (
    <List sx={{ width: '100%' }}>
      {emptyCards.map((id) => (
        <ListItem key={id}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Skeleton variant='text' />

              <Skeleton variant='text' />

              <>
                <Stack direction='row' alignItems='center' gap={1} mt={1}>
                  <Skeleton variant='text' width={100} />
                  <Skeleton variant='text' width={100} />
                </Stack>
                <Stack direction='row' alignItems='center' gap={1}>
                  <Skeleton variant='text' width={100} />
                  <Skeleton variant='text' width={100} />
                </Stack>
              </>

              <Skeleton variant='rounded' height={100} sx={{ mt: 3 }} />
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

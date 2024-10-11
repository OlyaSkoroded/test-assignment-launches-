import { Box, Button, Checkbox, Stack, Card, CardContent, List, ListItem, Typography } from '@mui/material';

import { LaunchesListSkeleton } from './LaunchesListSkeleton';
import { useLaunchesList } from './useLaunchesList';

import { Launch } from '@/generated/graphql';
import { isValidDate } from '@/helpers/isValidDate';

type Props = {
  selectedLaunches: Launch[];
  onToggle: (launch: Launch) => void;
};

export const LaunchesList: React.FC<Props> = ({ selectedLaunches, onToggle }) => {
  const { launches, loading, offset, onNextClick, onPrevClick } = useLaunchesList();

  if (loading) {
    return <LaunchesListSkeleton />;
  }

  return (
    <Box width='100%'>
      <List>
        {launches.map((launch) => {
          const { launch_date_utc, id, mission_name, details, links, rocket } = launch;
          const date = new Date(launch_date_utc);
          const dateString = isValidDate(date) ? date.toLocaleDateString() : '';
          const checked = selectedLaunches.find((elem) => elem.id === id);

          return (
            <ListItem key={id} sx={{ minWidth: 275, width: '100%' }}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Stack direction='row' alignItems='flex-start' justifyContent='space-between'>
                    {links && links.article_link ? (
                      <Typography
                        variant='h5'
                        component='a'
                        rel='noopener noreferrer'
                        href={links.article_link}
                        target='_blank'
                      >
                        {mission_name}
                      </Typography>
                    ) : (
                      <Typography variant='h5'>{mission_name}</Typography>
                    )}
                    <Checkbox edge='end' onChange={() => onToggle(launch)} checked={!!checked} />
                  </Stack>

                  {dateString && <Typography variant='body2'>{dateString}</Typography>}

                  {rocket && (
                    <>
                      <Stack direction='row' alignItems='center' gap={1} mt={1}>
                        <Typography color='textSecondary' variant='body2'>
                          Rocket type
                        </Typography>
                        <Typography variant='body2'>{rocket.rocket_type}</Typography>
                      </Stack>
                      <Stack direction='row' alignItems='center' gap={1}>
                        <Typography color='textSecondary' variant='body2'>
                          Rocket name
                        </Typography>
                        <Typography variant='body2'>{rocket.rocket_name}</Typography>
                      </Stack>
                    </>
                  )}

                  <Typography variant='body2' mt={3}>
                    {details ? details : 'No details provided'}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          );
        })}
      </List>
      <Stack direction='row' justifyContent='space-between' alignContent='center'>
        <Button type='button' onClick={onPrevClick} disabled={offset === 0 || loading}>
          Prev
        </Button>
        <Button type='button' onClick={onNextClick} disabled={loading}>
          Next
        </Button>
      </Stack>
    </Box>
  );
};

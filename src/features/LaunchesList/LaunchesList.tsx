import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { useGetLaunchesQuery } from '@/generated/graphql';

export const LaunchesList = () => {
  const { data } = useGetLaunchesQuery({
    variables: { limit: 10 },
  });

  const launches = data && data.launches ? data.launches : [];
  const filteredLaunches = launches.filter((launch) => launch !== null);

  return (
    <List>
      {filteredLaunches.map((launch) => {
        const { launch_date_utc, id, mission_name, details } = launch;
        return (
          <ListItem key={id}>
            <Card>
              <CardContent>
                <Typography>{launch_date_utc}</Typography>
                <Typography variant='h5' component='div'>
                  {mission_name}
                </Typography>
                <Typography variant='body2'>{details}</Typography>
              </CardContent>
            </Card>
          </ListItem>
        );
      })}
    </List>
  );
};

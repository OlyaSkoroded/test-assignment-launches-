import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';

import { useEnergyConsumption } from './useEnergyConsumption';

import { Button } from '@/components/Button';
import { Launch } from '@/generated/graphql';

type Props = {
  launches: Launch[];
  onToggle: (launch: Launch) => void;
};

export const EnergyConsumption: React.FC<Props> = ({ launches, onToggle }) => {
  const { calculatedEnergy, onCalculateClick } = useEnergyConsumption(launches);

  return (
    <Card>
      <CardContent>
        <Stack alignContent='center' justifyContent='center' textAlign='center' sx={{ height: '100%', width: '100%' }}>
          <Typography variant='h5' mb={3}>
            Energy consumption
          </Typography>
          {launches.length === 0 && (
            <Typography variant='body1'>
              To calculate estimated energy consumption, please select at least one launch from the list.
            </Typography>
          )}
          {launches.length > 0 && (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Selected launches {`(${launches.length})`}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: 120, overflowY: 'auto' }}>
                <List>
                  {launches.map((launch) => {
                    const { id, mission_name, links, rocket } = launch;
                    return (
                      <ListItem sx={{ borderBottom: 1 }} key={id}>
                        <Stack width='100%'>
                          <Stack direction='row' justifyContent='space-between' alignItems='flex-start'>
                            {links && links.article_link ? (
                              <Typography
                                component='a'
                                rel='noopener noreferrer'
                                href={links.article_link}
                                target='_blank'
                              >
                                {mission_name}
                              </Typography>
                            ) : (
                              <Typography>{mission_name}</Typography>
                            )}

                            <Button size='small' onClick={() => onToggle(launch)} variant='secondary'>
                              Remove
                            </Button>
                          </Stack>

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
                        </Stack>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          )}
          <Button onClick={onCalculateClick} disabled={launches.length === 0} sx={{ mt: 2, alignSelf: 'center' }}>
            Calculate
          </Button>
          {calculatedEnergy !== 0n && (
            <Typography variant='h6' mt={2}>
              Total energy required for {launches.length > 1 ? 'all selected launches' : 'the selected launch'}:{' '}
              {calculatedEnergy.toString()} Joules
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

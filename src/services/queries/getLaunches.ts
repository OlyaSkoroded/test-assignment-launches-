import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      launch_date_utc
      launch_success
      mission_name
      rocket {
        rocket_name
        rocket_type
        rocket {
          mass {
            kg
          }
          cost_per_launch
        }
      }
      details
      links {
        wikipedia
        article_link
      }
    }
  }
`;

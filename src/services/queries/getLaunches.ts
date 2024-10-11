import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      launch_date_utc
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

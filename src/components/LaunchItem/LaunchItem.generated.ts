import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
export type LaunchItemFragment = { __typename?: 'Launch', mission_name?: string | null, launch_date_utc?: any | null, links?: { __typename?: 'LaunchLinks', mission_patch_small?: string | null } | null };

export const LaunchItemFragmentDoc = gql`
    fragment LaunchItem on Launch {
  mission_name
  launch_date_utc
  links {
    mission_patch_small
  }
}
    `;
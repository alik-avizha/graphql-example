import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LaunchesPastQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type LaunchesPastQuery = { __typename?: 'Query', launchesPast?: Array<{ __typename?: 'Launch', mission_name?: string | null, launch_date_utc?: any | null, links?: { __typename?: 'LaunchLinks', mission_patch_small?: string | null } | null } | null> | null };


export const LaunchesPastDocument = gql`
    query LaunchesPast($limit: Int) {
  launchesPast(limit: $limit) {
    mission_name
    launch_date_utc
    links {
      mission_patch_small
    }
  }
}
    `;

/**
 * __useLaunchesPastQuery__
 *
 * To run a query within a React component, call `useLaunchesPastQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchesPastQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaunchesPastQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLaunchesPastQuery(baseOptions?: Apollo.QueryHookOptions<LaunchesPastQuery, LaunchesPastQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LaunchesPastQuery, LaunchesPastQueryVariables>(LaunchesPastDocument, options);
      }
export function useLaunchesPastLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LaunchesPastQuery, LaunchesPastQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LaunchesPastQuery, LaunchesPastQueryVariables>(LaunchesPastDocument, options);
        }
export type LaunchesPastQueryHookResult = ReturnType<typeof useLaunchesPastQuery>;
export type LaunchesPastLazyQueryHookResult = ReturnType<typeof useLaunchesPastLazyQuery>;
export type LaunchesPastQueryResult = Apollo.QueryResult<LaunchesPastQuery, LaunchesPastQueryVariables>;
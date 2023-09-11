import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRoadsterInfoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRoadsterInfoQuery = { __typename?: 'Query', roadster?: { __typename?: 'Roadster', earth_distance_km?: number | null, name?: string | null, mars_distance_km?: number | null, speed_kph?: number | null } | null };


export const GetRoadsterInfoDocument = gql`
    query getRoadsterInfo {
  roadster {
    earth_distance_km
    name
    mars_distance_km
    speed_kph
  }
}
    `;

/**
 * __useGetRoadsterInfoQuery__
 *
 * To run a query within a React component, call `useGetRoadsterInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoadsterInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoadsterInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoadsterInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetRoadsterInfoQuery, GetRoadsterInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoadsterInfoQuery, GetRoadsterInfoQueryVariables>(GetRoadsterInfoDocument, options);
      }
export function useGetRoadsterInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoadsterInfoQuery, GetRoadsterInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoadsterInfoQuery, GetRoadsterInfoQueryVariables>(GetRoadsterInfoDocument, options);
        }
export type GetRoadsterInfoQueryHookResult = ReturnType<typeof useGetRoadsterInfoQuery>;
export type GetRoadsterInfoLazyQueryHookResult = ReturnType<typeof useGetRoadsterInfoLazyQuery>;
export type GetRoadsterInfoQueryResult = Apollo.QueryResult<GetRoadsterInfoQuery, GetRoadsterInfoQueryVariables>;
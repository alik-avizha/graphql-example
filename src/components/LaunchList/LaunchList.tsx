import React from 'react'
import './LaunchList.scss'
import LaunchItem from '../LaunchItem/LaunchItem'
import { useLaunchesPastQuery } from './LaunchList.generated'

export const LaunchList: React.FC = () => {
  const { data, loading, error } = useLaunchesPastQuery({
    variables: {
      limit: 4,
    },
  })

  return (
    <section className="launches">
      <h2>Past launches</h2>

      {error && <p className="error">{error.message}</p>}

      {loading ? (
        <p className="caption">Loading...</p>
      ) : (
        data?.launchesPast && (
          <div className="launches__list">
            {data.launchesPast.map(
              (launch, index) =>
                launch && <LaunchItem launch={launch} key={index} />
            )}
          </div>
        )
      )}
    </section>
  )
}


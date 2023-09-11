import React, { useEffect, useState } from "react";
import { useGetRoadsterInfoLazyQuery } from "./Roadster.generated";
import { NetworkStatus } from "@apollo/client/core/networkStatus";
import './Roadster.scss';

export const Roadstaer = () => {
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [getData, response] = useGetRoadsterInfoLazyQuery({
    notifyOnNetworkStatusChange: true,
  });

  const { data, networkStatus, error, refetch, startPolling, stopPolling } =
    response;
  const loading = isLoading(networkStatus);

  useEffect(() => {
    autoUpdate ? startPolling(10000) : stopPolling();
  }, [autoUpdate, startPolling, stopPolling]);

  return (
    <section className="roadster">
      <h2>Roadster info</h2>

      <div className="roadster__actions">
        <button
          className="roadster__button"
          disabled={loading}
          onClick={() => (data ? refetch() : getData())}
        >
          {loading ? "Loading..." : "Load latest"}
        </button>

        <label className="roadster__label">
          <input
            type="checkbox"
            checked={autoUpdate}
            onChange={(event) => setAutoUpdate(event.currentTarget.checked)}
            className="roadster__input"
          />{" "}
          Auto-update
        </label>
      </div>

      {error && <p className="error">{error.message}</p>}

      {data?.roadster && (
        <div className="roadster__content">
          <div className="roadster__row">
            <span className="roadster__key">Name:</span>
            <span className="roadster__value">{data.roadster.name}</span>
          </div>

          <div className="roadster__row">
            <span className="roadster__key">Speed:</span>
            <span className="roadster__value">
              {roundNumber(data.roadster.speed_kph)} km/h
            </span>
          </div>

          <div className="roadster__row">
            <span className="roadster__key">Distance from Earth:</span>
            <span className="roadster__value">
              {roundNumber(data.roadster.earth_distance_km)} km
            </span>
          </div>

          <div className="roadster__row">
            <span className="roadster__key">Distance from Mars:</span>
            <span className="roadster__value">
              {roundNumber(data.roadster.mars_distance_km)} km
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

function roundNumber(number: number | null | undefined) {
  return number ? Math.round(number) : 0;
}

function isLoading(status: NetworkStatus) {
  switch (status) {
    case NetworkStatus.loading:
    case NetworkStatus.setVariables:
    case NetworkStatus.fetchMore:
    case NetworkStatus.refetch:
    case NetworkStatus.poll:
      return true;
  }

  return false;
}

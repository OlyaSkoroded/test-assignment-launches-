import { useState } from 'react';

import { useGetLaunchesQuery } from '@/generated/graphql';

export const PAGE_SIZE = 10;

export const useLaunchesList = () => {
  const [offset, setOffset] = useState(0);

  const { data, loading } = useGetLaunchesQuery({
    variables: { offset: offset, limit: PAGE_SIZE },
  });

  const launches = data && data.launches ? data.launches : [];
  const filteredLaunches = launches.filter((launch) => launch !== null);

  const handleNextButtonClick = () => {
    setOffset((prevOffset) => prevOffset + PAGE_SIZE);
  };

  const handlePrevButtonClick = () => {
    if (offset === 0) return;

    setOffset((prevOffset) => prevOffset - PAGE_SIZE);
  };

  return {
    launches: filteredLaunches,
    loading,
    offset,
    onNextClick: handleNextButtonClick,
    onPrevClick: handlePrevButtonClick,
  };
};

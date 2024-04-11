import { useState, useEffect } from 'react';

const RefreshComponent = ({ dependency }: { dependency: any }) => {
  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    // Update the key whenever the dependency changes
    setRefreshKey((prevKey) => prevKey + 1);
  }, [dependency]); // Re-run effect whenever the dependency changes

  // Use the refreshKey as a key prop to force component remount
  return <div key={refreshKey}></div>;
};

export default RefreshComponent;

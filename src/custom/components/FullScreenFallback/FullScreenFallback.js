import React, { useState, useEffect } from 'react';
import Loader from '../Loader';

function FullScreenFallback({ timeout = 1000 }) {
  const [displayLoader, setDisplayLoader] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDisplayLoader(true), timeout);
    return () => clearTimeout(id);
  }, [timeout]);

  return displayLoader ? <Loader variant='fullscreen' /> : null;
}

export default FullScreenFallback;

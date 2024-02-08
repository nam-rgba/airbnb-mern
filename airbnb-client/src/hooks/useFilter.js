import { places } from '../utils';
import { useCallback, useState } from 'react';

export const useFilter = () => {
  const [placeFiltered, setPlaceFiltered] = useState(places);

  const handleType = useCallback(
    async (value) => {
      console.log('change type to ' + value);
      await setPlaceFiltered(places.filter((place) => place.type === value));
    },
    [setPlaceFiltered]
  );

  const handleCountry = useCallback(
    (value) => {
      setPlaceFiltered(places.filter((place) => place.country === value));
    },
    [setPlaceFiltered]
  );

  const handlePrice = useCallback(
    (value) => {
      setPlaceFiltered(
        places.filter(
          (place) => place.price <= value.max && place.price >= value.min
        )
      );
    },
    [setPlaceFiltered]
  );

  return { placeFiltered, handleType, handleCountry, handlePrice };
};

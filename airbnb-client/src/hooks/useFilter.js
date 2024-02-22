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

  const handleSearch = useCallback((value) => {
    const placesInCoutry = places.filter(
      (place) => place.country === value.country
    );
    const placesInPrice = placesInCoutry.filter(
      (place) =>
        place.price <= value.price.max && place.price >= value.price.min
    );
    // const placesInGuest = placesInPrice.filter(
    //   (place) => place.guest <= value.maxGuest
    // );
    // let placesInPetAble = placesInGuest;
    // if (value.isPetAble) {
    //   placesInPetAble = placesInGuest.filter((place) => place.isPetAble);
    // }
    setPlaceFiltered(placesInPrice);
  }, []);

  return { placeFiltered, handleType, handleSearch };
};

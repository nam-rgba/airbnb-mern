import { useCallback, useState } from 'react';
// import axios from 'axios';
import { places } from '../utils/index.js';

export const useFilter = () => {
  // const [places, setPlaces] = useState([]);
  const [placeFiltered, setPlaceFiltered] = useState(places);
  // useEffect(() => {
  //   axios
  //     .get('/places', { withCredentials: true })
  //     .then((res) => {
  //       setPlaces(res.data);
  //       setPlaceFiltered(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleType = useCallback(
    async (value) => {
      if (value == 'trending') {
        setPlaceFiltered(places);
        return;
      }
      const placesInType = places.filter((place) => place.type == value);
      setPlaceFiltered(placesInType);
    },
    [setPlaceFiltered]
  );

  const handleSearch = useCallback((value) => {
    const placesInCoutry = places.filter(
      (place) => place.country.toLowerCase() === value.country
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

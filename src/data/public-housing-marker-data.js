import publicHousingMarkerData from '../js/publicHousingMarkerData';
import publicHousingDataKeyMap from '../js/publicHousingDataKeyMap';
import publicHousingData from './public-housing';

export const markerData = publicHousingMarkerData(publicHousingData, publicHousingDataKeyMap);

export const totalRentalQuantity = markerData.reduce((total, estate) =>  {
  return total + estate.rentalQuantity;
}, 0);
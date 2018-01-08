import publicHousingMarkerData from '../js/publicHousingMarkerData';
import publicHousingDataKeyMap from '../js/publicHousingDataKeyMap';
import publicHousingData from './public-housing';

var markerData = publicHousingMarkerData(publicHousingData, publicHousingDataKeyMap);

export default markerData;
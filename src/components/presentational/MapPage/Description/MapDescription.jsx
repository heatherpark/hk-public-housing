import React from 'react';
import './MapDescription.css';

export default function MapDescription() {
  return (
    // TODO: Provide sources
    <div className="map-description">
      <p>
      Hong Kong's housing market has ranked first as the most expensive in the world
      seven years running. The <em>Demographia International Housing Affordability</em> survey
      uses an equation called the "Median Multiple", which is an urban market's median
      house price divided by its median household income, to rate middle-income housing
      affordability. When considering major housing markets (those with over 1,000,000 population),
      Hong Kong's Median Multiple is 18.1, while the country that ranks second, New Zealand,
      has a Median Multiple of 10.0.
    </p>
    <p>
      Hong Kong's government provides lower-income residents with subsidized, affordable housing.
      Almost half of the territory's population of over 7 million lives in some form of
      public housing. This map depicts the locations of these housing estates.  Each marker is 
      relative in size to the number of rental units offered by a particular estate compared to
      the total number of units offered by public housing as a whole. Hover over a marker to see 
      more details about an estate.
    </p>
    </div>
  );
}
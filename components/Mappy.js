import Map, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';

function Mappy({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState({});

    // Transform search results object in to the correct object with longitude and latitude

    const coordinates = searchResults.map((result) => ({
      longitude:result.long,
      latitude : result.lat,
    }));

    // The latitude and longitude of the center of locations coordinates

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
  });

  return (
    <Map
       height="100%"
       width="100%"
       mapStyle="mapbox://styles/raspypi6/cltzkybtu000001p67jg51giq"
       mapboxAccessToken={process.env.mapbox_key}
       onMove={(evt) => setViewport(evt.viewState)}
       {...viewport}
    >

      {searchResults.map((result) => (
        <div key={result.long+result.lat}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
          >
            <p
            role='img'
            onClick={() => setSelectedLocation(result)}
            className='cursor-pointer text-2xl animate-bounce'
            aria-label='push-pin'
            >📌</p>
          </Marker>

        {/* popup that should show when marker is selected */}
        {selectedLocation.long === result.long ? (
          <Popup
          closeOnClick={true}
          onClose={() => setSelectedLocation({})}
          latitude={result.lat}
          longitude={result.long }
          >
            {result.title}
          </Popup>
        ) : (
          false
          )}
        </div>
      ))}
    </Map> 
  )
}

export default Mappy
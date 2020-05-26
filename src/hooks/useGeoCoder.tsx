import React from 'react'
import {OpenStreetMapProvider} from 'leaflet-geosearch'


const useGeoCoder = () => {
  const provider = new OpenStreetMapProvider()

  const findLocation = async (queryString: string) => {
    const results = await provider.search({ query: queryString })
    .catch((error) => console.log('Error occurs!', error))

    if(results) {
      return results
    }
  }

  return {findLocation}
}

export default useGeoCoder

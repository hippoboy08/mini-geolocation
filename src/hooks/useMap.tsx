import React from 'react'

import L, { LatLng, Map } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'

let map: L.Map
let marker: L.Marker
/** Add a marker icon to the map */
const createMarker = (position: LatLng) => {
  const defaultIcon = L.icon({
    iconUrl: markerIcon,
  })
  return L.marker(position, { icon: defaultIcon })
  // .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
}

const useMap = (containerId: string) => {
  let initialPoint = new LatLng(51.505, -0.09)
  let container = L.DomUtil.get(containerId)

  const initializeMap = () => {
    // if (container != null) {
    //   L.DomUtil.empty(container)
    // }
    if (map == null) {
      map = L.map(containerId).setView(initialPoint, 13)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      marker = createMarker(initialPoint)
      marker.addTo(map)
    }
  }

  const renderMapContainer = () => {
    return <div id={containerId} style={{ height: '100%', width: '100%' }}></div>
  }

  /** Reset marker's position & move the a geolocation with flying effect */
  const setViewTo = (point: { lat: number; lng: number }) => {
    const position = new L.LatLng(point.lat, point.lng)
    marker.setLatLng(position)
    // Stops all current animations and restarts moving
    map.stop()
    map.flyTo(position, 15)
  }

  React.useEffect(() => {
    initializeMap()
    // console.log(map)
    return () => {}
  }, [])

  return { renderMapContainer, setViewTo, initializeMap }
}

export default useMap

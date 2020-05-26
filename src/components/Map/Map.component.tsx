import React from 'react'

import useMap from '../../hooks/useMap'

const MiniMap: React.FC = ({ children }) => {
  const map = useMap('mapDiv')
  return <>{map.renderMapContainer()}</>
}

export default MiniMap

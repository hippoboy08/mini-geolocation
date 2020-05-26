import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Icon,
  Divider,
  Slide,
  Avatar,
} from '@material-ui/core'
import { useStyles } from './SearchResult.style'
import useMap from '../../hooks/useMap'

const ResultItem: React.FC<{
  result: any
  onClick?: Function
  timeout: number
}> = ({ result, onClick, timeout }) => {
  const classes = useStyles()
  const map = useMap('mapDiv')

  const handleItemClick = (point: { lat: number; lng: number }) => {
    map.setViewTo(point)
  }
  return (
    <Slide
      direction='right'
      timeout={{ enter: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit
    >
      <ListItem button onClick={() => handleItemClick({lat: result.y, lng: result.x})}>
        <ListItemIcon>
          {/* <Icon>star</Icon> */}
          <Avatar className={classes.icon} alt="Remy Sharp" src={result.raw.icon} />
        </ListItemIcon>
        <ListItemText primary={result.label} />
      </ListItem>
    </Slide>
  )
}

interface Props {
  results: any,
  handleClick?: Function,
}
const SearchResult: React.FC<Props> = ({ results, handleClick }) => {
  const classes = useStyles()
  
  const renderResults = () => {
    return results.map((result: any, index: number) => {
      // console.log(result)
      return (
        <ResultItem
          key={result.raw.place_id}
          timeout={500 + 100 * index}
          result={result}
        />
      )
    })
  }

  return (
    <>
      <div>Places</div>
      <Divider />
      <List component='nav' className={classes.root} aria-label='contacts'>
        {renderResults()}
      </List>
    </>
  )
}

export default SearchResult

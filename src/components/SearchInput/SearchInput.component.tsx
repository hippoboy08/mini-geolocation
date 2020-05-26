import React from 'react'
import { TextField, InputAdornment, Button, Box, Icon } from '@material-ui/core'
import { useStyles } from './SearchInput.style'

interface Props {
  onSubmit: (input: string ) => void
}
const SearchInput: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = React.useState('bangkok')
  const classes = useStyles()

  const search = async () => {
    onSubmit(input)
  }

  return (
    <>
      <Box className={classes.root}>
        <TextField
          id='standard-search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label='Search Input'
          placeholder='Enter name or address to search...'
          type='search'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
        <Button
          className={classes.button}
          variant='contained'
          color='secondary'
          disabled={!input}
          onClick={() => search()}
        >
          Show on map
        </Button>
      </Box>
    </>
  )
}

export default SearchInput

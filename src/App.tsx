import React from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import Map from './components/Map'
import { ThemeProvider, createMuiTheme, Box, Theme, makeStyles } from '@material-ui/core'
import SearchResult from './components/SearchResult'
import useGeoCoder from './hooks/useGeoCoder'

const theme = createMuiTheme({
  palette: { type: 'dark' },
})

function App() {
  const geoCoder = useGeoCoder()
  const [results, setResults] = React.useState<any>([])

  const handleSubmit = async (input: string) => {
    const locations = await geoCoder.findLocation(input)
    if (locations) {
      setResults(locations)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <ThemeProvider theme={theme}>
          <Box
            display='flex'
            alignItems='center'
            height={600}
            maxHeight={600}
            overflow='hidden'
          >
            <Box
              marginRight={2}
              overflow='hidden'
              height='100%'
              maxHeight='inherit'
              alignSelf='flex-start'
            >
              <SearchInput onSubmit={handleSubmit} />
              <SearchResult results={results} />
            </Box>
            <Box height={600} width={800}>
              <Map />
            </Box>
          </Box>
        </ThemeProvider>
      </header>
    </div>
  )
}

export default App

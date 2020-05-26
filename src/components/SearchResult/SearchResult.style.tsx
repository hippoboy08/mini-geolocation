import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(
  (theme) => {
    return {
      root: {
        width: 360,
        maxWidth: 360,
        maxHeight: '-webkit-fill-available',
        backgroundColor: '#282c34',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
      icon: {
        backgroundColor: '#c51162',
        color: 'white',
      },
    }
  },
  { name: 'SearchResult' }
)

import { createUseStyles } from 'react-jss';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { osTheme } from './theme';
import { bimsum } from './lib/bimsum';

const SPACING_UNIT = 10;

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
  },
  row: {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    
  },
  app: {
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    height: '100%',
    maxWidth: 512,
  },
});



function App() {
  const c = useStyles();
  
  const buildWord=() => {
    console.log('buildWord');
  }

  return <div className={c.app}>
    <ThemeProvider theme={osTheme}>
      
    <p>Lets generate some text!</p>
    <textarea rows={20} cols={72} />
    <div className={c.row}>
      <Button variant='outlined' onClick={() => bimsum('word')}>word</Button>
      <Button variant="outlined" onClick={() => bimsum('sentence')}>sentence</Button>
      <Button variant="outlined" onClick={() => bimsum('paragraph')}>paragraph</Button>
      <Button variant="outlined" onClick={() => bimsum('story')}>story</Button>
    </div>

    </ThemeProvider>
  </div>;
}

export default App;

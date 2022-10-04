import { bimsum } from './lib/bimsum';
import { createUseStyles } from 'react-jss';
import { osTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Button from '@mui/material/Button';

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
  const [demo, setDemo] = useState<string>('');
  const c = useStyles();


  return <div className={c.app}>
    <ThemeProvider theme={osTheme}>
      <h1>Click a button below to generate some BIM text!</h1>
      <textarea readOnly value={demo} rows={20} cols={72} />
      <div className={c.row}>
        <Button variant='outlined' onClick={async () => setDemo(await bimsum('term'))}>construction term</Button>
        <Button variant="outlined" onClick={async () => setDemo(await bimsum('sentence'))}>sentence</Button>
        <Button variant="outlined" onClick={async () => setDemo(await bimsum('paragraph'))}>paragraph</Button>
        <Button variant="outlined" onClick={async () => setDemo(await bimsum('story'))}>story</Button>
      </div>
    </ThemeProvider>
  </div>;
}

export default App;

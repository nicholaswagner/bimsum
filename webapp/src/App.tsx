import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    }
  },
  app: {
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    height: '100%',
  },
  
});

function App() {
  const c = useStyles();
 
  return (
    <div className={c.app}>
      <p>Vite is alivel and kicking!</p>
    </div>
  )
}

export default App

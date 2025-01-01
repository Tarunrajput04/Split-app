// theme
import ThemeProvider from './theme';
import Router from './routes'
// import BackendStatusPopup from './components/BackendStatusPopup';


function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;

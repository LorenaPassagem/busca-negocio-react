import Logo from './components/Logo';
import IconSearch from './components/Search';
import Header from './components/Header';
import ServiceFilter from './components/ServiceFilter'
import Button from './components/Button';
import CardService from './components/CardService';

function App() {
  return (
  <>
    <Header >
      <Logo />
      <IconSearch />
    </Header>
    
    <ServiceFilter />
    <CardService />
    <Button /> 
  </>
  );
}

export default App;

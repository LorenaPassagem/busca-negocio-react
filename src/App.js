import Logo from './components/Logo';
import IconSearch from './components/Search';
import Header from './components/Header';
import ServiceFilter from './components/ServiceFilter'
import Button from './components/Button';

function App() {
  return (
  <>
    <Header >
      <Logo />
      <IconSearch />
    </Header>
    
    <ServiceFilter />
    <Button> Insira seu negocio</Button>
  </>
  );
}

export default App;

import Logo from './components/Logo';
import IconSearch from './components/Search';
import Header from './components/Header';
import ServiceFilter from './components/ServiceFilter'
import Reset from './styles/generic/reset';


function App() {
  return (
  <>
    <Header >
      <Logo />
      <IconSearch />
    </Header>

    <ServiceFilter />
	
	<Reset />
  </>
  );
}

export default App;

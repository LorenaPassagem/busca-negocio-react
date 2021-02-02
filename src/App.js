import Logo from './components/Logo';
import IconSearch from './components/Search';
import Header from './components/Header';
import ServiceFilter from './components/ServiceFilter'
import Reset from './styles/generic/reset';
import Base from './elements/base';


function App() {
  return (
  <>
    <Header >
      <Logo />
      <IconSearch />
    </Header>

    <ServiceFilter />
	
	<Reset />
  <Base />
  </>
  );
}

export default App;

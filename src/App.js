import Logo from './components/Logo';
import IconSearch from './components/Search';
import Header from './components/Header';
import ServiceFilter from './components/ServiceFilter'

function App() {
  return (
  <>
    <Header >
      <Logo />
      <IconSearch />
    </Header>

    <ServiceFilter />
  </>
  );
}

export default App;

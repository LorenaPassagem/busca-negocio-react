import Logo from './components/Logo';
import Filter from './components/Filter';
import IconSearch from './components/Search';
import Header from './components/Header';

function App() {
  return (
  <>
    <Header >
      <Logo />
      <IconSearch />
    </Header> 
    <Filter/>
  </>
  );
}

export default App;

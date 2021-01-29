import Logo from './components/Logo';
import IconSearch from './components/Search';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import { Filter, Label } from './components/Filter';
import ServiceFilter from './components/ServiceFilter'

const GlobalStyled = createGlobalStyle`
  
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
  background-color: #395164;
}
`;

function App() {
  return (
  <>
    <Header >
      <Logo />
      <IconSearch />
    </Header>
    
	<ServiceFilter>
    	<Filter/>
		<Label> Guia de Serviço</Label>
	</ServiceFilter>

    <GlobalStyled />
  </>
  );
}

export default App;

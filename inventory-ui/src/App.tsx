import { Header } from './components/Header/Header';
import { Navigator } from './components/Navigator/Navigator';
import { Product } from './components/Product/Product';

function App() {
  return (
    <>
      <Header />
      <Navigator title="Add Product" />
      <Product />
    </>
  );
}

export default App;

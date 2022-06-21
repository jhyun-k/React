
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductTab from './components/ProductTab/ProductTab';
import Tab from './components/Tab/Tab';



function App() {
  const title = 'React Site'
  return (
    <div className="App">
      <Header title={title} />
      <Main />
      <ProductTab />
      <Tab />
      <Footer title={title} />
    </div>
  );
}

export default App;

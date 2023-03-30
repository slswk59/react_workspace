//v6
//npm install react-router-dom --save

import { Routes, Route } from 'react-router-dom';
import Dashboard from './components2/Dashboard';
import Detail from './components2/Detatil';
import Home from './components2/Home';
import About from './components2/About';
import Layout from './components2/Layout';
import NoMatch from './components2/NoMatch';
import Product from './components2/Product';

const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='product' element={<Product />} />
          <Route path='product/:productId' element={<Detail />} />
          {/* <Route path='product/:productId'/:data/:--/:-- element={<Detail />} /> 여러개일때*/}
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

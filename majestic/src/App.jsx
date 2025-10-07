import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Restaurant from './pages/Restaurant';
import Layout from './components/layout/Layout';
import Carte from './pages/Carte';
import Salade from './pages/Salade';
import Woks from './pages/Woks';
import Assiettes from './pages/Assiettes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {/* Route sans Layout */}
      <Route path="/" element={<Home />} />
      
      {/* Routes avec Layout */}
      <Route path="/restaurant" element={
        <Layout>
          <Restaurant />
        </Layout>
      } />
      
      {/* Pour toutes les autres routes */}
      <Route path="la-carte" element={
        <Layout>
          <Carte />
        </Layout>
      } />
         <Route path="Salade" element={
        <Layout>
          <Salade />
        </Layout>
      } />
      <Route path="Woks" element={
        <Layout>
          <Woks />
        </Layout>
      } />

      <Route path="Assiettes" element={
        <Layout>
          <Assiettes />
        </Layout>
      } />
    </Routes>
  );
}

export default App;
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import Plans from './components/Plan/Plans';
import Sidebar from './components/Sidebar';
import './index.css'

export default function App() {
 

  return (
    <div className="App">
      <section className="flex">
        <Layout>
          <div>
            <Plans/>
          </div>
        </Layout>
      </section>
    </div>
  );
}

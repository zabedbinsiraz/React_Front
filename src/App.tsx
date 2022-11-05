import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AgentList from './components/AgentList/AgentList';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardAgent from './components/Dashboard/DashboardAgent';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Listing from './components/Listing/Listing';
import SingleListing from './components/SingleListing/SingleListing';
import ListProperty from './components/ListProperty/ListProperty';
import MyInfo from './components/Myinfo/MyInfo';
import Myprofile from './components/Myprofile/Myprofile';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import ScrollRestore from './components/ScrollRestore';

function App() {

  return (
    <>
      <Navbar />
      <ScrollRestore>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listproperty' element={<ListProperty />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboardagent' element={<DashboardAgent />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/agentlist' element={<AgentList />} />
          <Route path='/myinfo' element={<MyInfo />} />
          <Route path='/singleListing' element={<SingleListing />} />
        </Routes>
      </ScrollRestore>
      <Footer />
    </>
  );
}

export default App;

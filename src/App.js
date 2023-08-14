import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Allmeetup from './components/pages/AllMeetup';
import NewMeetups from './components/pages/NewMeetup';
import Favorits from './components/pages/Favorits';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <React.Fragment>
          <Route  path='/' element={<Allmeetup/>}></Route>
          <Route  path='/new-meetup' element={<NewMeetups/>}></Route>
          <Route  path='/favourite' element={<Favorits/>}></Route>
        </React.Fragment>
      </Routes>
    </Layout>
  );
}

export default App;

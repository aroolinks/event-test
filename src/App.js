import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route exact path="/" element={<AllMeetups />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/New-Meetup" element={<NewMeetup />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;

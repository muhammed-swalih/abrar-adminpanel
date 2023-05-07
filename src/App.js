import React, { useState } from "react";
import HoneyMoon from "./components/HoneyMoon";
import {Routes , Route} from 'react-router-dom'
import Home from "./components/Home";

import Ads from "./components/Ads";
import DltHoneymoon from "./components/DltHoneymoon";

import DltAds from "./components/DltAds";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/honeymoon" element={<HoneyMoon/>} />
        <Route path="/ads" element={<Ads/>} />
        <Route path="/dlthoneymoon" element={<DltHoneymoon/>} />
        <Route path="/dltads" element={<DltAds/>} />
      </Routes>
    </div>
  );
}

export default App;

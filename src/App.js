import './App.css';
import Header from './components/Header'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import About from './components/About'
import Home from './components/Home'
import Specialization from './components/Specialization'
import Starfall from './components/Starfall'
import ERA from './components/ERA'
import EgarsRage from './components/EgarsRage';
import SilenceTheSun from './components/SilenceTheSun';
import Akuma from './components/Akuma';
import ABarkInTheDark from './components/ABarkInTheDark';
import Runmir from './components/Runmir';
import GhostCruiser from './components/GhostCruiser'
import Editor from './components/Editor';
import AnimationStateEditor from './components/AnimationStateEditor';
import ReflectionSystem from './components/ReflectionSystem';
import VisiblityLighting from './components/VisibilityLighting';
import NotFoundImage from './resources/404.gif';
import { MakeLink } from './components/Utils';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="specialization" element={<Specialization />} />
          <Route path="starfall" element={<Starfall />} />
          <Route path="era" element={<ERA />} />
          <Route path="egarsrage" element={<EgarsRage />} />
          <Route path="silence-the-sun" element={<SilenceTheSun />} />
          <Route path="akuma" element={<Akuma />} />
          <Route path="a-bark-in-the-dark" element={<ABarkInTheDark />} />
          <Route path="runmir" element={<Runmir />} />
          <Route path="ghost-cruiser" element={<GhostCruiser />} />
          <Route path="editor" element={<Editor />} />
          <Route path="animation-state-editor" element={<AnimationStateEditor />} />
          <Route path="reflection-system" element={<ReflectionSystem />} />
          <Route path="visibility-lighting" element={<VisiblityLighting />} />

          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2 className='text-3xl pt-16 pb-8'>Welp, could not find it!</h2>
      <p>
        <MakeLink to="/">Return to the homepage</MakeLink>
      </p>
      <img className='mx-auto' src={NotFoundImage} />
    </div>
  );
}

export default App;

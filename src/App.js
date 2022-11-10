import './App.css';
import React from 'react';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

export function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;

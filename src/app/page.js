/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Second from './Components/SecondSection';
import First from './Components/FirstSection';

export default function page() {
  return (
    <>
      <Header />
        <First />
        <Second />
      <Footer />
    </>
  )
}

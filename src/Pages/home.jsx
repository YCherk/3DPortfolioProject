import { useState } from 'react'
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar';

export default function Example() {

  return (
    <div>
      <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/sLoOzXfUA7W9wf6x/scene.splinecode" />
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
    </div>
  )
}

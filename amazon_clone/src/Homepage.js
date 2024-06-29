import React from 'react';
import NavigationBar from './components/NavigationBar';
import FeaturedProducts from './components/FeaturedProducts';
import './styles/Homepage.css';
import Categories from './components/Categories';

/**
 * Renders the Homepage component.
 * 
 * @returns {JSX.Element} The Homepage component 
 */
export default function Homepage() {
  return (
    <div className='homepage'>Homepage
      <NavigationBar/>
      <header>
        <h1>Amazon</h1>
      </header>
      <main>
        <FeaturedProducts/>
        <Categories/>
      </main>
    </div>
  )
}

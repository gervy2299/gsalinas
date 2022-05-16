import React from 'react';

import './App.css';

import Header from './components/header/header.js';
import Container from './components/container/container.js';

function App () {
    const developer = '<gsalinas/>';
    return (
      <React.Fragment>
	  <Header nombre={developer}/> 
	  <Container/>
	  <div className="relative bg-white overflow-hidden">
	    <div className="max-w-7xl mx-auto">
	      <div className="relative pt-6 sm:px-6 lg:px-8">
		<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" arial-label="Global">
		  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
		    <a href="#" className="font-mediun text-gray-500 hover:text-gray-900">Product</a>
		    <a href="#" className="font-mediun text-gray-500 hover:text-gray-900">Features</a>
		    <a href="#" className="font-mediun text-gray-500 hover:text-gray-900">Marketplace</a>
		    <a href="#" className="font-mediun text-gray-500 hover:text-gray-900">Company</a>
		    <a href="#" className="font-mediun text-indigo-600 hover:text-indigo-500">Log In</a>
		  </div>
		</nav>
	      </div>
	    </div>
	  </div>
      </React.Fragment>
    )
  }

export default App;

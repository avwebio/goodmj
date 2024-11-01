import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileSignature } from '@awesome.me/kit-bc1b6271da/icons/classic/solid'
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 my-2 mt-10 mb-4 px-4">
      <header className="bg-white flex justify-between items-center py-4 px-6 rounded-lg shadow">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center justify-center p-2 text-xl custom-text-darkblue">
            <img src={logo} alt="Logo Icon" className="w-8 mr-2" /><span className="font-bold">Good</span>Mj
          </a>
          <div className="lg:flex pl-6 border-l-2 text-sm flex items-center gap-2 hidden">
            <a href="#/" className="underline hover:no-underline flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faUser} className="w-3" />Login</a> / <a href="#/" className="underline hover:no-underline flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faFileSignature} className="w-4" />Signup</a>
          </div>
        </div>
        <nav className="lg:flex gap-6 text-md font-semibold custom-text-darkblue hidden">
          <a className="p-2" href="/services">Services</a>
          <a className="p-2" href="/plans">Plans</a>
          <a className="p-2" href="/menu">Menu</a>
          <a className="p-2" href="/strainfinder">Strainfinder&trade;</a>
          <a className="p-2" href="/help">Help</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
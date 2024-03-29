"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  // console.log("it is client side ")
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      {/* First list of links */}
      <div className="flex justify-center pt-3 lg:mx-10">
        <nav className="flex justify-between items-center text-center m-2 w-full">
          <section className="mr-auto pl-6 text-yellow-200 text-2xl font-bold">CareerLinker</section>
          <section className="md:block mx-3"><Link href="/">Home</Link></section>
          <section className="hidden md:block mx-3"> <Link href="/jobs">Latest job</Link></section>
          <section className="hidden md:block mx-3"> <Link href="/admitcard">Admit card</Link></section>
          <section className="hidden md:block mx-3"> <Link href="/results">Results</Link></section>
          <section className="hidden md:block mx-3"> <Link href="/about">About us</Link></section>
          {!isLoggedIn ? <section className="md:ml-auto pr-2"><Link href="/admin">sign up</Link></section> : <section className="md:ml-auto pr-2  mx-2"><Link href="/admin">login</Link></section>}
          
          
        </nav>
      </div>

      {/* Second list of links (shown only on small screens) */}
      <div className=" md:hidden lg:hidden pb-2 ">
        <nav className="flex justify-center items-center text-center m-2  mx-5">
          {/* <section className="mx-1"><Link href="/">Home</Link></section> */}
          <section className="mx-1"> <Link href="/jobs">Latest job</Link></section>
          <section className="mx-1"> <Link href="/jobs">Admit Card</Link></section>
          <section className="mx-1"> <Link href="/results">Results</Link></section>
          <section className="mx-1 "> <Link href="/about">About</Link></section>
        </nav>
      </div>
      </div>
  );
};

export default Navbar;



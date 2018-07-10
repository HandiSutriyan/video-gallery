import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import {Navbar} from 'react';

const Header = (props)=>{
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{marginBottom:'50px'}}>
			<div className="container">
		    	<Link className=' nav-link text-white' 
				          to="/">
		    		<h2 className='text-white'>Handi Sutriyan</h2>
		    	</Link>
		    	
				<div className=" navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item">
				        <Link className=' nav-link text-white' 
				          to="/">Soal 1 & 2</Link>
				      </li>
				      <li className="nav-item">
				         <Link className='nav-link text-white'
				          to="/front2">Soal 3</Link>
				      </li>
				    </ul> 
				</div>
			</div>
			</nav>

			)
}
 export default Header ;
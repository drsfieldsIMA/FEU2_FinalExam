/** @format */
import React from "react";
import Link from "next/link"
import Image from "next/image";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../../public/icons/chart-bar';
import { Cog as CogIcon } from '../../public/icons/cog';
import { Lock as LockIcon } from '../../public/icons/lock';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { createMemoryHistory } from 'history';

function Nav() {
	return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<Link className="navbar-brand" href="/">
					<Image className="nav_img"
						width={72}
						height={72} 
						src="/Aida_logo.svg"
									alt="Aida logo"
						></Image>
					</Link>
                    <Link className="navbar-brand" href="/">
											AIDA
                       人工知能欠陥の獲得
                    </Link>
                    
                   
                    <div className="navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
														<Link href="/">
															<a>
															Home
															</a>
															</Link>
                            </li>
                            <li className="nav-item">
															<Link href="/products"><a>
															Products
															</a></Link>
                             </li>
                            <li className="nav-item">
														<Link href="/about">
															<a>About</a></Link>
                            </li>
														<li className="nav-item">
														<Link href="/login">
												<a>			
														Log in
                       </a>
														</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
	);
}

export default Nav;
import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Nav} from  './Nav'
import { NavMob } from './NavMob';
import { NavSidebar } from './NavSidebar';

const NavLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const NavbarLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      
      <Box sx={{ display: { xs: 'block', md: 'none' }, m: 1 }}>
			  <NavMob onSidebarOpen={() => setSidebarOpen(true)}/>
				<NavSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'block' }}}>
			<Nav/>
			</Box>
    </>
  );
};
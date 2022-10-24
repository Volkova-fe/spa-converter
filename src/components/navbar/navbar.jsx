import React, { useState } from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import { 
	AppBar, 
	Box, 
	Button, 
	IconButton, 
	MenuItem, 
	Toolbar, 
	Typography 
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}
					>
						<MenuItem onClick={handleCloseNavMenu}>
							<Link className={style.link} to="/">
								<Typography textAlign="center">
									Конвертер валют
								</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseNavMenu}>
							<Link className={style.link} to="/rates">
								<Typography
									textAlign="center">Курсы валют
								</Typography>
							</Link>
						</MenuItem>
					</Menu>
				</Box>
				<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					<Link className={style.link} to="/">
						<Button
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Конвертер валют
						</Button>
					</Link>
					<Link className={style.link} to="/rates">
						<Button
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Курсы валют
						</Button>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar

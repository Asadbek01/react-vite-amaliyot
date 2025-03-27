import React from 'react';
// import img from '../assets/search.png';
function Header() {
	return (
		<>
			<div className='header'>
				<div className='img'>
					<img
						src='https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png'
						alt='logo'
						width='50px'
						height='50px'
					/>
					<p>users</p>
				</div>
				<div className='search'>
					<input type='text' />
					<button className='search-btn'>
						<img src='#' width='30px' height='30px' />
					</button>
				</div>
				<button className='create-btn'>create</button>
			</div>
		</>
	);
}

export default Header;

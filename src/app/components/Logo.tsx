'use client';

import Image from 'next/image';

import logo from '@assets/Logo.png';

import { useWindowWidth } from '@context/WidthContext';

function Logo() {
	const windowWidth = useWindowWidth();

	return (
		<>
			{windowWidth >= 1536 ? (
				<Image src={logo} height={96} width={96} alt='Logo da Domingos Zion' />
			) : windowWidth >= 1280 ? (
				<Image src={logo} height={80} width={80} alt='Logo da Domingos Zion' />
			) : windowWidth >= 1024 ? (
				<Image src={logo} height={64} width={64} alt='Logo da Domingos Zion' />
			) : windowWidth >= 768 ? (
				<Image src={logo} height={56} width={56} alt='Logo da Domingos Zion' />
			) : (
				<Image src={logo} height={48} width={48} alt='Logo da Domingos Zion' />
			)}
		</>
	);
}

export default Logo;

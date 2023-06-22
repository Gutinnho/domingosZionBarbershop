'use client';

import logo from '@assets/Logo.png';
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';

function Logo() {
	const [width, setWidth] = useState<number>(0);

	useLayoutEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<>
			{width >= 1536 ? (
				<Image src={logo} height={96} width={96} alt='Logo da Domingos Zion' />
			) : width >= 1280 ? (
				<Image src={logo} height={80} width={80} alt='Logo da Domingos Zion' />
			) : width >= 1024 ? (
				<Image src={logo} height={64} width={64} alt='Logo da Domingos Zion' />
			) : width >= 768 ? (
				<Image src={logo} height={56} width={56} alt='Logo da Domingos Zion' />
			) : (
				<Image src={logo} height={48} width={48} alt='Logo da Domingos Zion' />
			)}
		</>
	);
}

export default Logo;

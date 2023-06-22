'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

import { List, X } from '@phosphor-icons/react';

import FacebookIconSVG from '@components/SVGs/FacebookIconSVG';
import InstagramIconSVG from '@components/SVGs/InstagramIconSVG';
import WhatsappIcon from '@components/SVGs/WhatsappIconSVG';
import Logo from '@components/Logo';

function Header() {
	const [currentWidth, setCurrentWidth] = useState<number>(innerWidth);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useLayoutEffect(() => {
		const handleResize = () => {
			setCurrentWidth(innerWidth);
			if (currentWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [currentWidth]);

	const [isHeaderSticky, setIsHeaderSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isSticky = window.pageYOffset > 0;
			setIsHeaderSticky(isSticky);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (isMobile) {
		return (
			<>
				{!isMenuOpen ? (
					<header
						className={`fixed ${
							isHeaderSticky ? 'bg-neutral-800/50' : 'bg-neutral-800/80'
						} top-0 z-10 flex w-full justify-between px-6 py-3 transition duration-300 sm:px-10 md:px-14 xl:px-20`}>
						<Logo />
						<button onClick={toggleMenu}>
							<List size={25} color='white' weight='bold' />
						</button>
					</header>
				) : (
					<header className='fixed left-0 right-0 top-0 z-50 flex h-full flex-col gap-20 bg-neutral-950 px-6 py-3 transition duration-200 sm:px-10 md:px-14 xl:px-20'>
						<div className='flex justify-between'>
							<Logo />

							<button onClick={toggleMenu}>
								<X size={25} color='white' weight='bold' />
							</button>
						</div>

						<nav className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-14'>
							<ul className='flex flex-col items-center gap-9'>
								<li className='levitation text-2xl font-bold uppercase text-white hover:-translate-y-1 hover:shadow-lg'>
									Início
								</li>
								<li className='levitation text-2xl font-bold uppercase text-white hover:-translate-y-1 hover:shadow-lg'>
									Serviços
								</li>
								<li className='levitation text-2xl font-bold uppercase text-white hover:-translate-y-1 hover:shadow-lg'>
									Contato
								</li>
							</ul>

							<button className='whitespace-nowrap border-2 border-blue-900 px-4 py-2 text-2xl font-bold uppercase text-white drop-shadow-custom transition-colors duration-300 hover:bg-blue-900'>
								Agende agora
							</button>

							<div className='flex gap-8 py-2'>
								<a href='#'>
									<InstagramIconSVG fill='#2B488A' size={40} />
								</a>

								<a href='#'>
									<FacebookIconSVG fill='#2B488A' size={40} />
								</a>

								<a href='#'>
									<WhatsappIcon fill='#2B488A' size={40} />
								</a>
							</div>
						</nav>
					</header>
				)}
			</>
		);
	} else {
		return (
			<header
				className={`fixed ${
					isHeaderSticky ? 'bg-neutral-800/50' : 'bg-neutral-800/80'
				} top-0 z-10 flex w-full items-center justify-between  px-6 py-3 transition duration-300 sm:px-10 md:px-14 xl:px-20`}>
				<Logo />

				<nav className='absolute left-1/2 -translate-x-1/2 transform'>
					<ul className='flex items-center'>
						<li className='flex w-24 justify-center border-b-2 border-transparent py-6 transition-colors duration-300 hover:border-white lg:py-7 xl:w-28 xl:border-b-4 xl:py-8 2xl:w-36 2xl:py-10'>
							<a
								href='#'
								className='text-xl font-bold text-white xl:text-2xl 2xl:text-3xl'>
								Início
							</a>
						</li>
						<li className='flex w-24 justify-center border-b-2 border-transparent py-6 transition-colors duration-300 hover:border-white lg:py-7 xl:w-28 xl:border-b-4 xl:py-8 2xl:w-36 2xl:py-10'>
							<a
								href='#'
								className='text-xl font-bold text-white xl:text-2xl 2xl:text-3xl'>
								Serviços
							</a>
						</li>
						<li className='flex w-24 justify-center border-b-2 border-transparent py-6 transition-colors duration-300 hover:border-white lg:py-7 xl:w-28 xl:border-b-4 xl:py-8 2xl:w-36 2xl:py-10'>
							<a
								href='#'
								className='text-xl font-bold text-white xl:text-2xl 2xl:text-3xl'>
								Contato
							</a>
						</li>
					</ul>
				</nav>

				<button className='border-2 border-blue-900 px-2 py-1 text-xl font-bold text-white drop-shadow-custom transition-colors duration-300 hover:bg-blue-900 xl:border-4'>
					Agende agora
				</button>
			</header>
		);
	}
}

export default Header;

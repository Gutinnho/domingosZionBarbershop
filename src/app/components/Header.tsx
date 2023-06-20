'use client';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';

import { List, X } from '@phosphor-icons/react';

import logo from '@/assets/Logo.png';
import FacebookIconSVG from './SVGs/FacebookIconSVG';
import InstagramIconSVG from './SVGs/InstagramIconSVG';
import WhatsappIcon from './SVGs/WhatsappIconSVG';

function Header() {
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useLayoutEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth < 768);
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

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
						<Image
							src={logo}
							alt='Logo da Domingos Zion'
							width={52}
							height={52}
							quality={100}
						/>
						<button className='border-none bg-none' onClick={toggleMenu}>
							<List size={25} color='white' weight='bold' />
						</button>
					</header>
				) : (
					<header className='fixed left-0 right-0 top-0 z-50 flex h-full flex-col gap-20 bg-neutral-950 px-6 py-3 sm:px-10 md:px-14 xl:px-20'>
						<div className='flex justify-between'>
							<Image
								src={logo}
								alt='Logo da Domingos Zion'
								width={52}
								height={52}
								quality={100}
							/>

							<button onClick={toggleMenu}>
								<X size={25} color='white' weight='bold' />
							</button>
						</div>

						<nav className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-14'>
							<ul className='flex flex-col items-center gap-9'>
								<li className='text-2xl font-bold uppercase text-white'>
									Início
								</li>
								<li className='text-2xl font-bold uppercase text-white'>
									Serviços
								</li>
								<li className='text-2xl font-bold uppercase text-white'>
									Contato
								</li>
							</ul>

							<button className='whitespace-nowrap border-2 border-blue-900 px-4 py-2 text-2xl font-bold uppercase text-white drop-shadow-custom'>
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
				<Image
					src={logo}
					alt='Logo da Domingos Zion'
					width={52}
					height={52}
					quality={100}
				/>

				<nav className='absolute left-1/2 -translate-x-1/2 transform'>
					<ul className='flex items-center gap-3'>
						<li className='flex w-20 justify-center border-b-2 border-transparent py-6 hover:border-white'>
							<a href='#' className='text-xl font-bold text-white'>
								Início
							</a>
						</li>
						<li className='flex w-20 justify-center border-b-2 border-transparent py-6 hover:border-white'>
							<a href='#' className='text-xl font-bold text-white'>
								Serviços
							</a>
						</li>
						<li className='flex w-20 justify-center border-b-2 border-transparent py-6 hover:border-white'>
							<a href='#' className='text-xl font-bold text-white'>
								Contato
							</a>
						</li>
					</ul>
				</nav>

				<button className='border-2 border-blue-900 px-2 py-1 text-xl font-bold text-white drop-shadow-custom'>
					Agende agora
				</button>
			</header>
		);
	}
}

export default Header;

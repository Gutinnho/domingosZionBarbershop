'use client';
import { useEffect, useState } from 'react';

import { List, X } from '@phosphor-icons/react';

import FacebookIconSVG from '@components/SVGs/FacebookIconSVG';
import InstagramIconSVG from '@components/SVGs/InstagramIconSVG';
import WhatsappIcon from '@components/SVGs/WhatsappIconSVG';
import Logo from '@components/Logo';
import { useWindowWidth } from '../context/WidthContext';
import { Link } from 'react-scroll';

function Header() {
	const windowWidth = useWindowWidth();
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		if (windowWidth < 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [windowWidth]);

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
						<Link
							smooth
							to='home'
							className='flex items-center justify-center transition-all duration-300 hover:opacity-75'>
							<Logo />
						</Link>

						<button onClick={toggleMenu}>
							<List size={25} color='white' weight='bold' />
						</button>
					</header>
				) : (
					<header className='fixed left-0 right-0 top-0 z-50 flex h-full flex-col gap-20 bg-neutral-950 px-6 py-3 transition duration-200 sm:px-10 md:px-14 xl:px-20'>
						<div className='flex justify-between'>
							<Link
								smooth
								to='home'
								onClick={toggleMenu}
								className='flex items-center justify-center transition-all duration-300 hover:opacity-75'>
								<Logo />
							</Link>

							<button onClick={toggleMenu}>
								<X size={25} color='white' weight='bold' />
							</button>
						</div>

						<nav className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-14'>
							<ul className='flex flex-col items-center gap-9'>
								<Link
									smooth
									spy
									to='services'
									onClick={toggleMenu}
									className='levitation'>
									<li className='cursor-pointer text-2xl font-bold uppercase text-white'>
										Serviços
									</li>
								</Link>

								<Link
									smooth
									spy
									to='ourteam'
									onClick={toggleMenu}
									className='levitation'>
									<li className='cursor-pointer text-2xl font-bold uppercase text-white'>
										Nossa Equipe
									</li>
								</Link>

								<Link
									smooth
									spy
									to='contactus'
									onClick={toggleMenu}
									className='levitation'>
									<li className='cursor-pointer text-2xl font-bold uppercase text-white'>
										Contato
									</li>
								</Link>
							</ul>

							<a
								href='#'
								target='_blank'
								className='border-2 border-blue-900 px-4 py-2 drop-shadow-custom transition-colors duration-300 hover:bg-blue-900'>
								<p className='cursor-pointer whitespace-nowrap text-2xl font-bold uppercase text-white'>
									Agende agora
								</p>
							</a>

							<div className='flex gap-8 py-2'>
								<a href='#' target='_blank'>
									<InstagramIconSVG fill='#2B488A' size={40} />
								</a>

								<a href='#' target='_blank'>
									<FacebookIconSVG fill='#2B488A' size={40} />
								</a>

								<a href='#' target='_blank'>
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
				<Link
					smooth
					to='home'
					className='flex items-center justify-center transition-all duration-300 hover:opacity-75'>
					<Logo />
				</Link>

				<nav className='absolute left-1/2 flex h-full -translate-x-1/2 transform items-center'>
					<ul className='flex h-full items-center'>
						<Link
							smooth
							spy
							activeClass='border-white'
							to='services'
							className='flex h-full w-24 items-center justify-center border-b-2 border-transparent transition-colors duration-300 hover:border-white/50 xl:w-28 xl:border-b-4 2xl:w-36'>
							<li className='cursor-pointer text-xl font-bold text-white xl:text-2xl 2xl:text-3xl'>
								Serviços
							</li>
						</Link>
						<Link
							smooth
							spy
							activeClass='border-white'
							to='ourteam'
							className='flex h-full w-24 items-center justify-center border-b-2 border-transparent transition-colors duration-300 hover:border-white/50 xl:w-28 xl:border-b-4 2xl:w-36'>
							<li className='cursor-pointer text-center text-xl font-bold text-white xl:text-2xl 2xl:text-3xl'>
								Equipe
							</li>
						</Link>
						<Link
							smooth
							spy
							activeClass='border-white'
							to='contactus'
							className='flex h-full w-24 items-center justify-center border-b-2 border-transparent transition-colors duration-300 hover:border-white/50 xl:w-28 xl:border-b-4 2xl:w-36'>
							<li className='cursor-pointer text-xl font-bold text-white xl:text-2xl 2xl:text-3xl'>
								Contato
							</li>
						</Link>
					</ul>
				</nav>

				<a
					href='#'
					target='_blank'
					className='border-2 border-blue-900 px-2 py-1 drop-shadow-custom transition-colors duration-300 hover:bg-blue-900 xl:border-4'>
					<p className='cursor-pointer text-xl font-bold text-white'>
						Agende agora
					</p>
				</a>
			</header>
		);
	}
}

export default Header;

'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { List, X } from '@phosphor-icons/react';

import logo from '@/assets/Logo.png';
import FacebookIconSVG from './SVGs/FacebookIconSVG';
import InstagramIconSVG from './SVGs/InstagramIconSVG';
import WhatsappIcon from './SVGs/WhatsappIconSVG';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isHeaderSticky, setIsHeaderSticky] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const currentWidth = window.innerWidth;
		currentWidth >= 768 ? setIsMenuOpen(true) : setIsMenuOpen(false);
	}, [setIsMenuOpen]);

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

	return (
		<>
			{!isMenuOpen ? (
				<header className={`fixed ${isHeaderSticky ? ('bg-neutral-800/50') : ('bg-neutral-800/80')} transition duration-300 z-10 top-0 flex w-full justify-between px-6 py-3`}>
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
				<header className='fixed left-0 right-0 top-0 z-50 flex h-full flex-col gap-20 bg-neutral-950 px-6 py-3'>
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

					<div className='flex flex-col items-center gap-14'>
						<ul className='flex flex-col items-center gap-9'>
							<li className='text-2xl font-bold uppercase text-white'>
								Início
							</li>
							<li className='text-2xl font-bold uppercase text-white'>
								Galeria
							</li>
							<li className='text-2xl font-bold uppercase text-white'>
								Contato
							</li>
						</ul>

						<button className='border-2 border-blue-900 px-4 py-2 text-2xl font-bold uppercase text-white drop-shadow-custom'>
							Agende seu horário
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
					</div>
				</header>
			)}
		</>
	);
}

export default Header;

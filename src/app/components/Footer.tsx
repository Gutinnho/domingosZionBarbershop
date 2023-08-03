'use client';

import { Link } from 'react-scroll';

import Logo from '@components/Logo';
import WhatsappIcon from '@components/SVGs/WhatsappIconSVG';
import FacebookIconSVG from '@components/SVGs/FacebookIconSVG';
import InstagramIconSVG from '@components/SVGs/InstagramIconSVG';

function Footer() {
	return (
		<footer className=' flex flex-col gap-3 bg-neutral-800 px-6 py-3 md:px-16 md:py-6 lg:gap-5 lg:px-20 lg:py-8'>
			<div className='flex justify-between'>
				<div className='self-center'>
					<Link
						smooth
						to='home'
						className='flex items-center justify-center transition-all duration-300 hover:opacity-75'>
						<Logo />
					</Link>
				</div>

				<div className='flex justify-center gap-2'>
					<ul className='flex flex-col items-end justify-center gap-1'>
						<Link smooth to='services' className='levitation'>
							<li className='cursor-pointer text-xs font-bold uppercase text-white md:text-sm lg:text-base'>
								Serviços
							</li>
						</Link>

						<Link smooth to='ourteam' className='levitation'>
							<li className='cursor-pointer text-xs font-bold uppercase text-white md:text-sm lg:text-base'>
								Nossa equipe
							</li>
						</Link>

						<Link smooth to='contactus' className='levitation'>
							<li className='cursor-pointer text-xs font-bold uppercase text-white md:text-sm lg:text-base'>
								Contato
							</li>
						</Link>
					</ul>

					<div className='flex flex-col gap-2 md:gap-4'>
						<a
							href='#'
							target='_blank'
							className='w-full border-2 border-blue-900 px-1 py-1 drop-shadow-custom transition duration-300 hover:bg-blue-900'>
							<p className='cursor-pointer text-center text-xs font-bold uppercase text-white md:text-sm'>
								Agende Agora
							</p>
						</a>

						<div className='flex justify-center gap-2 md:gap-4'>
							<a href='#' target='_blank'>
								<InstagramIconSVG fill='#2B488A' />
							</a>

							<a href='#' target='_blank'>
								<FacebookIconSVG fill='#2B488A' />
							</a>

							<a href='#' target='_blank'>
								<WhatsappIcon fill='#2B488A' />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-start border-t border-blue-900 px-3 py-1 md:px-6 md:py-3'>
				<p className='text-xs font-bold text-white md:text-sm'>
					&copy; {new Date().getFullYear()}{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/Gutinnho'
						className='hover:brightness-75'>
						Gustavo Lunardi
					</a>
					. Todos os direitos reservados.
				</p>
				<p
					title='art and design icons'
					className='text-xs font-bold text-white md:text-sm'>
					Art and design icons created by{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.flaticon.com/free-icons/art-and-design'
						className='hover:brightness-75'>
						Freepik - Flaticon
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;

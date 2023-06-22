import InstagramIconSVG from './SVGs/InstagramIconSVG';
import FacebookIconSVG from './SVGs/FacebookIconSVG';
import WhatsappIcon from './SVGs/WhatsappIconSVG';
import Logo from '@components/Logo';

function Footer() {
	return (
		<footer className=' flex flex-col gap-3 bg-neutral-800 px-6 py-3 md:px-16 md:py-6 lg:gap-5 lg:px-20 lg:py-8'>
			<div className='flex justify-between'>
				<div className='self-center'>
					<Logo />
				</div>

				<div className='flex justify-center gap-2'>
					<ul className='flex flex-col items-end justify-center gap-1'>
						<li className='levitation text-xs font-bold uppercase text-white md:text-sm lg:text-base'>
							<a href='#'>Início</a>
						</li>
						<li className='levitation text-xs font-bold uppercase text-white md:text-sm lg:text-base'>
							<a href='#'>Galeria</a>
						</li>
						<li className='levitation text-xs font-bold uppercase text-white md:text-sm lg:text-base'>
							<a href='#'>Contato</a>
						</li>
					</ul>

					<div className='flex flex-col gap-2 md:gap-4'>
						<button className='border-2 border-blue-900 px-1 py-1 text-xs font-bold uppercase text-white drop-shadow-custom transition duration-300 hover:bg-blue-900 md:text-sm'>
							Agende Agora
						</button>

						<div className='flex justify-center gap-2 md:gap-4'>
							<a href='#'>
								<InstagramIconSVG fill='#2B488A' />
							</a>

							<a href='#'>
								<FacebookIconSVG fill='#2B488A' />
							</a>

							<a href='#'>
								<WhatsappIcon fill='#2B488A' />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-start border-t border-blue-900 px-3 py-1 md:px-6 md:py-3'>
				<p className='text-xs font-bold text-white md:text-sm'>
					&copy; {new Date().getFullYear()}{' '}
					<a href='https://github.com/Gutinnho' className='hover:brightness-75'>
						Gustavo Lunardi
					</a>
					. Todos os direitos reservados.
				</p>
				<p
					title='art and design icons'
					className='text-xs font-bold text-white md:text-sm'>
					Art and design icons created by{' '}
					<a
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

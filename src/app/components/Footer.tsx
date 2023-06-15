import Image from 'next/image';

import logo from '@/assets/Logo.png';
import InstagramIconSVG from './SVGs/InstagramIconSVG';
import FacebookIconSVG from './SVGs/FacebookIconSVG';
import WhatsappIcon from './SVGs/WhatsappIconSVG';

function Footer() {
	return (
		<footer className=' flex flex-col gap-3 bg-neutral-800 px-6 py-3'>
			<div className='flex justify-between'>
				<div className='flex items-center'>
					<Image
						src={logo}
						alt='Logo da Domingos Zion'
						width={48}
						height={48}
						quality={100}
					/>
				</div>

				<div className='flex justify-center gap-2'>
					<ul className='flex flex-col items-end justify-center gap-1'>
						<li className='text-xs font-bold uppercase text-white'>Início</li>
						<li className='text-xs font-bold uppercase text-white'>Galeria</li>
						<li className='text-xs font-bold uppercase text-white'>Contato</li>
					</ul>

					<div className='flex flex-col gap-2'>
						<button className='border-2 border-blue-900 px-1 py-1 text-xs font-bold uppercase text-white drop-shadow-custom'>
							Agende Agora
						</button>

						<div className='flex justify-center gap-2'>
							<a href='#'>
								<InstagramIconSVG fill='#2B488A' size={24} />
							</a>

							<a href='#'>
								<FacebookIconSVG fill='#2B488A' size={24} />
							</a>

							<a href='#'>
								<WhatsappIcon fill='#2B488A' size={24} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center border-t border-blue-900 px-3 py-1'>
				<p className='text-xs font-bold text-white'>
					&copy; 2023 Gustavo Lunardi. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}

export default Footer;

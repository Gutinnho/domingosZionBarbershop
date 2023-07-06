'use client';
import Image from 'next/image';
import { useWindowWidth } from '../context/WidthContext';

interface IconOptionMapping {
	[key: string]: string;
}
interface CardProps {
	cardIcon: string; // 'scissors' | 'straightRazor' | 'haircutIcon' | 'hairTratamentIcon'
	cardName: string;
	cardDescription: string;
	cardPrice: string;
}

function Card({ cardIcon, cardName, cardDescription, cardPrice }: CardProps) {
	const iconOptionMapping: IconOptionMapping = {
		scissors: '/assets/scissorsIcon.png',
		straightRazor: '/assets/straightRazorIcon.png',
		haircutIcon: '/assets/haircutIcon.png',
		hairTratamentIcon: '/assets/hairTratamentIcon.png',
	};
	const windowWidth = useWindowWidth();

	var icon = iconOptionMapping[cardIcon];

	return (
		<div className='flex h-auto flex-col self-start justify-self-center p-4 sm:h-[394px] sm:max-w-sm md:h-[346px] lg:h-[326px] lg:max-w-lg  2xl:h-[354px]'>
			<div className='flex items-center justify-evenly border-b-2 border-red-500  py-1 '>
				{windowWidth >= 1024 ? (
					<Image src={icon} alt='Icone Tesoura' width={48} height={48} />
				) : windowWidth >= 768 ? (
					<Image src={icon} alt='Icone Tesoura' width={40} height={40} />
				) : (
					<Image src={icon} alt='Icone Tesoura' width={32} height={32} />
				)}

				<p className='whitespace-nowrap text-lg font-bold text-white sm:text-xl lg:text-2xl'>
					{cardName}
				</p>

				<div className='h-1 w-8 md:w-10 lg:w-12'></div>
			</div>

			<div className='flex h-full flex-col justify-between gap-1 px-2 py-3'>
				<div className='flex h-full flex-col justify-between'>
					<div className='flexitems-center'>
						<p className='text-base font-normal text-white sm:text-lg lg:text-xl'>
							{cardDescription}
						</p>
					</div>

					<p className='text-base font-bold text-white sm:text-lg lg:text-xl'>
						R$ {cardPrice}
					</p>
				</div>

				<a
					href='#'
					target='_blank'
					className='w-fit self-end border-2 border-red-500 bg-white px-2 py-1 transition duration-300 hover:bg-red-500'>
					<p className='text-sm font-bold uppercase text-red-700 hover:text-white sm:text-base md:text-lg lg:text-xl xl:text-xl'>
						Reserve
					</p>
				</a>
			</div>
		</div>
	);
}

export default Card;

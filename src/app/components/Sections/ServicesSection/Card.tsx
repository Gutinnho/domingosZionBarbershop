'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import scissors from './assets/scissorsIcon.png';
import haircut from './assets/haircutIcon.png';
import hairTratament from './assets/hairTratamentIcon.png';
import straightRazor from './assets/straightRazorIcon.png';

import { CardsData } from '@/types/cardsData';

import { useWindowWidth } from '@context/WidthContext';

interface CardProps {
	info: CardsData;
}

function Card({ info }: CardProps) {
	const windowWidth = useWindowWidth();

	const [iconSelected, setIconSelected] = useState<StaticImageData | string>(
		''
	);

	const iconOption = info.title.icon;

	useEffect(() => {
		function chooseImport(iconOption: string): StaticImageData | string {
			switch (iconOption) {
				case 'scissors':
					return scissors;
				case 'haircut':
					return haircut;
				case 'hairTratament':
					return hairTratament;
				case 'straightRazor':
					return straightRazor;
				default:
					return '';
			}
		}
		const selectedIcon = chooseImport(iconOption);
		setIconSelected(selectedIcon);
	}, [iconOption]);

	return (
		<div className='flex h-auto flex-col self-start justify-self-center p-4 sm:h-[394px] sm:max-w-sm md:h-[346px] lg:h-[326px] lg:max-w-lg  2xl:h-[354px]'>
			<div className='flex items-center justify-evenly border-b-2 border-red-500  py-1 '>
				{windowWidth >= 1024 ? (
					<Image src={iconSelected} alt='Icone' width={48} height={48} />
				) : windowWidth >= 768 ? (
					<Image src={iconSelected} alt='Icone' width={40} height={40} />
				) : (
					<Image src={iconSelected} alt='Icone' width={32} height={32} />
				)}

				<p className='whitespace-nowrap text-lg font-bold text-white sm:text-xl lg:text-2xl'>
					{info.title.name}
				</p>

				<div className='h-1 w-8 md:w-10 lg:w-12'></div>
			</div>

			<div className='flex h-full flex-col justify-between gap-1 px-2 py-3'>
				<div className='flex h-full flex-col justify-between'>
					<div className='flexitems-center'>
						<p className='text-base font-normal text-white sm:text-lg lg:text-xl'>
							{info.content.description}
						</p>
					</div>

					<p className='text-base font-bold text-white sm:text-lg lg:text-xl'>
						R$ {info.content.price}
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

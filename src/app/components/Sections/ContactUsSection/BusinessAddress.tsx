'use client';

import { useWindowWidth } from '@/app/context/WidthContext';
import { MapPin } from '@phosphor-icons/react';

export default function BusinessAddress() {
	const windowWidth = useWindowWidth();

	return (
		<div className='flex flex-col items-center sm:items-end'>
			<div className='title_div_reverse'>
				{windowWidth >= 1280 ? (
					<MapPin size={24} weight='fill' color='#EC3237' />
				) : windowWidth >= 1024 ? (
					<MapPin size={20} weight='fill' color='#EC3237' />
				) : windowWidth >= 640 ? (
					<MapPin size={16} weight='fill' color='#EC3237' />
				) : (
					<MapPin size={12} weight='fill' color='#EC3237' />
				)}
				<p className='title_text'>Endereço</p>
			</div>
			<p className='paragraph_medium'>R. David Marcassa Lopes, 99</p>

			<p className='paragraph_medium'>Pinhal</p>

			<p className='paragraph_medium'>Cabreúva - SP</p>
		</div>
	);
}

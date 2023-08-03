'use client';

import { Phone } from '@phosphor-icons/react';

import { useWindowWidth } from '@context/WidthContext';

export default function BusinessPhone() {
	const windowWidth = useWindowWidth();

	return (
		<div className='flex flex-col items-center sm:items-end'>
			<div className='title_div_reverse'>
				{windowWidth >= 1280 ? (
					<Phone size={24} weight='fill' color='#EC3237' />
				) : windowWidth >= 1024 ? (
					<Phone size={20} weight='fill' color='#EC3237' />
				) : windowWidth >= 640 ? (
					<Phone size={16} weight='fill' color='#EC3237' />
				) : (
					<Phone size={12} weight='fill' color='#EC3237' />
				)}
				<p className='title_text'>Telefone</p>
			</div>
			<p className='paragraph_medium'>(11) 97516-4631</p>
		</div>
	);
}

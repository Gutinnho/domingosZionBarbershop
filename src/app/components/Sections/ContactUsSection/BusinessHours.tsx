'use client';

import { Clock } from '@phosphor-icons/react';

import { useWindowWidth } from '@context/WidthContext';

export default function BusinessHours() {
	const windowWidth = useWindowWidth();

	return (
		<div className='flex flex-col'>
			<div className='title_div'>
				{windowWidth >= 1280 ? (
					<Clock size={24} weight='fill' color='#EC3237' />
				) : windowWidth >= 1024 ? (
					<Clock size={20} weight='fill' color='#EC3237' />
				) : windowWidth >= 640 ? (
					<Clock size={16} weight='fill' color='#EC3237' />
				) : (
					<Clock size={12} weight='fill' color='#EC3237' />
				)}
				<p className='title_text'>Horários</p>
			</div>

			<div className='flex flex-col gap-1 lg:gap-2 lg:pr-5'>
				<div className='flex justify-between gap-3 lg:gap-5'>
					<p className='paragraph_bold'>Segunda:</p>

					<p className='paragraph_normal'>Fechado</p>
				</div>

				<div className='flex justify-between gap-3 lg:gap-5'>
					<p className='paragraph_bold'>Terça - Quinta:</p>

					<p className='paragraph_normal'>
						09:00 - 12:00
						<br />
						14:00 - 19:00
					</p>
				</div>

				<div className='flex justify-between gap-3 lg:gap-5'>
					<p className='paragraph_bold'>Sexta e Sábado:</p>

					<p className='paragraph_normal'>
						08:30 - 12:00
						<br />
						14:00 - 19:00
					</p>
				</div>

				<div className='flex justify-between gap-3 lg:gap-5'>
					<p className='paragraph_bold'>Domingo:</p>

					<p className='paragraph_normal'>09:00 - 12:00</p>
				</div>
			</div>
		</div>
	);
}

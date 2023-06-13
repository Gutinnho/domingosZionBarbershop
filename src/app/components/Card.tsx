import Image from 'next/image';

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

	var icon = iconOptionMapping[cardIcon];

	return (
		<div className=' p-4'>
			<div className='flex items-center justify-evenly border-b-2 border-red-500 p-1'>
				<Image src={icon} alt='Icone Tesoura' width={32} height={32} />

				<p className='text-xl font-bold text-white'>{cardName}</p>

				<div className='h-8 w-8'></div>
			</div>

			<div className='px-2 py-3'>
				<div className='flex flex-col gap-1'>
					<p className='text-base font-normal text-white'>{cardDescription}</p>

					<p className='text-base font-bold text-white'>R$ {cardPrice}</p>
				</div>

				<div className='flex justify-end'>
					<button className='border-2 border-red-500 bg-white px-2 py-1 text-sm font-bold uppercase text-red-700'>
						Reserve
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;

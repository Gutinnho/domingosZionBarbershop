import Card from './Card';

import cardsData from './cards.json';

import { CardsData } from '@customTypes/cardsData';

import { WindowWidthProvider } from '@context/WidthContext';

function ServicesSection() {
	const infos: CardsData[] = cardsData;

	return (
		<section
			id='services'
			className='wrapper section-spacing m-auto flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:gap-10 2xl:grid-cols-3'>
			<WindowWidthProvider>
				{infos.map((info, index) => (
					<Card key={index} info={info} />
				))}
			</WindowWidthProvider>
		</section>
	);
}

export default ServicesSection;

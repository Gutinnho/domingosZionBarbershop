import { WindowWidthProvider } from '../context/WidthContext';
import Card from './Card';
import cardsData from '@/../data/cards.json';

function ServicesSection() {
	return (
		<section
			id='services'
			className='wrapper section-spacing m-auto flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:gap-10 2xl:grid-cols-3'>
			<WindowWidthProvider>
				{cardsData.map((card) => (
					<Card
						key={card.title.name}
						cardIcon={card.title.icon}
						cardName={card.title.name}
						cardDescription={card.content.description}
						cardPrice={card.content.price}
					/>
				))}
			</WindowWidthProvider>
		</section>
	);
}

export default ServicesSection;

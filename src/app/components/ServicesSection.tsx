import Card from './Card';
import cardsData from '@/../data/cards.json';

function ServicesSection() {
	return (
		<section className='wrapper m-auto my-10 flex flex-col items-center gap-4 sm:my-14 sm:grid sm:grid-cols-2 sm:gap-6 lg:my-20 lg:gap-8 xl:gap-10 2xl:grid-cols-3'>
			{cardsData.map((card) => (
				<Card
					key={card.title.name}
					cardIcon={card.title.icon}
					cardName={card.title.name}
					cardDescription={card.content.description}
					cardPrice={card.content.price}
				/>
			))}
		</section>
	);
}

export default ServicesSection;

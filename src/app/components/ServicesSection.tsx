import Card from './Card';
import cardsData from '@/../data/cards.json';

function ServicesSection() {
	return (
		<section className='wrapper my-10 flex  flex-col items-center gap-5'>
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

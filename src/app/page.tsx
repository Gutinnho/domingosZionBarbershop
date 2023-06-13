import ServicesSection from './components/ServicesSection';
import InitialSection from './components/initialSection';

export default function Home() {
	return (
		<main className='flex flex-col justify-center'>
			<InitialSection />
			<ServicesSection />
		</main>
	);
}


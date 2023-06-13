import ServicesSection from './components/ServicesSection';
import InitialSection from './components/initialSection';
import ContactUsSection from '@/app/components/ContactUsSection';

export default function Home() {
	return (
		<main className='flex flex-col justify-center'>
			<InitialSection />
			<ServicesSection />
			<ContactUsSection />
		</main>
	);
}


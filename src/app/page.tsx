import ServicesSection from '@components/ServicesSection';
import InitialSection from '@components/InitialSection';
import ContactUsSection from '@components/ContactUsSection';

export default function Home() {
	return (
		<main className='flex flex-col justify-center'>
			<InitialSection />
			<ServicesSection />
			<ContactUsSection />
		</main>
	);
}


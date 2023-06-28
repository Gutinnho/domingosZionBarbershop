import ServicesSection from '@components/ServicesSection';
import InitialSection from '@components/InitialSection';
import ContactUsSection from '@/app/components/Sections/ContactUsSection';

export default function Home() {
	return (
		<main className='flex flex-col justify-center'>
			<InitialSection />
			<ServicesSection />
			<ContactUsSection />
		</main>
	);
}


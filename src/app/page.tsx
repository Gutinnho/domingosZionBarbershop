import InitialSection from '@components/InitialSection';
import OurTeamSection from '@components/Sections/OurTeamSection';
import ServicesSection from '@components/ServicesSection';
import ContactUsSection from '@components/Sections/ContactUsSection';

export default function Home() {
	return (
		<main className='flex flex-col justify-center'>
			<InitialSection />
			<ServicesSection />
			<OurTeamSection />
			<ContactUsSection />
		</main>
	);
}


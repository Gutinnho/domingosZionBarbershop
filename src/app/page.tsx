import OurTeamSection from '@components/Sections/OurTeamSection';
import ContactUsSection from '@components/Sections/ContactUsSection';
import InitialSection from '@/app/components/Sections/InitialSection';
import ServicesSection from '@/app/components/Sections/ServicesSection';

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


import Slider from './Slider/';

import { WindowWidthProvider } from '@/app/context/WidthContext';

function OurTeamSection() {
	return (
		<section
			id='ourteam'
			className={
				'section-spacing lg:wrapper relative left-1/2 flex -translate-x-1/2 flex-col justify-center gap-12'
			}>
			<WindowWidthProvider>
				<Slider />
			</WindowWidthProvider>
		</section>
	);
}

export default OurTeamSection;

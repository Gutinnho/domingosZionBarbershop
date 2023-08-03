import FacebookIconSVG from '@components/SVGs/FacebookIconSVG';
import InstagramIconSVG from '@components/SVGs/InstagramIconSVG';

import './styles.css';

import { TeamData } from '@customTypes/teamData';

interface CardProps {
	info: TeamData;
	index: number;
	goToSlide: (index: number) => void;
}

export default function Card({ info, index, goToSlide }: CardProps) {
	function calculateYearsOfExperience(year: number): number {
		const currentYear = new Date().getFullYear();
		const yearsOfExperience = currentYear - year;

		return yearsOfExperience;
	}

	return (
		<div className='h-full transition-none'>
			<div
				onClick={() => goToSlide(index)}
				className='relative left-1/2 flex h-full -translate-x-1/2 flex-col bg-neutral-950/5 py-14 shadow-2xl shadow-red-500/25 hover:z-50 '>
				<div className='flex h-full flex-col justify-between px-4'>
					<div className='flex flex-col items-center border-b-2 border-b-red-500 py-3'>
						<p className='whitespace-pre-wrap text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl'>
							{info.name}
						</p>
						<p className='paragraph font-medium'>{info.role}</p>
					</div>
					<div className='py-3'>
						{info.position !== undefined && (
							<p className='paragraph'>{info.position}</p>
						)}
						<p className='paragraph'>{info.qualifications}</p>
						<p className='paragraph self-center'>
							{calculateYearsOfExperience(info.since)} anos de experiência
						</p>
					</div>
				</div>
				{info.links !== undefined && (
					<div className='absolute bottom-0 flex gap-2 self-end px-3 py-2'>
						{info.links.instagram !== undefined && (
							<a href={`https://www.instagram.com/${info.links.instagram}`}>
								<InstagramIconSVG fill='#EC3237' />
							</a>
						)}
						{info.links.facebook !== undefined && (
							<a href={`https://www.facebook.com/${info.links.facebook}`}>
								<FacebookIconSVG fill='#EC3237' />
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

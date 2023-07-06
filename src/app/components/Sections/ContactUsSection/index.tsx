import './styles.css';

import Image from 'next/image';

import { WindowWidthProvider } from '@/app/context/WidthContext';

import BusinessAddress from './BusinessAddress';
import BusinessPhone from './BusinessPhone';
import BusinessHours from './BusinessHours';

import backgroundImage from '@assets/contactUsBg.png';

function ContactUsSection() {
	return (
		<section id='contactus' className='section-spacing relative'>
			<Image
				alt=''
				src={backgroundImage}
				placeholder='blur'
				fill
				className='-z-50 blur-sm'
				sizes='50'
			/>

			<div className='wrapper mx-auto flex flex-col gap-6 lg:grid lg:grid-cols-[350px_1fr] lg:grid-rows-1 lg:gap-x-10 lg:gap-y-8'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.4083656675123!2d-47.09381577158487!3d-23.256421566546393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf391cba65f125%3A0xa16620ad6627539!2sBARBEARIA%20ZION!5e0!3m2!1spt-BR!2sbr!4v1686662068811!5m2!1spt-BR!2sbr'
					className='h-64 w-full self-center lg:col-start-2 lg:h-full lg:max-h-96'
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>

				<div className='flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4 lg:row-start-1 lg:flex-col lg:items-end lg:border-r-2 lg:border-red-500 lg:py-3 lg:pr-7'>
					<WindowWidthProvider>
						<div className='flex flex-col gap-6 sm:pr-4 lg:pr-5'>
							<BusinessAddress /> <BusinessPhone />
						</div>
						<div className='flex items-start gap-2 sm:pl-4 lg:pl-0'>
							<BusinessHours />
						</div>
					</WindowWidthProvider>
				</div>

				<div className='flex items-center justify-center lg:col-span-2 lg:col-start-1 lg:row-span-1'>
					<a
						href='#'
						target='_blank'
						className='flex w-full max-w-sm justify-center self-center border-2 border-red-500 px-7 py-2 drop-shadow-custom transition-colors duration-300 hover:bg-red-500  lg:max-w-lg'>
						<p className='cursor-pointer text-base font-bold uppercase text-white sm:text-lg lg:text-xl xl:text-2xl'>
							Contate-nos
						</p>
					</a>
				</div>
			</div>
		</section>
	);
}

export default ContactUsSection;

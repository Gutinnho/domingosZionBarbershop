import Image from 'next/image';
import backgroundImage from '@assets/homeBg.png';

function InitialSection() {
	return (
		<section id='home' className='section-spacing relative'>
			<Image
				alt=''
				src={backgroundImage}
				placeholder='blur'
				fill
				className='-z-50 blur-sm'
				sizes='50'
			/>
			<div className='wrapper mx-auto flex h-full flex-col items-center justify-around gap-12 text-center sm:max-w-screen-sm sm:gap-14 md:max-w-screen-md lg:max-w-screen-lg lg:gap-20'>
				<div className='flex flex-col gap-6 sm:gap-9 lg:gap-12'>
					<div>
						<p className='text-2xl font-bold text-white sm:text-3xl lg:text-4xl xl:text-5xl'>
							Aqui a arte da barbearia se encontra com seu estilo pessoal
						</p>
						<p className='text-lg font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl'>
							Nossa equipe de barbeiros talentosos está pronta para transformar
							sua aparência e elevar sua confiança
						</p>
					</div>

					<p className='text-lg font-normal text-white sm:text-xl lg:text-2xl xl:text-3xl'>
						Oferecemos cortes de cabelo e barbas excepcionais, em um ambiente
						acolhedor e descontraído.
					</p>
				</div>

				<a
					href='#'
					target='_blank'
					className='border-4 border-blue-900 px-2 py-1 transition-colors duration-300 hover:bg-blue-900 sm:px-3  lg:px-4'>
					<p className='cursor-pointer whitespace-nowrap text-xl font-bold uppercase text-white sm:text-2xl lg:text-3xl xl:text-4xl'>
						Agende seu horário
					</p>
				</a>
			</div>
		</section>
	);
}

export default InitialSection;


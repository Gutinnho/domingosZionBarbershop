'use client';
import { MapPin, Phone, Clock } from '@phosphor-icons/react';

function ContactUsSection() {
	return (
		<section className="bg-[url('../assets/contactUsBg.png')] bg-cover bg-center">
			<div className='wrapper my-10'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.4083656675123!2d-47.09381577158487!3d-23.256421566546393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf391cba65f125%3A0xa16620ad6627539!2sBARBEARIA%20ZION!5e0!3m2!1spt-BR!2sbr!4v1686662068811!5m2!1spt-BR!2sbr'
					className='h-64 w-full '
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>

				<div className='m-4 flex flex-col items-center gap-6'>
					<div className='flex items-start gap-2'>
						<div>
							<div className='flex items-center justify-center gap-1'>
								<MapPin size={13} weight='fill' color='#EC3237' />
								<p className='text-sm font-bold text-white'>Endereço</p>
							</div>
							<p className='text-center text-xs font-bold text-white'>
								R. David Marcassa Lopes, 99
							</p>

							<p className='text-center text-xs font-bold text-white'>Pinhal</p>

							<p className='text-center text-xs font-bold text-white'>
								Cabreúva - SP
							</p>
						</div>
					</div>

					<div className='flex flex-col'>
						<div className='flex items-center justify-center gap-1'>
							<Phone size={13} weight='fill' color='#EC3237' />
							<p className='text-sm font-bold text-white'>Telefone</p>
						</div>
						<p className='text-center text-xs font-bold text-white'>
							(11) 97516-4631
						</p>
					</div>

					<div className='flex items-start gap-2'>
						<div className='flex w-52 flex-col'>
							<div className='flex items-center justify-center gap-1'>
								<Clock size={13} weight='fill' color='#EC3237' />
								<p className='self-center text-sm font-bold text-white'>
									Horários
								</p>
							</div>

							<div className='flex flex-col gap-1'>
								<div className='flex justify-between'>
									<p className='text-left text-xs font-bold text-white'>
										Segunda:
									</p>

									<p className='text-right text-xs font-normal text-white'>
										Fechado
									</p>
								</div>

								<div className='flex justify-between'>
									<p className='text-left text-xs font-bold text-white'>
										Terça - Quinta:
									</p>

									<p className='text-right text-xs font-normal text-white'>
										09:00 - 12:00
										<br />
										14:00 - 19:00
									</p>
								</div>

								<div className='flex justify-between'>
									<p className='text-left text-xs font-bold text-white'>
										Sexta e Sábado:
									</p>

									<p className='text-right text-xs font-normal text-white'>
										08:30 - 12:00
										<br />
										14:00 - 19:00
									</p>
								</div>

								<div className='flex justify-between'>
									<p className='text-left text-xs font-bold text-white'>
										Domingo:
									</p>

									<p className='text-right text-xs font-normal text-white'>
										09:00 - 12:00
									</p>
								</div>
							</div>
						</div>
					</div>

					<button className='w-full border-2 border-red-500 px-7 py-2 text-base font-bold uppercase text-white drop-shadow-custom'>
						Contate-nos
					</button>
				</div>
			</div>
		</section>
	);
}

export default ContactUsSection;

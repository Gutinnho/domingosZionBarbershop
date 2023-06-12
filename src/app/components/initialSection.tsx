function initialSection() {
	return (
		<section className="h-fit bg-[url('../assets/homeBg.png')] bg-cover bg-center py-[120px]">
			<div className='wrapper flex flex-col items-center gap-8 text-center'>
				<div className='flex flex-col gap-2'>
					<p className='text-xl font-bold text-white'>
						Aqui a arte da barbearia se encontra com seu estilo pessoal
					</p>
					<p className='text-xl font-bold text-white'>
						Nossa equipe de barbeiros talentosos está pronta para transformar
						sua aparência e elevar sua confiança
					</p>
				</div>

				<p className='text-xl font-normal text-white'>
					Oferecemos cortes de cabelo e barbas excepcionais, em um ambiente
					acolhedor e descontraído.
				</p>

				<button className='border-4 border-blue-900 px-4 py-2 text-xl font-bold uppercase text-white'>
					Agende seu horário
				</button>
			</div>
		</section>
	);
}

export default initialSection;

import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from './components/Footer';
import { WindowWidthProvider } from './context/WidthContext';

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '300', '900', '500', '700'],
	preload: true,
});

export const metadata = {
	title: 'Barbearia Domingos Zion',
	description:
		'Descubra o melhor lugar para cuidar do seu estilo na nossa barbearia. Oferecemos serviços de corte de cabelo, barba terapia e hidratação capilar. Nossos experientes barbeiros garantem um atendimento personalizado, utilizando técnicas modernas e produtos de alta qualidade. Agende sua visita e desfrute de um momento de cuidado e relaxamento em um ambiente acolhedor. Venha para a Barbearia Domingos Zion e descubra o poder de um visual impecável.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-br' className='bg-neutral-950'>
			<body className={roboto.className}>
				<WindowWidthProvider>
					<Header />
				</WindowWidthProvider>

				{children}

				<WindowWidthProvider>
					<Footer />
				</WindowWidthProvider>
			</body>
		</html>
	);
}


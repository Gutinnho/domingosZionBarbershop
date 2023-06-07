import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/app/components/Header';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '500', '700'],
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
		<html lang='pt-br'>
			<body className={roboto.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}


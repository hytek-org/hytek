import { Poppins } from 'next/font/google';
import Header from './componets/Header';
import Footer from './componets/Footer';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'HYTEK',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='md:ms-20 md:me-20 '>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

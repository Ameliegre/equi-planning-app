import { Providers } from "./providers";
import Header from './components/header'
import { Montserrat } from 'next/font/google';
import SideBar from "./components/sideBar";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template : '%s | EquiPlanning',
    default: 'EquiPlanning'
  },
  description: 'Horse stable management websites',
  authors: [{ name: 'Amélie', url: 'https://github.com/Ameliegre' }]
}

const montserrat = Montserrat({
  weight:['400','600'],
  subsets:['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Providers>
          <main>
            <SideBar/>
            <section>
              <Header/>
              {children}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
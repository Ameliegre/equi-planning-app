'use client'

import { Providers } from "./providers";
import Header from './components/header'
import { Montserrat } from 'next/font/google';

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
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <div>
            <Header/>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
'use client'

import { Providers } from "./providers";
import { Flex } from '@chakra-ui/react'
import Header from './components/header'
import { Montserrat } from 'next/font/google';
import SideBar from "./components/sideBar";

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
          <Flex direction={'row'}>
            <SideBar/>
            <Flex direction={'column'} flex='1'>
              <Header/>
              {children}
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
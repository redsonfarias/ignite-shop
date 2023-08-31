import Link from 'next/link'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import logo from '@/assets/logo.svg'

import { Container, Header } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href='/'>
          <Image src={logo} alt='' />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import { GlobalStyle, theme } from 'application/common/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dra. Aline Isis</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

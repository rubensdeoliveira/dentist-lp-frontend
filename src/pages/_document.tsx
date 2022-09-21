import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Fontes */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
            rel="stylesheet"
          />

          {/* Icon */}
          <link rel="shortcut icon" href="/aline.ico" />

          {/* PWA */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/aline_192.png"></link>
          <meta name="theme-color" content="#141e24" />

          {/* Carrossel */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {/* Metatags SEO */}
          <meta
            name="description"
            content="Acesse os principais links da Dra. Aline Ísis, e fique por dentro das novidades e inovações da Hamornizaçāo Facial."
          />
          <meta
            property="og:title"
            content="Acesse os principais links da Dra. Aline Ísis."
          />
          <meta
            property="og:description"
            content="Acesse os principais links da Dra. Aline Ísis, e fique por dentro das novidades e inovações da Hamornizaçāo Facial."
          />
          <meta property="og:url" content="https://clinicaalineisis.com.br/" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

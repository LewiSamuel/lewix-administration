import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="./favicon.null" type="image/x-null"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

// export default MyDocument
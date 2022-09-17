import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='en' className='h-full scroll-smooth'>
        <Head>
          <meta name='description' content='Skyalp Ltd' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Merriweather:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
          <link rel='apple-touch-icon' sizes='57x57' href='/assets/img/favicon/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/assets/img/favicon/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/assets/img/favicon/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/assets/img/favicon/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/assets/img/favicon/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/assets/img/favicon/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/assets/img/favicon/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/assets/img/favicon/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/img/favicon/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/assets/img/favicon/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/img/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/assets/img/favicon/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/img/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/assets/img/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/assets/img/favicon/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
          <script
            dangerouslySetInnerHTML={{
              __html: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`,
            }}
          />
        </Head>
        <body
          className='flex h-full flex-col prose prose-sm md:prose-md lg:prose-lg dark:prose-invert max-w-none prose-a:no-underline bg-white dark:bg-slate-900 antialiased'
          id='page-top'
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

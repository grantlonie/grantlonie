import { Script } from 'gatsby'

const title = 'Grant Lonie'
const description = `Grant's freelance portfolio`
const url = 'https://grantlonie.com'
const image = `${url}/title.png`

const googleTagId = 'G-BEZZJN6S93'

const analyticsScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleTagId}');`

export default function SEO({ children }: { children?: any }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="fb:app_id" content="grant.lonie" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GeeDollaHolla"></meta>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
        rel="stylesheet"
      />

      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />
      <Script id="google-analytics">{analyticsScript}</Script>

      {children}
    </>
  )
}

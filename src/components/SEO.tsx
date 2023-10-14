const title = 'Grant Lonie'
const description = `Grant's freelance portfolio`
const url = 'https://www.grantlonie.me'
const image = `${url}/title.png`

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

      {children}
    </>
  )
}

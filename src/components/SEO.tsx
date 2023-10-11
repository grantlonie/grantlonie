const title = 'Grant Lonie'
const description = `Grant's freelance portfolio`
const image = '/icon.png'
const url = 'https://www.grantlonie.me'

export default function SEO({ children }: { children?: any }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </>
  )
}

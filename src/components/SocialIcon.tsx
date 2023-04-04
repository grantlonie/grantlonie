import { Image, Tooltip } from '@chakra-ui/react'

interface Props {
  value: SocialSite
}

export default function SocialIcon({ value }: Props) {
  const { iconUrl, title, url } = socialDictionary[value]

  return (
    <Tooltip placement="top" label={title}>
      <a href={url} target="_blank">
        <Image src={iconUrl} alt={`${title} social icon`} sx={{ height: '40px' }} />
      </a>
    </Tooltip>
  )
}

type SocialSite = 'github' | 'linkedin'

interface SocialSiteOption {
  iconUrl: string
  title: string
  url: string
}

const socialDictionary: { [key in SocialSite]: SocialSiteOption } = {
  github: {
    iconUrl: 'github.png',
    title: 'GitHub',
    url: 'https://github.com/GeeDollaHolla',
  },
  linkedin: {
    iconUrl: 'linkedin.png',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/grant-lonie-93ab1340/',
  },
}

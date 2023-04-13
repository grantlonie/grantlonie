import { Box, BoxProps, Heading, Highlight, Icon, Image, Text } from '@chakra-ui/react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import * as dayjs from 'dayjs'
import { isEmpty } from 'lodash'
import { Fragment, Suspense, useState } from 'react'
import { SizeMe } from 'react-sizeme'
import { isSSR } from '../../../utils'

const GOOGLE_API_KEY = 'AIzaSyCazgiWY6hwhfKl6qTSnoS-9AnuI1m-wb4'

const center: google.maps.LatLngLiteral = { lat: 38, lng: -32 }
const zoom = 1.5

export default function PositionalHistory() {
  if (isSSR) return null

  return (
    <Suspense>
      <Render />
    </Suspense>
  )
}

function Render() {
  const [selected, setSelected] = useState<Highlight>(null)

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '300px auto', gap: 2, height: '100%', p: 12 }}>
      <SelectedDetail {...selected} />

      <Box sx={{ display: 'grid', gridTemplateRows: '300px auto', gap: 2 }}>
        <Map {...{ selected, onSelect: setSelected }} />
        <DateSlider {...{ selected, onSelect: setSelected }} />
      </Box>
    </Box>
  )
}

function SelectedDetail(props: Highlight) {
  const selected = isEmpty(props) ? placeholder : props
  const { description, imageFile, title } = selected

  return (
    <Box sx={{ display: 'grid', gridTemplateRows: '300px auto', gap: 2 }}>
      <Image
        alt={title}
        src={`/history-photos/${imageFile}`}
        sx={{ borderRadius: 8, transition: 'all 200ms', zIndex: 1 }}
        _hover={{ transform: 'scale(1.3)' }}
      />
      <Box>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  )
}

interface ChildProps {
  selected: Highlight
  onSelect: (value: Highlight) => void
}

function Map({ selected, onSelect }: ChildProps) {
  const { isLoaded } = useJsApiLoader({ id: 'google-map-script', googleMapsApiKey: GOOGLE_API_KEY })

  if (!isLoaded)
    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}></Box>

  return (
    <GoogleMap
      center={center}
      mapContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      options={{ disableDefaultUI: true }}
      zoom={zoom}
    >
      {highlights.map((m, index) => (
        <Marker
          key={index}
          icon={{
            path: iconPath[m.purpose],
            anchor: new google.maps.Point(12, 12), // center for 24x24 px icon
            fillOpacity: m === selected ? 1 : 0,
            strokeWeight: 2,
            strokeColor: 'orange',
            fillColor: 'orange',
          }}
          position={{ lat: m.latitude, lng: m.longitude }}
          onMouseOver={() => onSelect(m)}
        />
      ))}
    </GoogleMap>
  )
}

const firstYear = 2009
const lastYear = new Date().getFullYear()
const years = new Array(lastYear - firstYear + 1).fill(null).map((_, i) => firstYear + i)
const sliderIconWidth = 40
const sliderInnerIconWidth = 20

function DateSlider({ selected, onSelect }: ChildProps) {
  return (
    <SizeMe>
      {({ size }) => {
        const scale = size.width / (years.length - 1)

        return (
          <Box sx={{ position: 'relative', mx: 2 }}>
            <Box
              sx={{
                background: 'gray',
                bottom: '27px',
                height: '4px',
                position: 'absolute',
                width: '100%',
              }}
            />
            {years.map((y, i) => (
              <Fragment key={y}>
                <Box
                  sx={{
                    background: 'gray',
                    borderRadius: '2px',
                    bottom: y % 5 === 0 ? '20px' : '24px',
                    height: y % 5 === 0 ? '14px' : '10px',
                    position: 'absolute',
                    width: '2px',
                  }}
                  style={{ left: scale * i }}
                />
                {y % 5 === 0 && (
                  <Text
                    fontSize="sm"
                    sx={{ pos: 'absolute', bottom: 0 }}
                    style={{ left: scale * i - 15 }}
                  >
                    {y}
                  </Text>
                )}
              </Fragment>
            ))}
            {highlights.map((m, i) => {
              const yearDiff = dayjs(m.date).diff(dayjs(new Date(firstYear, 1, 1)), 'year', true)
              return (
                <Pin
                  highlight={m}
                  isSelected={m === selected}
                  key={i}
                  onHover={() => onSelect(m)}
                  style={{ left: scale * yearDiff - sliderIconWidth / 2 }}
                  sx={{ width: `${sliderIconWidth}px`, pos: 'absolute', bottom: '35px' }}
                />
              )
            })}
          </Box>
        )
      }}
    </SizeMe>
  )
}

interface PinProps extends BoxProps {
  highlight: Highlight
  isSelected: boolean
  onHover: () => void
}

function Pin({ highlight, isSelected, onHover, ...rest }: PinProps) {
  const { purpose, secondary } = highlight

  const markerPath = secondary
    ? 'M 12,2 C 8.13,2 5,5.13 5,9 5,14.25 12,37.661017 12,37.661017 12,37.661017 19,14.25 19,9 19,5.13 15.87,2 12,2 Z'
    : 'M 12,2 C 8.13,2 5,5.13 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.87 -3.13,-7 -7,-7 z'

  return (
    <Box {...rest}>
      <Icon
        sx={{ height: 'auto', width: '100%' }}
        fill={isSelected ? 'primary' : 'background'}
        stroke="primary"
        viewBox={`0 0 24 ${secondary ? '40' : '24'}`}
      >
        <path d={markerPath} onMouseEnter={onHover} style={{ pointerEvents: 'all' }} />
      </Icon>
      <Icon
        fontSize={`${sliderInnerIconWidth}px`}
        sx={{
          pos: 'absolute',
          left: `${sliderIconWidth / 2 - sliderInnerIconWidth / 2}px`,
          top: `${15 - sliderInnerIconWidth / 2}px`,
        }}
        fill={isSelected ? 'background' : 'primary'}
      >
        <path d={iconPath[purpose]} onMouseEnter={onHover} style={{ pointerEvents: 'all' }} />
      </Icon>
    </Box>
  )
}

const iconPath: { [key in Highlight['purpose']]: string } = {
  fun: 'M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z',
  home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  work: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z',
}

interface Highlight {
  date: Date
  description: string
  imageFile: string
  latitude: number
  longitude: number
  purpose: 'fun' | 'home' | 'work'
  /** If you want to use larger pin for space */
  secondary?: boolean
  title: string
}

const placeholder: Pick<Highlight, 'description' | 'imageFile' | 'title'> = {
  description: `My wife and I love to travel! Hover over a marker on the map to learn more!`,
  imageFile: 'peoria.jpg',
  title: 'My travels',
}

const highlights: Highlight[] = [
  {
    date: new Date('12/1/2009'),
    description:
      'Born and raised, graduated college, found my amazing wife and bought our first house.. This will always be home.',
    imageFile: 'peoria.jpg',
    latitude: 40.70927,
    longitude: -89.584185,
    purpose: 'home',
    title: 'Peoria, IL',
  },
  {
    date: new Date('11/1/2010'),
    description:
      'After school I took a couple months off to do some soul searching and visit and help some missionaries in Africa.',
    imageFile: 'africa.jpg',
    latitude: -3.369347,
    longitude: 36.677897,
    purpose: 'fun',
    title: 'Tanzania, Africa',
  },
  {
    date: new Date('6/1/2012'),
    description:
      'Traveled to France to assist in manufacturing cost reduction initiatives (while exploring on the weekends).',
    imageFile: 'cgn.jpg',
    latitude: 45.175863,
    longitude: 5.731326,
    purpose: 'work',
    title: 'France and Italy',
  },
  {
    date: new Date('2/23/2014'),
    description:
      'A month after Erica and I met, she took off to California for work. A year of many fun adventures together!',
    imageFile: 'california.jpg',
    latitude: 35.341541,
    longitude: -119.068107,
    purpose: 'fun',
    title: 'California',
  },
  {
    date: new Date('3/1/2015'),
    description:
      'First year anniversary. Visit family and explore the amazing Canada Rockies! And thoroughly exhausted by the end :)',
    imageFile: 'canada.jpg',
    latitude: 51.175994,
    longitude: -115.557422,
    purpose: 'fun',
    title: 'Alberta, Canada',
  },
  {
    date: new Date('11/1/2015'),
    description:
      'First year anniversary. Visit family and explore the amazing Canada Rockies! And thoroughly exhausted by the end :)',
    imageFile: 'canada.jpg',
    latitude: 51.175994,
    longitude: -115.557422,
    purpose: 'fun',
    title: 'Grand Canyon',
  },
  {
    date: new Date('6/1/2016'),
    description:
      'Visiting overseas operations facilities in India and a manufacturing partner in China for US engineering company.',
    imageFile: 'india.jpg',
    latitude: 17.40368,
    longitude: 78.42727,
    purpose: 'work',
    secondary: true,
    title: 'India and China',
  },
  {
    date: new Date('9/1/2016'),
    description:
      'Too much in 2 weeks! Lake Como, Venice, Florence, Cinque Terre, Rome, Pompeii, Amalfi, Barcelona and Ibiza 😅',
    imageFile: 'italy.jpg',
    latitude: 42.674545,
    longitude: 12.504642,
    purpose: 'fun',
    title: 'Italy and Spain',
  },
  {
    date: new Date('9/1/2017'),
    description:
      'Hiking the swiss alps, fondue in our cozy inn at night. Then driving the Germany and Austrian landscape.',
    imageFile: 'swag.jpg',
    latitude: 47.561592,
    longitude: 10.771161,
    purpose: 'fun',
    title: 'Switzerland, Austria, Germany',
  },
  {
    date: new Date('10/1/2018'),
    description:
      'One of our favorite trips - warm hospitality, tasty food, loads of history and warm beaches.. need to return.',
    imageFile: 'turkey.jpg',
    latitude: 41.024228,
    longitude: 28.953185,
    purpose: 'fun',
    title: 'Turkey',
  },
  {
    date: new Date('2/1/2019'),
    description:
      'Visited multiple friends in this tropical paradise.. The food trucks are tasty. The road to Hana, Maui is a trip!',
    imageFile: 'hawaii.jpg',
    latitude: 21.328476,
    longitude: -157.858229,
    purpose: 'fun',
    secondary: true,
    title: 'Hawaii',
  },
  {
    date: new Date('3/1/2019'),
    description:
      'Our first big move! Bourbon capitol, home of the Kentucky Derby and birthplace of our son :)',
    imageFile: 'louisville.jpg',
    latitude: 38.241355,
    longitude: -85.729174,
    purpose: 'home',
    title: 'Louisville',
  },
  {
    date: new Date('8/1/2019'),
    description:
      'The fjords of Norway are breathtaking. Lots of hiking, walking on glaciers and driving this rugged landscape.',
    imageFile: 'norway.jpg',
    latitude: 61.176957,
    longitude: 6.963074,
    purpose: 'fun',
    secondary: true,
    title: 'Norway',
  },
  {
    date: new Date('2/1/2020'),
    description:
      'Probably our favorite place for food. Interesting architecture, fun markets and amazing water adventures.',
    imageFile: 'thailand.jpeg',
    latitude: 13.781906,
    longitude: 100.519124,
    purpose: 'fun',
    title: 'Thailand',
  },
  {
    date: new Date('8/1/2021'),
    description:
      'From grizzly bears in Denali to massive ice calves into the Pacific, Alaska is an escape to the wild.',
    imageFile: 'alaska.jpg',
    latitude: 61.169794,
    longitude: -149.761828,
    purpose: 'fun',
    title: 'Alaska',
  },
  {
    date: new Date('2/1/2022'),
    description:
      'Baby moon! Enjoyed a quaint hotel overlooking the island spending our days relaxing in the sun ☀️',
    imageFile: 'saint-martin.jpg',
    latitude: 18.079728,
    longitude: -63.053552,
    purpose: 'fun',
    secondary: true,
    title: 'Saint Martin',
  },
  {
    date: new Date('8/1/2022'),
    description:
      'Saying goodbye to the states and heading north. The mountains are beautiful and the summers are no sweat',
    imageFile: 'edmonton.jpeg',
    latitude: 53.548924,
    longitude: -113.541155,
    purpose: 'home',
    title: 'Edmonton, Alberta',
  },
]

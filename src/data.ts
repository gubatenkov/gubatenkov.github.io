import CommunityIcon from '@/components/icons/CommunityIcon'
import CheckmarkIcon from '@/components/icons/CheckmarkIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import TelegramIcon from '@/components/icons/TelegramIcon'
import GithubIcon from '@/components/icons/GithubIcon'
import BrushIcon from '@/components/icons/BrushIcon'
import MailIcon from '@/components/icons/MailIcon'

export type GetArrayItem<T extends readonly unknown[]> = T[number]

export const SITE_TITLE = 'Slava - Frontend Developer'
export const SITE_DESCRIPTION =
  'I am a frontend developer and technology enthusiast living in Ukraine. I work with startups, agencies and studios to help develop amazing business solutions.'

export const menu = [
  {
    badge: {
      visible: false,
      text: '',
    },
    isActive: true,
    text: 'Home',
    url: '/',
    id: 1,
  },
  {
    badge: {
      visible: false,
      text: '',
    },
    isActive: true,
    url: '/about',
    text: 'About',
    id: 2,
  },
  {
    badge: {
      visible: false,
      text: '',
    },
    isActive: true,
    url: '/work',
    text: 'Work',
    id: 3,
  },
  {
    badge: {
      visible: false,
      text: 'soon',
    },
    isActive: true,
    url: 'https://gubatenkov.pages.dev',
    text: 'Blog',
    id: 4,
  },
  {
    badge: {
      visible: false,
      text: '',
    },
    url: '/contact',
    text: 'Contact',
    isActive: true,
    id: 5,
  },
]
export type Menu = typeof menu
export type MenuItem = GetArrayItem<typeof menu>

export const socials = [
  {
    url: 'mailto:gubatenkov@icloud.com',
    text: 'Email me',
    icon: MailIcon,
    id: 1,
  },
  {
    url: 'https://www.linkedin.com/in/tenkkov/',
    icon: LinkedInIcon,
    text: 'LinkedIn',
    id: 2,
  },
  {
    url: 'https://t.me/tenkkov',
    icon: TelegramIcon,
    text: 'Telegram',
    id: 3,
  },
  {
    url: 'https://github.com/tenkkov',
    icon: GithubIcon,
    text: 'Github',
    id: 5,
  },
]
export type TSocial = GetArrayItem<typeof socials>

export const advantagesData = [
  {
    text: 'And attention to small details are the qualities that helps me to create high quality products.',
    title: 'Accuracy',
    icon: BrushIcon,
    id: 1,
  },
  {
    text: 'Each accepted task is a challenge for me, so I will do my best to offer a perfect solution.',
    title: 'Perfectionism',
    icon: CheckmarkIcon,
    id: 2,
  },
  {
    text: 'Like the experience of past projects, this skill allows me to adapt to new environment more quickly.',
    title: 'Communicability',
    icon: CommunityIcon,
    id: 3,
  },
]

export const technologies = [
  {
    path: '/images/icons/html.svg',
    alt: 'HTML5',
    id: 1,
  },
  {
    path: '/images/icons/css.svg',
    alt: 'CSS',
    id: 2,
  },
  {
    path: '/images/icons/js.svg',
    alt: 'JavaScript',
    id: 3,
  },
  {
    path: '/images/icons/sass.svg',
    alt: 'SASS',
    id: 4,
  },
  {
    path: '/images/icons/react.svg',
    alt: 'React',
    id: 5,
  },
  {
    path: '/images/icons/nextjs.svg',
    alt: 'Next JS',
    id: 6,
  },
  {
    path: '/images/icons/three-js.svg',
    alt: 'Three JS',
    id: 7,
  },
  {
    path: '/images/icons/tailwind.svg',
    alt: 'Tailwind CSS',
    id: 8,
  },
  {
    path: '/images/icons/material-ui.svg',
    alt: 'Material UI',
    id: 9,
  },
  {
    path: '/images/icons/figma.svg',
    alt: 'Figma',
    id: 10,
  },
  {
    path: '/images/icons/netlify.svg',
    alt: 'Netlify',
    id: 11,
  },
  {
    path: '/images/icons/cloudflare.svg',
    alt: 'Cloudflare',
    id: 12,
  },
  {
    path: '/images/icons/vite.svg',
    alt: 'Vite',
    id: 13,
  },
]

export const brands = [
  {
    logoPath: '/images/home/logos/youtube.svg',
    name: 'Youtube',
    id: 1,
  },
  {
    logoPath: '/images/home/logos/leetcode.svg',
    name: 'Leetcode',
    id: 2,
  },
  {
    logoPath: '/images/home/logos/google.svg',
    name: 'Google',
    id: 3,
  },
  {
    logoPath: '/images/home/logos/udemy.svg',
    name: 'Udemy',
    id: 4,
  },
  {
    logoPath: '/images/home/logos/linkedin.svg',
    name: 'LinkedIn',
    id: 5,
  },
]
export type TBrand = GetArrayItem<typeof brands>

export const testimonials = [
  {
    text: "When I shared feedback about our developer's work with other project managers, they were really impressed with how quickly he created the home page layout.",
    image: '/images/home/testimonials/vlada.jpg',
    title: "Other managers didn't believe me",
    position: 'Project Manager',
    author: 'Vlada',
    id: 0,
  },
  {
    text: 'The new feature that the development team added to our site last week works very well. Thanks to this feature, it allows to start saving more time and focus on more important things. Thank you.',
    title: 'Wow. I like how this new feature works',
    image: '/images/home/testimonials/marta.jpg',
    position: 'Graphic Designer',
    author: 'Marta',
    id: 1,
  },
  {
    text: 'Thanks to that, I was able to fix the bug and close the task on time to the deadline. It is always a pleasure to work with a good developers in one team.',
    image: '/images/home/testimonials/aleksandr.jpg',
    title: 'Thank you for the help in developing',
    position: 'Frontend Developer',
    author: 'Aleksandr',
    id: 2,
  },
  {
    text: "I've been working at this studio for half a year now and I'm testing three projects at the same time. And I can say that your site is the only one among those that I tested during this time without crashing at every click.",
    title: "Your site is the only one that doesn't break",
    image: '/images/home/testimonials/katerina.jpg',
    position: 'QA Engineer',
    author: 'Katerina',
    id: 3,
  },
  {
    text: "We were planning a release, but then client noticed in the CMS that the traffic started increasing very quickly, and that's with the caching feature enabled! Switching to static pages instead of SSR is ideal solution.",
    title: 'Thanks for helping with the optimization',
    image: '/images/home/testimonials/marina.jpg',
    position: 'Project Manager',
    author: 'Marina',
    id: 4,
  },
]
export type Testimonial = GetArrayItem<typeof testimonials>

export const categories = [
  {
    name: 'All Projects',
    catId: 'all',
    slug: '',
  },
  {
    name: 'Three.js',
    catId: 'three',
    slug: '/three',
  },
  {
    name: 'Next.js',
    catId: 'next',
    slug: '/next',
  },
] as const
export type Category = GetArrayItem<typeof categories>

export const career = [
  {
    additionalText:
      'My first place of work, where I started to make the first layouts on design from Figma. This is where I learned to be attentive to the smallest details.',
    logoPath: '/images/about/company1.svg',
    workingPeriod: 'Jan 2021 - Mar 2021',
    companyName: 'Extyl',
    id: 0,
  },
  {
    additionalText:
      'In this company, I began to grow and solve tasks as a React developer. Also, I received a good experience of working in a team.',
    logoPath: '/images/about/company2.svg',
    workingPeriod: 'Jan 2022 - Jan 2023',
    companyName: 'Halo Lab',
    id: 1,
  },
  {
    additionalText:
      'Mastering a new area for me - 3D development. Making projects with Blender, Three.js and React.js',
    logoPath: '/images/about/company3.svg',
    companyName: 'Improving Qualification',
    workingPeriod: 'Mar 2023',
    id: 2,
  },
]
export type CareerItem = GetArrayItem<typeof career>

export const inspirations = [
  {
    logoPath: '/images/about/github.svg',
    companyName: 'Github',
    id: 0,
  },
  {
    logoPath: '/images/about/codepen.svg',
    companyName: 'Codepen',
    id: 1,
  },
  {
    logoPath: '/images/about/gumroad.svg',
    companyName: 'Gumroad',
    id: 2,
  },
  {
    logoPath: '/images/about/css-tricks.svg',
    companyName: 'CSS-Tricks',
    id: 3,
  },
  {
    logoPath: '/images/about/behance.svg',
    companyName: 'Behance',
    id: 4,
  },
  {
    logoPath: '/images/about/dribble.svg',
    companyName: 'Dribble',
    id: 5,
  },
  {
    logoPath: '/images/about/awards.svg',
    companyName: 'Awwwards',
    id: 6,
  },
  {
    logoPath: '/images/about/cssawards.svg',
    companyName: 'CSS Design Awards',
    id: 7,
  },
  {
    logoPath: '/images/about/stackoverflow.svg',
    companyName: 'Stackoverflow',
    id: 8,
  },
  {
    logoPath: '/images/about/devto.svg',
    companyName: 'Dev.to',
    id: 9,
  },
  {
    logoPath: '/images/about/lapa-ninja.svg',
    companyName: 'Lapa Ninja',
    id: 10,
  },
  {
    logoPath: '/images/about/product-hunt.svg',
    companyName: 'Product Hunt',
    id: 11,
  },
]

export const qualifications = [
  {
    description:
      'Main goal to know how to use TypeScript to level-up web applications through exercise driven workshops and tutorials.',
    image: {
      alt: 'Cover of TotalTypescript course by Matt Pockock',
      path: '/images/home/totaltypescript.jpg',
    },
    followUrl: 'https://www.totaltypescript.com/',
    title: 'TotalTypescript',
    tag: 'Course',
    id: 0,
  },
  {
    description:
      'Main purpose to understand basics of Blender and Three.js to level-up 3D applications through step-by-step lessons.',
    image: {
      alt: 'Cover of Three.js Journey course by Bruno Simon',
      path: '/images/home/threejs-journey.jpg',
    },
    followUrl: 'https://threejs-journey.com/',
    title: 'Three.js Journey',
    tag: 'Course',
    id: 1,
  },
  {
    description:
      'Main purpose to learn about Three.js and React using React Three Fiber and Drei helpers through interactive lessons.',
    image: {
      alt: 'Cover of React Three Fiber course by Sean Bradley',
      path: '/images/home/react-three-fiber.jpg',
    },
    followUrl: 'https://www.udemy.com/course/react-three-fiber/',
    title: 'React Three Fiber',
    tag: 'Certification',
    id: 2,
  },
]
export type TQualificationItem = GetArrayItem<typeof qualifications>

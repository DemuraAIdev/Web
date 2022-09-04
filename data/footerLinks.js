/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
const Portfolio = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
]
export const Other = [
  { href: '/newsletter', title: 'Newsletter' },
  { href: '/tags', title: 'Tags' },
]
export const SocialLink = [
  { href: siteMetadata.github, title: 'GIthub' },
  { href: siteMetadata.twitter, title: 'Twitter' },
]

export default Portfolio

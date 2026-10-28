import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Meta Roofing & Co',
    short_name: 'Meta Roofing',
    description: "Perth's visual roofing specialists combining professional expertise with smart-glasses technology.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A1B33',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  }
}
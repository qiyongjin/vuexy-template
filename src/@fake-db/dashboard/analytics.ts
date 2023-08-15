import mock from '@/@fake-db/mock'
import type { ProjectsAnalytics } from '@/@fake-db/types'

const database: ProjectsAnalytics[] = [
  {
    logo: '',
    name: 'Website SEO',
    date: '10 May 2021',
    leader: 'Eileen',
    team: [],
    status: 38,
  },
  {
    logo: '',
    name: 'Social Banners',
    date: '03 Jan 2021',
    leader: 'Owen',
    team: [],
    status: 45,
  },
  {
    logo: '',
    name: 'Logo Designs',
    date: '12 Aug 2021',
    leader: 'Keith',
    team: [],
    status: 92,
  },
  {
    logo: '',
    name: 'IOS App Design',
    date: '19 Apr 2021',
    leader: 'Merlin',
    team: [],
    status: 56,
  },
  {
    logo: '',
    name: 'Figma Dashboards',
    date: '08 Apr 2021',
    leader: 'Harmonica',
    team: [],
    status: 25,
  },
  {
    logo: '',
    name: 'Crypto Admin',
    date: '29 Sept 2021',
    leader: 'Allyson',
    team: [],
    status: 36,
  },
  {
    logo: '',
    name: 'Create Website',
    date: '20 Mar 2021',
    leader: 'Georgia',
    team: [],
    status: 72,
  },
  {
    logo: '',
    name: 'App Design',
    date: '09 Feb 2021',
    leader: 'Fred',
    team: [],
    status: 89,
  },
  {
    logo: '',
    name: 'Angular APIs',
    date: '17 June 2021',
    leader: 'Richard',
    team: [],
    status: 77,
  },
  {
    logo: '',
    name: 'Admin Template',
    date: '06 Oct 2021',
    leader: 'Geneva',
    team: [],
    status: 100,
  },
]

mock.onGet('/dashboard/analytics/projects').reply(() => [200, database])

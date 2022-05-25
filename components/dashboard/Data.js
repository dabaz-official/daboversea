import { ChartPieIcon, DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/outline';

const data = [
  {
    title: 'Dashboard',
    icon: <ChartPieIcon />,
    link: '/',
  },
  {
    title: 'Applications',
    icon: <DocumentTextIcon />,
    link: '/admin/applications',
  },
  {
    title: 'Security',
    icon: <ShieldCheckIcon />,
    link: '/admin/security',
  },
];

export default data;
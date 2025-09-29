export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface CVSection {
  id: string;
  label: string;
  items: TimelineItem[];
}

export const cvData: CVSection[] = [
  {
    id: 'experience',
    label: 'Experience',
    items: [
      {
        year: '2025—Now',
        title: 'Software Engineer',
        company: 'JPMorgan Chase · Glasgow',
        description: 'Building and maintaining cloud infrastructure. Working with EKS.'
      }
    ]
  },
  {
    id: 'education',
    label: 'Education',
    items: [
      {
        year: '2024—2025',
        title: 'MSc Computer Science',
        company: 'University of St Andrews',
        description: 'Focused on conversational AI and distributed systems.'
      },
      {
        year: '2020—2024',
        title: 'BSc Computer Science',
        company: 'University of Strathclyde',
        description: 'First Class Honours · Built strong foundations in CS.'
      }
    ]
  },
  {
    id: 'hackathons',
    label: 'Hackathons',
    items: [
      {
        year: 'Feb 2025',
        title: 'BSBuster',
        company: 'Speedinvest Berlin · Winner',
        description: 'Built a real-time voice fact checker.'
      },
      {
        year: 'Mar 2025',
        title: 'Lightspeed',
        company: 'START Hack · Top 3 in Category',
        description: 'Real-time call assistant for wealth managers.'
      },
      {
        year: 'Nov 2024',
        title: 'Bookable',
        company: 'EF Fall Hack · 4th (Honorable Mention)',
        description: 'AI powered sales agent.'
      }
    ]
  }
];

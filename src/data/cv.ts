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
      },
      {
        year: 'Summer 2023 & 2024',
        title: 'Software Intern',
        company: 'JPMorgan Chase · Glasgow',
        description: 'Intern in the cloud team and corporate investment bank.'
      },
      {
        year: 'Summer 2022',
        title: 'Computer Vision Intern',
        company: 'Reed Research Group · Glasgow',
        description: 'Worked on research team that leveraged computer vision for chemical analysis.'
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
        year: 'Oct 2025',
        title: 'space',
        company: 'Perplexity · Lots of learning',
        description: 'Search agent that helps you shop for furniture.'
      },
      {
        year: 'Oct 2025',
        title: 'DiveDeeper with the Economist',
        company: 'Google x The Economist x Elevenlabs Hackathon by Foundry · Winner',
        description: 'Bringing the people back into news with voice agents.'
      },
      {
        year: 'Mar 2025',
        title: 'Lightspeed',
        company: 'START Hack · Top 3 in Category',
        description: 'Real-time call assistant for wealth managers.'
      },
      {
        year: 'Feb 2025',
        title: 'BSBuster',
        company: 'Speedinvest Berlin · Winner',
        description: 'Real-time voice conversation fact checker.'
      },
      {
        year: 'Nov 2024',
        title: 'Bookable',
        company: 'EF Fall Hack · 4th (Honorable Mention)',
        description: 'AI powered sales agent.'
      },
      {
        year: 'May 2024',
        title: 'Zara AI',
        company: 'Hack UPC Barcelona · Lots of learning',
        description: 'Zara clothing recommendation engine.'
      },
      {
        year: 'Oct 2022',
        title: 'Beemunity',
        company: 'Code for Good · Lots of learning',
        description: 'Bee spotting app for local farmers.'
      }
    ]
  }
];

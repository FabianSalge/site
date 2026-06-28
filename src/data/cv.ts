export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  link?: string;
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
        description: 'Building the control plane for a multi-cloud platform.'
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
    id: 'certifications',
    label: 'Certifications',
    items: [
      {
        year: 'Jun 2026',
        title: 'Certified Kubernetes Administrator (CKA)',
        company: 'The Linux Foundation · CNCF',
        description: 'Hands-on certification covering Kubernetes cluster architecture, workloads, networking, storage, and troubleshooting.',
        link: 'https://www.credly.com/badges/35eadadb-66b9-4597-999e-7721aff91cd5'
      },
      {
        year: 'Nov 2025',
        title: 'HashiCorp Certified: Terraform Associate (003)',
        company: 'HashiCorp',
        description: 'Validates core infrastructure-as-code skills with Terraform: configuration, state management, modules, and provisioning workflows.',
        link: 'https://www.credly.com/badges/88bfbd6c-60ec-4e9c-97a3-58ff62e36315'
      },
      {
        year: 'Oct 2025',
        title: 'AWS Certified Cloud Practitioner',
        company: 'Amazon Web Services (AWS)',
        description: 'Foundational certification covering AWS cloud concepts, core services, security, architecture, and pricing.',
        link: 'https://www.credly.com/badges/4d551f06-1f10-426e-9520-879970f80f45'
      }
    ]
  },
  {
    id: 'hackathons',
    label: 'Hackathons',
    items: [
      {
        year: 'Mar 2026',
        title: 'Property Risk Intelligence',
        company: 'AI Engine Hack · 2nd Place',
        description: 'Commercial property risk platform helping insurers monitor what is actually operating inside insured buildings — multi-agent data pipeline, computer vision, and real-time public data. Sponsored by Anthropic, tomoro.ai, Wordsmith, JetBrains, and Dawn Capital.'
      },
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

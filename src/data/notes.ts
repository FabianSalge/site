export interface Note {
  slug: string;
  title: string;
  date: string;
  preview?: string;
}

export const notes: Note[] = [
  {
    slug: 'building-this-site',
    title: 'Building this site',
    date: 'Sep 29, 2025',
    preview: 'First project with Astro...'
  }
];

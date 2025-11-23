export interface CoffeeShop {
  rank: number;
  name: string;
  location: string;
  rating: number; 
  visitDate: string;
  notes: string;
  highlight?: string; 
}

export const coffeeShops: CoffeeShop[] = [
  {
    rank: 1,
    name: 'La Bodega',
    location: 'Bellgrove Street',
    rating: 4.8,
    visitDate: 'Nov 2025',
    notes: 'This place is amazing. Coffee, food, and hot sauce.',
    highlight: '👑'
  },
  {
    rank: 2,
    name: 'Kaffateria',
    location: 'Dundas Street',
    rating: 4.7,
    visitDate: 'Sep 2025',
    notes: 'Great location, Excellent coffee. Almost perfect!!',
    highlight: '👑 - very close second'
  },
  {
    rank: 3,
    name: 'Laboratorio Espresso',
    location: 'West Nile Street',
    rating: 4.6,
    visitDate: 'Sep 2025',
    notes: 'Very good coffee and no line at all. Super quick and delicious.',
  },
  {
    rank: 4,
    name: 'Gordon Street Coffee',
    location: 'Gordon St (as you might\'ve guessed)',
    rating: 4.3,
    visitDate: 'Aug 2025',
    notes: 'Great coffee. House blend is awesome.',
  },
  {
    rank: 5,
    name: 'Through the House',
    location: 'High St',
    rating: 4.1,
    visitDate: 'Oct 2025',
    notes: 'Cool spot, good coffee, free sparkling water!!',
  },
  {
    rank: 6,
    name: 'Kloud',
    location: 'Hutcheson Steet',
    rating: 3.9,
    visitDate: 'Sep 2025',
    notes: 'First time was surpirsingly good. Second visit, was a burnt coffee with long wait time.',
  },
  {
    rank: 7,
    name: 'Artrez',
    location: 'Saltmarket',
    rating: 3.4,
    visitDate: 'Nov 2025',
    notes: 'Beans were a bit too sweet for my taste.',
  },
  {
    rank: 8,
    name: 'Blank Street',
    location: 'Gordon Street',
    rating: 3.4,
    visitDate: 'Sep 2025',
    notes: 'First sips were great, but it quickly became an average coffee.',
  }
];


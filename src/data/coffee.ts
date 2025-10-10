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
    name: 'Kaffateria',
    location: 'Dundas Street',
    rating: 4.7,
    visitDate: 'Sep 2025',
    notes: 'Great location, Excellent coffee. Almost perfect!!',
    highlight: '👑'
  },
  {
    rank: 2,
    name: 'Laboratorio Espresso',
    location: 'West Nile Street',
    rating: 4.6,
    visitDate: 'Sep 2025',
    notes: 'Very good coffee and no line at all. Super quick and delicious.',
  },
  {
    rank: 3,
    name: 'Through the House',
    location: 'High St',
    rating: 4.1,
    visitDate: 'Aug 2025',
    notes: 'Cool spot, good coffee, free sparkling water!!',
  },
  {
    rank: 4,
    name: 'Kloud',
    location: 'Hutcheson Steet',
    rating: 3.9,
    visitDate: 'Sep 2025',
    notes: 'First time was surpirsingly good. Second visit, was a burnt coffee with long wait time.',
  },
  {
    rank: 5,
    name: 'Blank Street',
    location: 'Gordon Street',
    rating: 3.4,
    visitDate: 'Sep 2025',
    notes: 'First sips were great, but it quickly became an average coffee.',
  },
  {
    rank: 6,
    name: 'Outlier',
    location: 'London Road',
    rating: 3.1,
    visitDate: 'Sep 2025',
    notes: 'Just very mid.',
  }
];


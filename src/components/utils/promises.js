export const animals = [
    {id: '1', name: 'Medusa', category: 'peces', slug: 'peces-y-animales-marinos', description: 'Nulla consequat massa quis enim. Donec pede justo.', price: 100, pictureUrl: 'https://images.pexels.com/photos/1683724/pexels-photo-1683724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 44},
    {id: '2', name: 'Lechuza', category: 'aves', slug: 'aves', description: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.', price: 110, pictureUrl: 'https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 9},
    {id: '3', name: 'Tigre de bengala', category: 'mamiferos', slug: 'mamiferos', description: 'Aenean commodo ligula eget dolor. Aenean massa.', price: 140, pictureUrl: 'https://images.pexels.com/photos/145971/pexels-photo-145971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 42},
    {id: '4', name: 'Camaleón', category: 'reptiles', slug: 'reptiles', description: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis.', price: 190, pictureUrl: 'https://images.pexels.com/photos/3151186/pexels-photo-3151186.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', stock: 6},
    {id: '5', name: 'Rana marrón', category: 'anfibios', slug: 'anfibios', description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae.', price: 180, pictureUrl: 'https://images.pexels.com/photos/129566/pexels-photo-129566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 32},
    {id: '6', name: 'Chimpancé', category: 'mamiferos', slug: 'mamiferos', description: 'Nulla consequat massa quis enim. Donec pede justo.', price: 150, pictureUrl: 'https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 86},
    {id: '7', name: 'Aguila', category: 'aves', slug: 'aves', description: 'Vivamus elementum semper nisi. Aenean vulputate.', price: 120, pictureUrl: 'https://images.pexels.com/photos/158330/steppe-eagle-eagle-steppe-nature-158330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 72},
    {id: '8', name: 'Gecko', category: 'anfibios', slug: 'anfibios', description: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac.', price: 170, pictureUrl: 'https://images.pexels.com/photos/7329770/pexels-photo-7329770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 22},
    {id: '9', name: 'Pez payaso', category: 'peces', slug: 'peces-y-animales-marinos', description: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis.', price: 190, pictureUrl: 'https://images.pexels.com/photos/4001917/pexels-photo-4001917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 12},
    {id: '10', name: 'Lagarto Marrón', category: 'reptiles', slug: 'reptiles', description: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis.', price: 190, pictureUrl: 'https://images.pexels.com/photos/94271/gecko-rough-knob-lizard-australia-94271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 75},
    {id: '11', name: 'Koala', category: 'mamiferos', slug: 'mamiferos', description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae.', price: 180, pictureUrl: 'https://images.pexels.com/photos/7243633/pexels-photo-7243633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 63},
    {id: '12', name: 'Tortuga Marina', category: 'reptiles', slug: 'reptiles', description: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.', price: 110, pictureUrl: 'https://images.pexels.com/photos/4652070/pexels-photo-4652070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 25},
    {id: '13', name: 'Tiburón tigre', category: 'peces', slug: 'peces-y-animales-marinos', description: 'Vivamus elementum semper nisi. Aenean vulputate.', price: 120, pictureUrl: 'https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 42},
    {id: '14', name: 'Salamandra', category: 'anfibios', slug: 'anfibios', description: 'Nulla consequat massa quis enim. Donec pede justo.', price: 150, pictureUrl: 'https://images.pexels.com/photos/5645950/pexels-photo-5645950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: '15', name: 'Lemur', category: 'mamiferos', slug: 'mamiferos', description: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac.', price: 170, pictureUrl: 'https://images.pexels.com/photos/7713938/pexels-photo-7713938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 54},
    {id: '16', name: 'Pájaro Carpintero', category: 'aves', slug: 'aves', description: 'Vivamus elementum semper nisi. Aenean vulputate.', price: 120, pictureUrl: 'https://images.pexels.com/photos/5748862/pexels-photo-5748862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', stock: 23},
];


export const promiseList = new Promise( (resolve)=>{
    setTimeout(()=>{resolve(animals)}, 3000);
} );

export const getAnimal = (animal) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(animal)
        }, 2000)
    })
}

export const cat = [];
    animals.forEach(c => {
        if (!cat.find(obj => obj === c.category)) {
            cat.push(c.category);
        }
    });

export const initial = 1;
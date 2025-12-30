export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women' | 'kids' | 'jewellery';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  material?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    category: 'men',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'High-quality cotton t-shirt with a modern fit. Perfect for casual wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Cotton'
  },
  {
    id: '2',
    name: 'Elegant Evening Dress',
    category: 'women',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1753192108753-81be0db2f7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Stunning evening dress perfect for special occasions. Elegant and comfortable.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: 'Polyester blend'
  },
  {
    id: '3',
    name: 'Kids Adventure Set',
    category: 'kids',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1622218286192-95f6a20083c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Comfortable and durable clothing set for active kids. Fun and practical.',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    material: 'Cotton blend'
  },
  {
    id: '4',
    name: 'Gold Diamond Necklace',
    category: 'jewellery',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1643300866907-032b3baeeb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Exquisite gold necklace with premium craftsmanship. A timeless piece.',
    material: '18K Gold'
  },
  {
    id: '5',
    name: 'Classic Denim Jacket',
    category: 'men',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1724184888115-e76e42f53dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Timeless denim jacket with a classic fit. A wardrobe essential.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: 'Denim'
  },
  {
    id: '6',
    name: 'Luxury Gold Ring',
    category: 'jewellery',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Beautiful gold ring with elegant design. Perfect for any occasion.',
    material: '14K Gold'
  },
  {
    id: '7',
    name: 'Summer Floral Dress',
    category: 'women',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1753192108753-81be0db2f7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Light and breezy summer dress with beautiful floral patterns.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: 'Linen blend'
  },
  {
    id: '8',
    name: 'Kids Sports Outfit',
    category: 'kids',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1622218286192-95f6a20083c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Comfortable sports wear designed for active kids.',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    material: 'Polyester blend'
  }
];

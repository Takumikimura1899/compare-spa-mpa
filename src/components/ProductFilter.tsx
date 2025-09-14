import { useState } from 'react';
import { allProducts } from '../common/constant/products';
import { Card } from './Card';

export const ProductFilter = () => {
  const [category, setCategory] = useState('すべて');

  const filteredProducts = allProducts.filter((product) =>
    category === 'すべて' ? true : product.category === category
  );

  const onClickCategory = (newCategory: string) => {
    setCategory(newCategory);
    location.hash = newCategory;
  };
  return (
    <div>
      <nav>
        <button className='button' onClick={() => onClickCategory('すべて')}>
          すべて
        </button>
        <button className='button' onClick={() => onClickCategory('家電')}>
          家電
        </button>
        <button className='button' onClick={() => onClickCategory('家具')}>
          家具
        </button>
      </nav>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Card
              title={product.name}
              category={product.category}
              detail={product.detail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

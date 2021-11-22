import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('<ProductImage />', () => {
  test('should be render correctly', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.png" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should be display image of product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

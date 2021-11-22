import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should be render correctly with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should be display the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

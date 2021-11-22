# Devferx-Product-Cart

Product Card Component

## Install

NPM
```
npm install devferx-product-card
```

Yarn
```
yarn add devferx-product-card
```

## Example

```js
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'devferx-product-card'
```

```jsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ count, isMaxCountReached, maxCount, reset, increaseBy }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```

## [Demo](https://devferx-product-card-demo.netlify.app/)

![Coffee card](https://i.ibb.co/xYpKHXT/devferx-product-card-demo-netlify-app.png)
* https://devferx-product-card-demo.netlify.app/
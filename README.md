# Devferx-Product-Cart

Este es una paquete de despligue en NPM

## Fernando Quinteros Gutierrez

## Ejemplo

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
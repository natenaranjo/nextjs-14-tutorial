import React from "react"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ProductDetails = async ({
  params,
}: {
  params: {
    productId: string
  }
}): Promise<unknown> => {
  return <h1>Product ID: {params.productId}</h1>
}

export default ProductDetails

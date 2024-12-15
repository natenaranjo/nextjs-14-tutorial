import React from "react"

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

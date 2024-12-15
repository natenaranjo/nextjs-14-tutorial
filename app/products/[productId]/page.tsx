import React from "react"

const ProductDetails = ({ params }: { params: Record<string, string> }) => {
  return <h1>Product ID: {params.productId}</h1>
}

export default ProductDetails

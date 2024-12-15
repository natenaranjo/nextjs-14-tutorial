import React from "react"

type PageProps = {
  params: Record<string, string>
}

const ProductDetails = ({ params }: PageProps) => {
  return <h1>Product ID: {params.productId}</h1>
}

export default ProductDetails

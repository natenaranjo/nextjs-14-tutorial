import React from "react"

type PageProps = {
  params: { productId: string }
}

const ProductDetails: React.FC<PageProps> = ({ params }) => {
  return <h1>Details about product {params.productId}</h1>
}

export default ProductDetails

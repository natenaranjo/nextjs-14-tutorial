type PageProps = {
  params: { productId: string }
}

export default function ProductPage({ params }: PageProps) {
  return <div>Details on product {params.productId}</div>
}

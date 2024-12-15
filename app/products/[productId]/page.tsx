type ParamsType = Promise<{ productId: string }>

export default async function ProductPage({ params }: { params: ParamsType }) {
  const { productId } = await params
  return <div>Details on product {productId}</div>
}

type ParamsType = Promise<{ productId: string }>

export default async function ProductPage({ params }: { params: ParamsType }) {
  const { productId } = await params
  return <h1>Details on product {productId}</h1>
}

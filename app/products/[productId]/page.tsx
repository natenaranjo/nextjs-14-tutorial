import { Metadata } from "next"

type Props = {
  params: Promise<{
    productId: string
  }>
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `Product ${(await params).productId}`,
  }
}

export default async function ProductPage({ params }: Props) {
  return <h1>Details on product {(await params).productId}</h1>
}

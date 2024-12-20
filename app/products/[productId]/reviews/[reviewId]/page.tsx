import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    productId: string
    reviewId: string
  }>
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

export default async function ReviewDetail({ params }: Props) {
  const random = getRandomInt(2)

  if (random === 1) throw new Error("Error loading review")

  if (parseInt((await params).reviewId) > 1000) {
    notFound()
  }

  return (
    <div>
      Review {(await params).reviewId} for product {(await params).productId}
    </div>
  )
}

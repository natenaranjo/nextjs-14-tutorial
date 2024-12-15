type ParamsType = Promise<{
  productId: string
  reviewId: string
}>

const ReviewDetail = async ({ params }: { params: ParamsType }) => {
  const { productId, reviewId } = await params
  return (
    <div>
      Review {reviewId} for product {productId}{" "}
    </div>
  )
}

export default ReviewDetail

"use client"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </>
  )
}

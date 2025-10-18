export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
      </div>
    </div>
  )
}
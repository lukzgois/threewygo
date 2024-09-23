export default function FileInput({ ...rest }) {
  return (
    <input
     {...rest}
      className="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      type="file"
    />
  )
}

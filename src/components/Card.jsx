export default function Card({ name, img, link })
{
  return (
  <>
    <a href={ link } target="_blank" className="w-full px-4 py-5 rounded-lg shadow bg-gray-700 hover:bg-gray-500 flex flex-col justify-evenly">
      <div>
        <div className="mt-1 text-3xl font-semibold text-white flex justify-items-center justify-center">
          <img
            src={ img }
            alt="Image"
            className="h-30 max-h-20 max-w-xs"
          />
        </div>
        <div className="mt-1 text-3xl font-semibold text-white text-center">
          { name }
        </div>
      </div>
    </a>
  </>
  )
}
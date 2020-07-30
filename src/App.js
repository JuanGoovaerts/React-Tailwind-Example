import React from "react"

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            I am a card made with TailwindCss
          </div>
          <p className="text-gray-700 text-base">
            Tailwind Css is so awesome. You can design all what you want. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tailwindcss
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #react
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #javascript
          </span>
        </div>
      </div>
    </div>
  )
}

export default App

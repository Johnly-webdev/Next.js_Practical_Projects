"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const App = () => {
  const router = useRouter()

  const handlePage = () => {
    router.push('/movies')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          🎬 Welcome to the Movies Section custom made by <span className="text-blue-600">Johnly</span>!!
        </h1>
        <p className="text-gray-600">Please click the button below to move to the movies page</p>
        <button
          onClick={handlePage}
          className="mt-4 px-6 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition duration-300"
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App

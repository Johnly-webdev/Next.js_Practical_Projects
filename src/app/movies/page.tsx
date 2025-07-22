import React from 'react'
import Link from 'next/link'

export default function MoviesPage() {
  const movies = [
    { id: '1', title: 'Inception' },
    { id: '2', title: 'Interstellar' },
    { id: '3', title: 'The Dark Knight' },
    { id: '4', title: 'Memento' },
    { id: '5', title: 'Dunkirk' },
    { id: '6', title: 'Tenet' },
    { id: '7', title: 'The Prestige' },
    { id: '8', title: 'Batman Begins' },
    { id: '9', title: 'Oppenheimer' },
    { id: '10', title: 'The Matrix' },
    { id: '11', title: 'The Lord of the Rings' },
    { id: '12', title: 'The Hobbit' },
    { id: '13', title: 'Avengers: Endgame' },
    { id: '14', title: 'Iron Man' },
    { id: '15', title: 'Captain America' },
    { id: '16', title: 'Thor' },
    { id: '17', title: 'Black Panther' },
    { id: '18', title: 'Guardians of the Galaxy' },
    { id: '19', title: 'Doctor Strange' },
    { id: '20', title: 'Spider-Man: No Way Home' },
    { id: '21', title: 'Joker' },
    { id: '22', title: 'Deadpool' },
    { id: '23', title: 'Logan' },
    { id: '24', title: 'Shutter Island' },
    { id: '25', title: 'Fight Club' },
    { id: '26', title: 'Pulp Fiction' },
    { id: '27', title: 'Forrest Gump' },
    { id: '28', title: 'The Shawshank Redemption' },
    { id: '29', title: 'The Godfather' },
    { id: '30', title: 'The Social Network' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">🎬 Movies List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                href={`/movies/${movie.id}`}
                className="block bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-4 rounded-xl shadow-sm transition duration-300 text-center"
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

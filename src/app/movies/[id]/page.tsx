import React from 'react'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

const MovieDetails = async ({ params }: {params: {id: string}}) => {
  const movies = [
  {
    id: "1",
    title: "Inception",
    comments: 117,
    rating: 4.7,
    description: "A revolutionary film in terms of storytelling and direction.",
    commentsList: ["Best movie of the year!", "Totally worth the watch.", "Just wow!"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "2",
    title: "The Dark Knight",
    comments: 198,
    rating: 4.9,
    description: "A gripping superhero thriller with one of the best villain performances ever.",
    commentsList: ["Heath Ledger was legendary!", "Dark and intense.", "The best Batman movie!"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "3",
    title: "Interstellar",
    comments: 245,
    rating: 4.8,
    description: "An epic science fiction film exploring time, space, and love.",
    commentsList: ["Emotional and mind-bending.", "Hans Zimmer's score is incredible.", "Masterpiece."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "4",
    title: "Parasite",
    comments: 160,
    rating: 4.6,
    description: "A darkly comedic thriller exposing class divisions with shocking twists.",
    commentsList: ["Totally unexpected!", "Deserved the Oscar.", "So clever and tense."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "5",
    title: "The Matrix",
    comments: 187,
    rating: 4.7,
    description: "A groundbreaking sci-fi film that redefined visual storytelling.",
    commentsList: ["What is real?", "Changed action movies forever.", "Neo is iconic."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "6",
    title: "Gladiator",
    comments: 142,
    rating: 4.5,
    description: "A story of revenge, honor, and power in ancient Rome.",
    commentsList: ["Are you not entertained?", "Epic!", "Russell Crowe nailed it."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "7",
    title: "Forrest Gump",
    comments: 190,
    rating: 4.8,
    description: "A heartwarming journey through American history with an unlikely hero.",
    commentsList: ["Life is like a box of chocolates.", "So emotional!", "Perfect storytelling."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "8",
    title: "Fight Club",
    comments: 213,
    rating: 4.6,
    description: "An underground world of rebellion, identity, and chaos.",
    commentsList: ["You don't talk about Fight Club.", "Mind-blowing twist!", "Brilliant!"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "9",
    title: "Pulp Fiction",
    comments: 178,
    rating: 4.7,
    description: "A nonlinear crime story with unforgettable characters and dialogue.",
    commentsList: ["Tarantino's best!", "Iconic scenes!", "Loved the style."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "10",
    title: "The Shawshank Redemption",
    comments: 230,
    rating: 4.9,
    description: "A tale of hope, friendship, and freedom behind bars.",
    commentsList: ["Best movie ever!", "Truly inspiring.", "Unforgettable ending."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "11",
    title: "The Godfather",
    comments: 240,
    rating: 4.9,
    description: "A legendary crime saga of family and power.",
    commentsList: ["Classic mafia drama.", "Marlon Brando was amazing.", "An offer you can't refuse."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "12",
    title: "Whiplash",
    comments: 134,
    rating: 4.5,
    description: "An intense drama about ambition, obsession, and jazz.",
    commentsList: ["So intense!", "Incredible performances.", "Not quite my tempo."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "13",
    title: "The Social Network",
    comments: 115,
    rating: 4.4,
    description: "The rise of Facebook and the fall of friendships.",
    commentsList: ["Smart and sharp.", "Great screenplay!", "Jesse Eisenberg was perfect."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "14",
    title: "Joker",
    comments: 221,
    rating: 4.6,
    description: "A haunting descent into madness and isolation.",
    commentsList: ["Disturbing yet brilliant.", "Joaquin Phoenix was unreal!", "Chilling."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "15",
    title: "Titanic",
    comments: 300,
    rating: 4.5,
    description: "A romantic tragedy set against the backdrop of a historic disaster.",
    commentsList: ["So emotional!", "A timeless classic.", "Jack and Rose forever."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "16",
    title: "Avengers: Endgame",
    comments: 270,
    rating: 4.7,
    description: "The epic finale to the Infinity Saga of the Marvel Universe.",
    commentsList: ["Fan service done right.", "Emotional rollercoaster.", "I love you 3000."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "17",
    title: "WALL-E",
    comments: 150,
    rating: 4.6,
    description: "A heartwarming robot tale that speaks volumes without words.",
    commentsList: ["So cute and meaningful!", "A Pixar gem.", "Love the message."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "18",
    title: "Up",
    comments: 175,
    rating: 4.5,
    description: "An old man’s adventure and a young boy’s hope-filled journey.",
    commentsList: ["The opening scene broke me.", "So much heart.", "Beautiful animation."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "19",
    title: "Django Unchained",
    comments: 165,
    rating: 4.6,
    description: "A bold Western revenge tale with Tarantino flair.",
    commentsList: ["Jamie Foxx killed it.", "Intense and satisfying.", "Classic Tarantino!"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "20",
    title: "Coco",
    comments: 145,
    rating: 4.5,
    description: "A celebration of family, memory, and music.",
    commentsList: ["So colorful!", "Miguel's journey was beautiful.", "Remember me 😢"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "21",
    title: "La La Land",
    comments: 172,
    rating: 4.4,
    description: "A modern musical about dreams and heartbreak.",
    commentsList: ["Loved the visuals.", "Bittersweet ending.", "Music was amazing!"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "22",
    title: "The Revenant",
    comments: 138,
    rating: 4.3,
    description: "A brutal tale of survival and vengeance in the wilderness.",
    commentsList: ["Leonardo DiCaprio was raw.", "Beautifully shot.", "Tense and gripping."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "23",
    title: "The Prestige",
    comments: 182,
    rating: 4.6,
    description: "Two rival magicians battle with obsession and deception.",
    commentsList: ["Nolan does it again!", "So clever!", "That twist though!"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "24",
    title: "Her",
    comments: 122,
    rating: 4.2,
    description: "A romantic sci-fi film about love in a digital world.",
    commentsList: ["Unique and beautiful.", "Touching and sad.", "Joaquin Phoenix shines."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "25",
    title: "The Lion King",
    comments: 190,
    rating: 4.7,
    description: "A coming-of-age animated classic with unforgettable songs.",
    commentsList: ["Hakuna Matata!", "So nostalgic!", "Circle of life hits hard."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "26",
    title: "Toy Story",
    comments: 160,
    rating: 4.5,
    description: "The toys come to life in Pixar’s debut masterpiece.",
    commentsList: ["To infinity and beyond!", "Buzz and Woody are iconic.", "So imaginative."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "27",
    title: "Blade Runner 2049",
    comments: 140,
    rating: 4.3,
    description: "A visually stunning sci-fi mystery exploring identity and existence.",
    commentsList: ["Gorgeous visuals.", "Slow burn, but worth it.", "Loved the mood."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "28",
    title: "1917",
    comments: 130,
    rating: 4.4,
    description: "A one-shot war epic with thrilling tension and heart.",
    commentsList: ["So immersive!", "Loved the cinematography.", "Edge-of-your-seat experience."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "29",
    title: "The Grand Budapest Hotel",
    comments: 110,
    rating: 4.3,
    description: "A quirky and stylish story full of charm and color.",
    commentsList: ["Wes Anderson's best!", "So whimsical.", "Loved the aesthetic."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    id: "30",
    title: "Everything Everywhere All At Once",
    comments: 200,
    rating: 4.8,
    description: "A multiverse story bursting with emotion, action, and originality.",
    commentsList: ["Crazy and beautiful!", "Oscar-worthy!", "Absolutely wild ride."],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  }
];


  const movie = movies.find((movie) => movie.id === params.id)

  if (!movie) return <div className="text-center text-red-600 mt-10">Movie not found</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <Image
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-96 object-cover object-center shadow-md"
        />

        <div className="p-8">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            {movie.title}
          </h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {movie.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-medium">Rating:</span>
              <div className="flex items-center gap-2 text-yellow-500">
                <FaStar />
                <span className="text-lg font-semibold text-gray-800">{movie.rating}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-medium">Comments:</span>
              <span className="text-lg font-semibold text-gray-800">{movie.comments} comments</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">💬 Viewer Comments</h3>
            <ul className="space-y-3">
              {movie.commentsList.map((comment, index) => (
                <li
                  key={index}
                  className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
                >
                  <p className="text-gray-700">{comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails

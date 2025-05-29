// This is a basic structure for your homepage.

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Welcome to Madinah Book Grammar Rules</h1>
      <p className="text-lg text-center mb-8">Your journey to understanding Arabic grammar starts here.</p>
      {/* Add your homepage content here. For example, links to lessons, introduction, etc. */}
      <div className="flex justify-center">
        {/* Example: Link to a lessons overview page if you have one */}
        {/* <a href="/lessons" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Lessons
        </a> */}
      </div>
    </div>
  )
}

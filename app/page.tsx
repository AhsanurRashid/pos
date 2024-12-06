import Link from "next/link"

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/shop" className="bg-blue-700/50 text-white px-4 py-2 rounded shadow-sm">Shop</Link>
    </div>
  )
}

export default Home

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* Header */}
      <header className="border-b border-zinc-300 dark:border-zinc-800">
        <div className="px-6 py-6">
          <h1 className="text-3xl font-bold">
            Gabriel Tech
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Frontend Developer · React · JavaScript
          </p>
        </div>

        {/* Navbar */}
        <Navbar />
      </header>

      {/* Page Content Placeholder */}
      <main className="px-6 py-10">
        <p className="text-zinc-700 dark:text-zinc-300">
          Home page content goes here.
        </p>
      </main>

    </div>
  )
}


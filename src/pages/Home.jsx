import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

      <Header title="Gabriel Tech" subtitle="Frontend Developer · React · JavaScript"/>

      <main className="flex-grow px-6 py-10">
        <p className="text-zinc-700 dark:text-zinc-300">
          Home page content goes here.
        </p>
      </main>

      <Footer />
    </div>
  )
}
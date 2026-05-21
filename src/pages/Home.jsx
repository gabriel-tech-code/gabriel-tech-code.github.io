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
      <BodyGrid
        rows={1}
        cols={2}
        items={[
          <p className="text-zinc-700 dark:text-zinc-300">
            This is a paragraph example. You can place any text here.
          </p>,
          <img src="/path/to/Cyan_Logo.png" className="w-full h-auto" />
        ]}
      />
      <Footer />
    </div>
  )
}
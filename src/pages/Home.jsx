import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGrid from '../components/BodyGrid'
import CyanLogo from '../assets/images/Cyan_Logo.png'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

      <Header title="Gabriel Tech" subtitle="Frontend Developer · React · JavaScript"/>

      <main className="flex-grow px-6 py-10 space-y-10">

        {/* First section */}
        <BodyGrid
          rows={1}
          cols={2}
          items={[
            <p>Paragraph content here...</p>,
            <img src={CyanLogo} alt="Gabriel Tech Logo" className="hidden w-auto h-20 dark:block"/>
          ]}
        />

        {/* Second section */}
        <BodyGrid
          rows={1}
          cols={1}
          items={[
            <p>Another section with different layout...</p>
          ]}
        />

      </main>
      <Footer />
    </div>
  )
}
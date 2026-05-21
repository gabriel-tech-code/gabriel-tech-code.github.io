import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGrid from '../components/BodyGrid'
import CyanLogo from '../assets/images/Cyan_Logo.png'
import TopicBock from '../components/TopicBock'

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
            <TopicBlock title="About Me">
              I am a frontend developer who loves React and Tailwind.
            </TopicBlock>,
            <img src={CyanLogo} alt="Gabriel Tech Logo"/>
          ]}
        />

        {/* Second section */}
        <BodyGrid
          rows={1}
          cols={1}
          items={[
            <p className="text-zinc-800 dark:text-zinc-200">
              This text is dark in light mode and light in dark mode.
            </p>
          ]}
        />

      </main>
      <Footer />
    </div>
  )
}
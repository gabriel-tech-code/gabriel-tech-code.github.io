import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGrid from '../components/BodyGrid'
import TopicBlock from '../components/TopicBlock'

export default function UTRGV() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

      <Header title="UTRGV" subtitle="Building, Learning, and Leveling Up"/>

      <main className="flex-grow px-6 py-10 space-y-10">
        
      </main>
      <Footer />
    </div>
  )
}
import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGridGray from '../components/BodyGridGray'
import TopicBlock from '../components/TopicBlock'
import MarkdownReader from "../components/MarkdownReader"

export default function Revature() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

      <Header title="Revature" subtitle="Building, Learning, and Leveling Up"/>

      <main className="flex-grow px-6 py-10 space-y-10 ">
        <BodyGridGray
        items={[
          <MarkdownReader url="https://raw.githubusercontent.com/gabriel-tech-code/content/main/profiles/revature.md" />     
        ]}
        />
      </main>
      <Footer />
    </div>
  )
}
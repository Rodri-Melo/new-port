'use client'
import { Header } from '@/components/Headercomponents'
import { Footer } from '@/components/Footercomponents'
import { Contact } from '@/components/Contactcomponents'
import { Skills } from '@/components/Skillscomponents'
import { About } from '@/components/Aboutcomponents'
import { Project } from '@/components/Projectcomponents'
import { Main } from '@/components/Maincomponents'
import ScrollToTopButton from '@/components/ScrollToTopButtoncomponents'

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <Main />
        <section id="sobre">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

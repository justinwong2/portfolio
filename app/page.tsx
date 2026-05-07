import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { SectionHeader } from '@/components/section-header';
import { ExperiencesGrid } from '@/components/experiences/experiences-grid';
import { ProjectsGrid } from '@/components/projects/projects-grid';
import { PhotoCarousel } from '@/components/photos/photo-carousel';
import { MessageBoard } from '@/components/messages/message-board';
import { Footer } from '@/components/footer';
import { experiences } from '@/data/experiences';
import { projects } from '@/data/projects';
import { photos } from '@/data/photos';
import { mockMessages } from '@/data/messages';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Experience Section */}
        <section id="experience" className="section-divider">
          <SectionHeader number="01" title="EXPERIENCE" count={experiences.length} />
          <ExperiencesGrid />
        </section>

        {/* Work Section */}
        <section id="work" className="section-divider">
          <SectionHeader number="02" title="SELECTED WORK / PROJECTS" count={projects.length} />
          <ProjectsGrid />
        </section>

        {/* Field Notes Section */}
        <section id="field-notes" className="section-divider">
          <SectionHeader number="03" title="FIELD NOTES" count={photos.length} />
          <PhotoCarousel />
        </section>

        {/* Messages Section */}
        <section id="messages" className="section-divider">
          <SectionHeader number="04" title="MESSAGES" count={mockMessages.length} />
          <MessageBoard />
        </section>

        <Footer />
      </main>
    </>
  );
}

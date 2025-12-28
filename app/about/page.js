// app/about/page.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-ees-900 mb-8 border-b-4 border-ees-500 pb-4 inline-block">
          About EES
        </h1>
        
        {/* Main Content from Scraping */}
        <div className="prose prose-lg text-slate-700 leading-8 space-y-6 text-justify">
          <p>
            The Department of Electrical Engineering at IIEST, Shibpur (formerly Bengal Engineering and Science University) has been a pioneer in engineering education since its inception.
            <br /><br />
            <strong>Electrical Engineers' Society (EES)</strong> is a segment of the Department of Electrical Engineering of IIEST Shibpur. 
            It is an independent organization of students, teachers, and several dilettantes in and around Kolkata.
            <br /><br />
            Our goal is to foster a healthy interaction among all members so that they can flourish and develop not just academically, but culturally and socially.
          </p>

          <h2 className="text-2xl font-bold text-ees-700 mt-8">Our Vision</h2>
          <p>
             To be a centre of excellence in education and research producing global leaders in science, technology and management.
          </p>

          {/* You can add more text here from your text_content.txt file */}
        </div>
      </div>
      <Footer />
    </div>
  )
}
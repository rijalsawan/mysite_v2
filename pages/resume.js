import Head from 'next/head';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Printer } from 'lucide-react';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Sawan Rijal - Resume</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen bg-background text-foreground py-10 print:py-0 print:bg-white print:text-black">
        {/* Print Button (Hidden when printing) */}
        <div className="max-w-[850px] mx-auto mb-6 flex justify-between items-center px-4 print:hidden">
          <Link href="/" className="border-2 border-foreground px-4 py-2 font-bold hover:bg-foreground hover:text-background transition-colors">
            &larr; BACK TO PORTFOLIO
          </Link>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-primary text-primary-foreground border-2 border-foreground px-4 py-2 font-bold shadow-[4px_4px_0px_currentColor] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_currentColor] transition-all"
          >
            <Printer size={18} />
            PRINT / SAVE PDF
          </button>
        </div>

        {/* Resume Sheet */}
        <div className="max-w-[850px] mx-auto bg-card text-card-foreground border-4 border-foreground shadow-[12px_12px_0px_currentColor] print:shadow-none print:border-none print:max-w-none print:w-full print:p-0 p-8 sm:p-12 relative">
          
          {/* Header */}
          <header className="border-b-4 border-foreground print:border-b-2 print:border-black pb-6 mb-6">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-2">Sawan Rijal</h1>
            <h2 className="text-xl sm:text-2xl font-bold text-primary print:text-black mb-4">
              Full-Stack Developer | Applied Computer Science Graduate
            </h2>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <span className="flex items-center gap-1"><MapPin size={16} /> Winnipeg, MB</span>
              <a href="mailto:rijalsawan@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail size={16} /> rijalsawan@gmail.com
              </a>
              <a href="https://mysite-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Globe size={16} /> sawan.dev
              </a>
              <a href="https://linkedin.com/in/sawan-rijal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/rijalsawan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Github size={16} /> GitHub
              </a>
            </div>
          </header>

          {/* Details */}
          <div className="space-y-6">
            
            {/* Summary */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-wide border-b-4 border-foreground print:border-b-2 print:border-black inline-block mb-3">Summary</h3>
              <p className="font-medium text-sm leading-relaxed">
                Full-Stack Developer with expertise in React, Next.js, Node.js, and TypeScript. Proven ability to build scalable web applications with modern technologies including PostgreSQL, MongoDB, and cloud services. Strong foundation in software development lifecycle, API design, and responsive UI/UX implementation.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-wide border-b-4 border-foreground print:border-b-2 print:border-black inline-block mb-3">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 text-sm font-medium">
                <div className="font-black uppercase">Languages:</div>
                <div>JavaScript, TypeScript, Java, Python</div>
                
                <div className="font-black uppercase">Frontend:</div>
                <div>React.js, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Design</div>
                
                <div className="font-black uppercase">Backend:</div>
                <div>Node.js, Express.js, RESTful APIs, Authentication, WebSocket</div>
                
                <div className="font-black uppercase">Databases:</div>
                <div>PostgreSQL, MongoDB, Prisma ORM</div>
                
                <div className="font-black uppercase">Cloud & Tools:</div>
                <div>Vercel, Railway, Stripe, Clerk Auth, Git, Agile Development</div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-wide border-b-4 border-foreground print:border-b-2 print:border-black inline-block mb-3">Projects</h3>
              <div className="space-y-4">
                
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-black">Mo:Mo Station – E-commerce Platform</h4>
                  </div>
                  <div className="text-sm font-bold opacity-80 mb-2">Next.js, PostgreSQL, Stripe, NextAuth, Tailwind CSS</div>
                  <ul className="list-disc list-inside text-sm font-medium space-y-1 ml-2 marker:text-primary print:marker:text-black">
                    <li>Built a modern e-commerce platform with a clean design and seamless shopping experience.</li>
                    <li>Implemented secure user authentication with Google OAuth/NextAuth and efficient order management.</li>
                    <li>Integrated Stripe payment processing and Framer Motion for interactive UI elements.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-black">LensBook – Social Media App</h4>
                  </div>
                  <div className="text-sm font-bold opacity-80 mb-2">Next.js, TypeScript, PostgreSQL, WebSocket</div>
                  <ul className="list-disc list-inside text-sm font-medium space-y-1 ml-2 marker:text-primary print:marker:text-black">
                    <li>Developed full-stack social media application with real-time messaging and photo sharing capabilities.</li>
                    <li>Implemented real-time notifications system with 75% improved performance through optimized database queries.</li>
                    <li>Built responsive mobile-first design with Instagram-like UI animations using Framer Motion.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-black">StoreIt – SAAS Cloud Storage App</h4>
                  </div>
                  <div className="text-sm font-bold opacity-80 mb-2">React, Node.js, Express, PostgreSQL</div>
                  <ul className="list-disc list-inside text-sm font-medium space-y-1 ml-2 marker:text-primary print:marker:text-black">
                    <li>Created scalable cloud storage platform with file upload/download and subscription management.</li>
                    <li>Integrated Stripe billing system with tiered plans (FREE/PRO/BUSINESS) and Backblaze B2 storage.</li>
                    <li>Implemented secure authentication with JWT tokens and automated storage limit enforcement.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-black">Phantom Driving School – Management Platform</h4>
                  </div>
                  <div className="text-sm font-bold opacity-80 mb-2">Next.js, TypeScript, Prisma</div>
                  <ul className="list-disc list-inside text-sm font-medium space-y-1 ml-2 marker:text-primary print:marker:text-black">
                    <li>Built comprehensive lesson management system with admin dashboard and real-time analytics.</li>
                    <li>Developed booking system with automated scheduling and payment processing capabilities.</li>
                    <li>Created multi-role interface with student progress tracking and revenue reporting features.</li>
                  </ul>
                </div>

              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1">
              {/* Experience */}
              <section>
                <h3 className="text-2xl font-black uppercase tracking-wide border-b-4 border-foreground print:border-b-2 print:border-black inline-block mb-3">Experience</h3>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-black leading-tight">Direct Support Professional</h4>
                  </div>
                  <div className="text-sm font-bold opacity-80 mb-2">Pulford Community Living Services | Jun 2022 - Present</div>
                  <ul className="list-disc list-inside text-sm font-medium space-y-1 ml-2 marker:text-primary print:marker:text-black">
                    <li>Provided essential care to individuals, fostering a supportive environment.</li>
                    <li>Maintained precise documentation and collaborated with interdisciplinary teams.</li>
                    <li>Demonstrated reliability, compassion, and strong communication in high-responsibility situations.</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-2xl font-black uppercase tracking-wide border-b-4 border-foreground print:border-b-2 print:border-black inline-block mb-3">Education</h3>
                <div>
                  <h4 className="text-lg font-black leading-tight">BSc. Applied Computer Science</h4>
                  <div className="text-sm font-bold opacity-80 mb-2">University of Winnipeg | 2022 - 2025</div>
                  <div className="text-sm font-medium">
                    <span className="font-black">Coursework:</span> Data Structures & Algorithms, Software Engineering, Database Management, Web Development
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

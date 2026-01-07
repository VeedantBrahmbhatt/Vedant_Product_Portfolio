import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm Vedant,<br />A Product Manager
        </h1>
        <p className="text-lg block text-slate-500">I work extensively in AI and AI Products.</p>
        <a href="/assets/resume/Vedant Brahmbhatt.pdf"
          className="bg-accent-1 hover:bg-white hover:text-accent-1 border border-accent-1 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-6 inline-block"
        >
          Download Resume
        </a>
      </div>
      <Image title={"Vedant"} src={"/assets/posts/authors/Gemini_Generated_Image_eyzeopeyzeopeyze.png"} height={295} width={293}
      />
    </section>
  )
}

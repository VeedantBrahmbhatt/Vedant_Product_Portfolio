import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

const About = () => {
    return (
            <>
              <Layout>
                <Container>
                  <Header />
                </Container>
                <div className="bg-sky-50 pt-16 pb-16">
                  <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div>
                        <Image title={"PM Vedant"} src={"/assets/about/Gemini_Generated_Image_ulk0inulk0inulk0.png"} height={295} width={293} />
                      </div>
                      <div className="md:pr-8 md:col-span-2">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-12">
                         I Build Products.
                        </h1>
                        <p className="text-lg block text-slate-500 mb-4">I’m a product manager with a strong technical background who enjoys turning ambiguous problems into clear, scalable product solutions.
                         </p>
                          <p className="text-lg block text-slate-500 mb-4">I’ve worked across the full product lifecycle understanding user and stakeholder needs, shaping problem statements, defining requirements, prioritizing roadmaps, and working closely with engineering and design teams to bring ideas to life. I’m comfortable balancing user experience, technical trade-offs, and business goals, especially while building AI-driven and platform products where complexity is the norm.
                          {/* Exercitation veniam consequat sunt nostrud amet.</p> */}</p>
                          <p className="text-lg block text-slate-500 mb-4">What excites me most about product management is the process of making good decisions under uncertainty. I value clarity, strong execution, and measurable impact, and I’m constantly iterating based on data, feedback, and real-world usage. For me, great product work happens when teams are aligned around a shared vision and empowered to build something meaningful.
                          {/* Exercitation veniam consequat sunt nostrud amet.</p> */}</p>
                      </div>
                    </div>
                  </Container>
              </div>
              </Layout>
            </>
        //   )

    );
}

export default About;
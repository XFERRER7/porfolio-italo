'use client'
import { About } from "@/components/About"
import { LanguageCard } from "@/components/LanguageCard"
import { LinkedinCard } from "@/components/LinkedinCard"
import { ProductCard } from "@/components/ProductCard"
import { Navbar } from "@/components/Navbar"
import { RecentWork } from "@/components/RecentWork"
import { TechnologyCard } from "@/components/TechnologyCard"
import { AppCard } from "@/components/AppCard"
import { Recomendations } from "@/components/Recomendations"
import { Footer } from "@/components/Footer"


export default function Home() {
  return (
    <main className="min-h-screen flex w-full lg:px-16 px-5 pg:py-20 py-5 mx-auto">

      <div className="h-full w-full flex flex-col gap-5 bg-[#070707] overflow-hidden">

        <Navbar />

        <About />

        <div className="lg:grid lg:grid-cols-2 gap-12">

          <div className="flex flex-col lg:gap-5 gap-3 text-lg">

            <RecentWork />

            <div className="lg:hidden flex flex-col lg:gap-5 gap-3">

              <LanguageCard />

              <div className="flex gap-5">
                <TechnologyCard name="IOS Developer" mustApplyReverseGradient={false}/>
                <TechnologyCard name="Android Developer" mustApplyReverseGradient={true}/>
              </div>

            </div>

            <ProductCard />

          </div>


          <div className="flex flex-col lg:gap-5 gap-3 text-lg text-white lg:mt-0 mt-5">
            
            <div className="hidden lg:flex flex-col gap-5">
              <LanguageCard />

              <div className="flex gap-5">
                <TechnologyCard name="IOS Developer" mustApplyReverseGradient={false}/>
                <TechnologyCard name="Android Developer" mustApplyReverseGradient={true}/>
              </div>
            </div>

            <LinkedinCard />

            <AppCard />

          </div>

        </div>

        <Recomendations />

        <Footer />

      </div>

    </main>
  )
}

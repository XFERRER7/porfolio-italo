import { About } from "@/components/About"
import { LanguageCard } from "@/components/LanguageCard"
import { LinkedinCard } from "@/components/LinkedinCard"
import { ProductCard } from "@/components/ProductCard"
import { Navbar } from "@/components/Navbar"
import { RecentWork } from "@/components/RecentWork"
import { TechnologyCard } from "@/components/TechnologyCard"
import { AppCard } from "@/components/AppCard"
import { RecomendationsCard } from "@/components/RecomendationsCard"
import { Footer } from "@/components/Footer"


export default function Home() {
  return (
    <main className="min-h-screen flex w-full px-16 py-20 mx-auto">

      <div className="h-full w-full flex flex-col gap-5 bg-[#070707]">

        <Navbar />

        <About />


        <div className="grid grid-cols-2 gap-12">

          <div className="flex flex-col gap-5 text-lg">

            <RecentWork />

            <ProductCard />

          </div>


          <div className="flex flex-col gap-5 text-lg text-white">

            <LanguageCard />

            <div className="flex gap-5">
              <TechnologyCard name="IOS Developer"/>
              <TechnologyCard name="Android Developer"/>
            </div>

            <LinkedinCard />

            <AppCard />

          </div>

        </div>
        
        <RecomendationsCard />

        <Footer />
        
      </div>

    </main>
  )
}

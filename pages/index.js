import Image from "next/image";
import { Inter } from "next/font/google";
import Head from 'next/head'
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData , cardsData}) {
  return (
    <div>
      <Head>
        <title>
          Chevo's Airbnb
        </title>
      </Head>
      <Header />
      <Banner />
      {/* Figure out how sm and lg work*/}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold p-5">
            Explore Nearby
          </h2>

          {/* Pull some data from a server - API endpoints*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4">
            {exploreData?.map(({img, distance, location}) => (
              <SmallCard 
              key={img}
              img={img} 
              location={location} 
              distance={distance} />
            ))}
          </div> 
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide
           p-3 -ml-3">
          {
            cardsData?.map(item => {
              return (
                <MediumCard key={item.img} img={item.img} title={item.title} />
              )
            })
          }
          </div>
        </section>
        <LargeCard 
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description = "Wishlists curated by Airbnb"
        buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").
  then(
    (res)=> res.json()
  );
  return {
    props :{
      exploreData,
      cardsData,
    }
  }
}


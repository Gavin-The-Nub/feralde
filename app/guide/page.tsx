"use client";

import { ArrowLeft, Book, Clock, Palette, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menFragrances = [
  {
    scent: "BERLIN",
    inspiredBy: "ECLAT D'ARPEGE BY LANVIN",
    accords: "CITRUS, WOODY, OZONIC",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "SUPREMACY",
    inspiredBy: "ULTRA MALE BY JPG",
    accords: "VANILLA, FRUITY, SWEET",
    whenToWear: "NIGHT / COLD WEATHER",
  },
  {
    scent: "PROFESSOR",
    inspiredBy: "BLEU DE CHANEL",
    accords: "WOODY, CITRUS, GREEN",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "INTENSELY",
    inspiredBy: "STRONGER WITH YOU INTENSELY",
    accords: "VANILLA / SWEET / AMBER",
    whenToWear: "NIGHT / COLD WEATHER",
  },
  {
    scent: "CHIVALRY",
    inspiredBy: "AVENTUS HYBRID (OWN BLEND)",
    accords: "FRUITY, WOODY, SMOKY",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "VALOR",
    inspiredBy: "SOUND OF THE BRAVE BY DIESEL",
    accords: "WOODY, CITRUS, AROMATIC",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "HORUS",
    inspiredBy: "EROS BY VERSACE",
    accords: "VANILLA, AROMATIC, MINTY",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "DODGE",
    inspiredBy: "ACQUA DI GIO PROFUMO",
    accords: "AROMATIC, MARINE, CITRUS",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "SEMPITERNAL",
    inspiredBy: "CLINIQUE HAPPY",
    accords: "AROMATIC, GREEN, CITRUS",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "EMPEROR",
    inspiredBy: "INVICTUS AQUA",
    accords: "AMBER, MARINE, CITRUS",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "ICONIC",
    inspiredBy: "LE MALE BY JPG",
    accords: "VANILLA, POWDERY, SWEET",
    whenToWear: "NIGHT / COLD WEATHER",
  },
  {
    scent: "OPULENT",
    inspiredBy: "COOL WATER BY DAVIDOFF",
    accords: "AROMATIC, GREEN, MARINE",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "ELIXIR",
    inspiredBy: "SAUVAGE ELIXIR BY DIOR",
    accords: "WARM & FRESH SPICY",
    whenToWear: "OCCASIONALLY",
  },
  {
    scent: "LME",
    inspiredBy: "LE MALE ELIXIR BY JPG",
    accords: "VANILLA, HONEY, TOBACCO",
    whenToWear: "NIGHT / COLD WEATHER",
  },
  {
    scent: "BACCARAT (U)",
    inspiredBy: "BACCARAT ROUGE 540",
    accords: "SWEET / WOODY / AMBER",
    whenToWear: "NIGHT / COLD WEATHER",
  },
];

const womenFragrances = [
  {
    scent: "BELLA",
    inspiredBy: "ECLAT POUR FEMME BY LANVIN",
    accords: "FLORAL, FRESH, GREEN",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "IMPERIAL",
    inspiredBy: "PARIS HILTON BY PARIS HILTON",
    accords: "FRUITY, FRESH, FLORAL",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "JAMAL",
    inspiredBy: "BARE VANILLA BY VS",
    accords: "VANILLA, POWDERY, WOODY",
    whenToWear: "NIGHT / COLD WEATHER",
  },
  {
    scent: "RADIANCE",
    inspiredBy: "MEOW BY KATY PERRY",
    accords: "VANILLA, FRUITY, SWEET",
    whenToWear: "NIGHT / COLD WEATHER",
  },
  {
    scent: "GOOD GIRL",
    inspiredBy: "GOOD GIRL BY CH",
    accords: "SWEET, VANILLA, ALMOND",
    whenToWear: "NIGHT / COLD WEATHER",
  },
];

const tpcCollaboration = [
  {
    scent: "VERIFIED",
    inspiredBy: "BVLGARI EXTREME",
    accords: "CITRUS, WOODY, AROMATIC",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "NARCISSUS",
    inspiredBy: "GUCCI GUILTY",
    accords: "CITRUS, WOODY, LAVENDER",
    whenToWear: "DAILY / ANYTIME",
  },
  {
    scent: "HERACLES",
    inspiredBy: "POLO SPORT",
    accords: "AROMATIC, FRESH, CITRUS",
    whenToWear: "DAILY / ANYTIME",
  },
];

const getAccordColor = (accord: string) => {
  const colors: { [key: string]: string } = {
    CITRUS: "bg-yellow-100 text-yellow-800",
    WOODY: "bg-amber-100 text-amber-800",
    VANILLA: "bg-purple-100 text-purple-800",
    FRUITY: "bg-pink-100 text-pink-800",
    FLORAL: "bg-rose-100 text-rose-800",
    AROMATIC: "bg-green-100 text-green-800",
    MARINE: "bg-blue-100 text-blue-800",
    SWEET: "bg-orange-100 text-orange-800",
    AMBER: "bg-yellow-100 text-yellow-800",
    GREEN: "bg-emerald-100 text-emerald-800",
    SPICY: "bg-red-100 text-red-800",
    POWDERY: "bg-violet-100 text-violet-800",
    MINTY: "bg-cyan-100 text-cyan-800",
    HONEY: "bg-amber-100 text-amber-800",
    TOBACCO: "bg-stone-100 text-stone-800",
    OZONIC: "bg-sky-100 text-sky-800",
    SMOKY: "bg-gray-100 text-gray-800",
    FRESH: "bg-teal-100 text-teal-800",
    WARM: "bg-orange-100 text-orange-800",
    ALMOND: "bg-yellow-100 text-yellow-800",
  };
  return colors[accord] || "bg-gray-100 text-gray-800";
};

const getWearColor = (wear: string) => {
  if (wear.includes("DAILY")) return "bg-green-100 text-green-800";
  if (wear.includes("NIGHT")) return "bg-indigo-100 text-indigo-800";
  if (wear.includes("OCCASIONALLY")) return "bg-purple-100 text-purple-800";
  return "bg-gray-100 text-gray-800";
};

function FragranceTable({
  title,
  fragrances,
}: {
  title: string;
  fragrances: typeof menFragrances;
}) {
  return (
    <div className="mb-16">
      {/* Section Title - simple, luxurious */}
      <h2 className="text-2xl font-light tracking-widest text-gray-900 mb-8 uppercase">
        {title}
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Table Header - simple, spaced, uppercase */}
        <div className="bg-gray-50 px-8 py-4 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-light text-gray-700 tracking-widest uppercase">
            <div>Scent</div>
            <div>Inspired By</div>
            <div>Accords</div>
            <div>When To Wear</div>
          </div>
        </div>
        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {fragrances.map((fragrance, index) => (
            <div
              key={index}
              className="px-8 py-6 hover:bg-gray-50/50 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                {/* Scent Name */}
                <div className="font-medium text-gray-900 tracking-wide">
                  {fragrance.scent}
                </div>
                {/* Inspired By */}
                <div className="text-sm text-gray-600 leading-relaxed">
                  {fragrance.inspiredBy}
                </div>
                {/* Accords */}
                <div className="flex flex-wrap gap-2">
                  {fragrance.accords.split(", ").map((accord, accordIndex) => (
                    <span
                      key={accordIndex}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${getAccordColor(
                        accord.trim()
                      )}`}
                    >
                      {accord.trim()}
                    </span>
                  ))}
                </div>
                {/* When to Wear */}
                <div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${getWearColor(
                      fragrance.whenToWear
                    )}`}
                  >
                    {fragrance.whenToWear}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link
                href="/collection"
                className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wider font-light">
                  BACK TO COLLECTION
                </span>
              </Link>
            </div>
            <Link
              href="/"
              className="text-sm tracking-wider text-gray-500 hover:text-black transition-colors"
            >
              HOME
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
            Find Your Perfect Fragrance
          </h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            Discover our complete collection of luxury-inspired fragrances. Each
            scent is carefully crafted to capture the essence of iconic
            perfumes, offering you premium quality at accessible prices.
          </p>
        </div>

        {/* TPC Collaboration */}
        <FragranceTable
          title="TPC COLLABORATION SCENTS"
          fragrances={tpcCollaboration}
        />

        {/* Men's Collection */}
        <FragranceTable title="MEN'S COLLECTION" fragrances={menFragrances} />

        {/* Women's Collection */}
        <FragranceTable
          title="WOMEN'S COLLECTION"
          fragrances={womenFragrances}
        />

        {/* Fragrance Tips Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Not all scent is remembered.
                <br />
                But yours should be.
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-extralight">
                Here are{" "}
                <span className="font-semibold">
                  3 fragrance tips every man should know
                </span>{" "}
                — whether you're wearing{" "}
                <span className="font-semibold">FERALDE</span> or any other
                scent, these will change the way you wear your presence.
              </p>
            </div>

            {/* Tips Images - Single Column */}
            <div className="space-y-8">
              {/* Tip 1 */}
              <div className="relative w-full rounded-2xl overflow-hidden flex justify-center">
                <Image
                  src="/t1.jpg"
                  alt="Fragrance Tip 1"
                  width={800}
                  height={500}
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Tip 2 */}
              <div className="relative w-full rounded-2xl overflow-hidden flex justify-center">
                <Image
                  src="/t2.jpg"
                  alt="Fragrance Tip 2"
                  width={800}
                  height={500}
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Tip 3 */}
              <div className="relative w-full rounded-2xl overflow-hidden flex justify-center">
                <Image
                  src="/t3.jpg"
                  alt="Fragrance Tip 3"
                  width={800}
                  height={500}
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Additional Image 4 */}
              <div className="relative w-full rounded-2xl overflow-hidden flex justify-center">
                <Image
                  src="/t4.jpg"
                  alt="Fragrance Tip 4"
                  width={800}
                  height={500}
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Additional Image 5 */}
              <div className="relative w-full rounded-2xl overflow-hidden flex justify-center">
                <Image
                  src="/t5.jpg"
                  alt="Fragrance Tip 5"
                  width={800}
                  height={500}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

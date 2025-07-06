"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ArrowLeft, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";

// Product data with shopping links
const menProducts = [
  {
    name: "BERLIN",
    inspired: "Eclat D'Arpege by Lanvin",
    image: "/c5.webp",
    links: {
      lazada:
        "https://www.lazada.com.ph/products/pdp-i4921243698-s28673914213.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A4921243698%253Bsrc%253ALazadaMainSrp%253Brn%253Ace5a287e56b234522b0f4e47291fa518%253Bregion%253Aph%253Bsku%253A4921243698_PH%253Bprice%253A369%253Bclient%253Adesktop%253Bsupplier_id%253A501253520510%253Bbiz_source%253Ah5_pdp%253Bslot%253A2%253Butlog_bucket_id%253A470687%253Basc_category_id%253A24118%253Bitem_id%253A4921243698%253Bsku_id%253A28673914213%253Bshop_id%253A5601286%253BtemplateInfo%253A107881_D_E%25231103_L%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Rizal&price=369&priceCompare=skuId%3A28673914213%3Bsource%3Alazada-search-voucher%3Bsn%3Ace5a287e56b234522b0f4e47291fa518%3BoriginPrice%3A36900%3BdisplayPrice%3A36900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1751814083068&ratingscore=5.0&request_id=ce5a287e56b234522b0f4e47291fa518&review=54&sale=181&search=1&source=search&spm=a2o4l.searchlistbrand.list.2&stock=1",
      tiktok: "https://tiktok.com/@luxeperfumes/berlin",
      shopee:
        "https://shopee.ph/BERLIN-FERALDE-PERFUME-(ECLAT-MEN)-i.41735247.24374202778",
    },
  },
  {
    name: "SUPREMACY",
    inspired: "Ultra Male by JPG",
    image: "/c4.webp",
    links: {
      lazada:
        "https://www.lazada.com.ph/products/pdp-i4921414576-s28673877494.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A4921414576%253Bsrc%253ALazadaMainSrp%253Brn%253Ace5a287e56b234522b0f4e47291fa518%253Bregion%253Aph%253Bsku%253A4921414576_PH%253Bprice%253A379%253Bclient%253Adesktop%253Bsupplier_id%253A501253520510%253Bbiz_source%253Ah5_pdp%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A24118%253Bitem_id%253A4921414576%253Bsku_id%253A28673877494%253Bshop_id%253A5601286%253BtemplateInfo%253A107881_D_E%25231103_L%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Rizal&price=379&priceCompare=skuId%3A28673877494%3Bsource%3Alazada-search-voucher%3Bsn%3Ace5a287e56b234522b0f4e47291fa518%3BoriginPrice%3A37900%3BdisplayPrice%3A37900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1751814083068&ratingscore=4.987096774193549&request_id=ce5a287e56b234522b0f4e47291fa518&review=155&sale=408&search=1&source=search&spm=a2o4l.searchlistbrand.list.0&stock=1",
      tiktok: "https://tiktok.com/@luxeperfumes/supremacy",
      shopee:
        "https://shopee.ph/SUPREMACY-FERALDE-PERFUME-(ULTRAMALE)-i.41735247.25974248419",
    },
  },
  {
    name: "PROFESSOR",
    inspired: "Bleu de Chanel",
    image: "/p1.webp",
    links: {
      lazada:
        "https://www.lazada.com.ph/products/pdp-i4921414582-s28673768536.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A4921414582%253Bsrc%253ALazadaMainSrp%253Brn%253Ace5a287e56b234522b0f4e47291fa518%253Bregion%253Aph%253Bsku%253A4921414582_PH%253Bprice%253A369%253Bclient%253Adesktop%253Bsupplier_id%253A501253520510%253Bbiz_source%253Ah5_pdp%253Bslot%253A3%253Butlog_bucket_id%253A470687%253Basc_category_id%253A24118%253Bitem_id%253A4921414582%253Bsku_id%253A28673768536%253Bshop_id%253A5601286%253BtemplateInfo%253A107881_D_E%25231103_L%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Rizal&price=369&priceCompare=skuId%3A28673768536%3Bsource%3Alazada-search-voucher%3Bsn%3Ace5a287e56b234522b0f4e47291fa518%3BoriginPrice%3A36900%3BdisplayPrice%3A36900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1751814083068&ratingscore=5.0&request_id=ce5a287e56b234522b0f4e47291fa518&review=33&sale=105&search=1&source=search&spm=a2o4l.searchlistbrand.list.3&stock=1",
      tiktok: "https://tiktok.com/@luxeperfumes/professor",
      shopee:
        "https://shopee.ph/PROFESSOR-FERALDE-PERFUME-(BDC)-i.41735247.24963726025",
    },
  },
  {
    name: "INTENSELY",
    inspired: "Stronger With You Intensely",
    image: "/p2.webp",
    links: {
      lazada: "https://lazada.com/intensely-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/intensely",
      shopee: "https://shopee.com/intensely-fragrance",
    },
  },
  {
    name: "CHIVALRY",
    inspired: "Aventus Hybrid",
    image: "/c6.webp",
    links: {
      lazada: "https://lazada.com/chivalry-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/chivalry",
      shopee: "https://shopee.com/chivalry-fragrance",
    },
  },
  {
    name: "VALOR",
    inspired: "Sound of the Brave by Diesel",
    image: "/p3.webp",
    links: {
      lazada: "https://lazada.com/valor-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/valor",
      shopee: "https://shopee.com/valor-fragrance",
    },
  },
  {
    name: "HORUS",
    inspired: "Eros by Versace",
    image: "/p4.webp",
    links: {
      lazada: "https://lazada.com/horus-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/horus",
      shopee: "https://shopee.com/horus-fragrance",
    },
  },
  {
    name: "DODGE",
    inspired: "Acqua di Gio Profumo",
    image: "/p5.webp",
    links: {
      lazada: "https://lazada.com/dodge-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/dodge",
      shopee: "https://shopee.com/dodge-fragrance",
    },
  },
  {
    name: "SEMPITERNAL",
    inspired: "Clinique Happy",
    image: "/p6.webp",
    links: {
      lazada: "https://lazada.com/sempiternal-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/sempiternal",
      shopee: "https://shopee.com/sempiternal-fragrance",
    },
  },
  {
    name: "EMPEROR",
    inspired: "Invictus Aqua",
    image: "/p7.webp",
    links: {
      lazada: "https://lazada.com/emperor-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/emperor",
      shopee: "https://shopee.com/emperor-fragrance",
    },
  },
  {
    name: "ICONIC",
    inspired: "Le Male by JPG",
    image: "/p8.webp",
    links: {
      lazada: "https://lazada.com/iconic-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/iconic",
      shopee: "https://shopee.com/iconic-fragrance",
    },
  },
  {
    name: "OPULENT",
    inspired: "Cool Water by Davidoff",
    image: "/p9.webp",
    links: {
      lazada: "https://lazada.com/opulent-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/opulent",
      shopee: "https://shopee.com/opulent-fragrance",
    },
  },
  {
    name: "ELIXIR",
    inspired: "Sauvage Elixir by Dior",
    image: "/p10.webp",
    links: {
      lazada: "https://lazada.com/elixir-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/elixir",
      shopee: "https://shopee.com/elixir-fragrance",
    },
  },
  {
    name: "LME",
    inspired: "Le Male Elixir by JPG",
    image: "/p11.webp",
    links: {
      lazada: "https://lazada.com/lme-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/lme",
      shopee: "https://shopee.com/lme-fragrance",
    },
  },
  {
    name: "BACCARAT",
    inspired: "Baccarat Rouge 540",
    image: "/p12.webp",
    links: {
      lazada: "https://lazada.com/baccarat-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/baccarat",
      shopee: "https://shopee.com/baccarat-fragrance",
    },
  },
];

const womenProducts = [
  {
    name: "BELLA",
    inspired: "Eclat Pour Femme by Lanvin",
    image: "/p13.webp",
    links: {
      lazada: "https://lazada.com/bella-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/bella",
      shopee: "https://shopee.com/bella-fragrance",
    },
  },
  {
    name: "IMPERIAL",
    inspired: "Paris Hilton by Paris Hilton",
    image: "/p14.webp",
    links: {
      lazada: "https://lazada.com/imperial-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/imperial",
      shopee: "https://shopee.com/imperial-fragrance",
    },
  },
  {
    name: "JAMAL",
    inspired: "Bare Vanilla by VS",
    image: "/p15.webp",
    links: {
      lazada: "https://lazada.com/jamal-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/jamal",
      shopee: "https://shopee.com/jamal-fragrance",
    },
  },
  {
    name: "RADIANCE",
    inspired: "Meow by Katy Perry",
    image: "/p16.webp",
    links: {
      lazada: "https://lazada.com/radiance-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/radiance",
      shopee: "https://shopee.com/radiance-fragrance",
    },
  },
  {
    name: "GOOD GIRL",
    inspired: "Good Girl by CH",
    image: "/p17.webp",
    links: {
      lazada: "https://lazada.com/goodgirl-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/goodgirl",
      shopee: "https://shopee.com/goodgirl-fragrance",
    },
  },
];

const collaborationProducts = [
  {
    name: "VERIFIED",
    inspired: "Bvlgari Extreme",
    image: "/c1.webp",
    links: {
      lazada: "https://lazada.com/verified-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/verified",
      shopee: "https://shopee.com/verified-fragrance",
    },
  },
  {
    name: "NARCISSUS",
    inspired: "Gucci Guilty",
    image: "/c2.webp",
    links: {
      lazada: "https://lazada.com/narcissus-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/narcissus",
      shopee: "https://shopee.com/narcissus-fragrance",
    },
  },
  {
    name: "HERACLES",
    inspired: "Polo Sport",
    image: "/c3.webp",
    links: {
      lazada: "https://lazada.com/heracles-perfume",
      tiktok: "https://tiktok.com/@luxeperfumes/heracles",
      shopee: "https://shopee.com/heracles-fragrance",
    },
  },
];

const allProducts = [
  ...collaborationProducts.map((p) => ({
    ...p,
    category: "TPC COLLABORATION",
  })),
  ...menProducts.map((p) => ({ ...p, category: "MEN" })),
  ...womenProducts.map((p) => ({ ...p, category: "WOMEN" })),
];

export default function CollectionPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.inspired.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wider font-light">
                  BACK TO HOME
                </span>
              </Link>
            </div>
            <Link
              href="/guide"
              className="text-sm tracking-wider text-gray-500 hover:text-black transition-colors"
            >
              GUIDE
            </Link>
          </div>
        </div>
      </header>

      {/* Simple Filters */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search fragrances..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white transition-all font-extralight"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white transition-all font-extralight"
          >
            <option value="ALL" className="font-extralight">
              All Collections
            </option>
            <option value="TPC COLLABORATION" className="font-extralight">
              TPC Collaboration
            </option>
            <option value="MEN" className="font-extralight">
              Men's Collection
            </option>
            <option value="WOMEN" className="font-extralight">
              Women's Collection
            </option>
          </select>
        </div>

        {/* Clean Products Grid - Dior Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredProducts.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="group cursor-pointer text-center"
              onMouseEnter={() => setHoveredProduct(product.name)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative mb-6 bg-gray-50 rounded-lg overflow-hidden aspect-square">
                <Image
                  src={product.image || "/placeholder.svg?height=400&width=400"}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    filter: `hue-rotate(${index * 30}deg) saturate(1.1)`,
                  }}
                />

                {/* Shopping Links Overlay */}
                <div
                  className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 ${
                    hoveredProduct === product.name
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div className="flex flex-col space-y-3">
                    <a
                      href={product.links.lazada}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Lazada</span>
                    </a>
                    <a
                      href={product.links.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">TikTok</span>
                    </a>
                    <a
                      href={product.links.shopee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Shopee</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Product Info - Clean Dior Style */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Inspired by {product.inspired}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <div className="text-gray-300 mb-6">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-light mb-4 text-gray-700">
              No fragrances found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your search or browse our complete collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

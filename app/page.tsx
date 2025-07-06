// Full updated code for LuxuryPerfumeCarousel.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const perfumes = [
  {
    id: 1,
    name: "VERIFIED",
    subtitle: "Inspired by Bvlgari Extreme",
    price: "$225",
    description: "Citrus, woody, aromatic blend for daily sophistication",
    color: "#1a1a1a",
    bgColor: "from-gray-900/20 to-black/30",
    textColor: "text-gray-900/15",
    category: "TPC COLLABORATION",
    image: "/c1.webp",
  },
  {
    id: 2,
    name: "NARCISSUS",
    subtitle: "Inspired by Gucci Guilty",
    price: "$235",
    description: "Citrus, woody, lavender harmony for modern elegance",
    color: "#8B4B6B",
    bgColor: "from-rose-500/20 to-pink-600/30",
    textColor: "text-rose-500/15",
    category: "TPC COLLABORATION",
    image: "/c2.webp",
  },
  {
    id: 3,
    name: "HERACLES",
    subtitle: "Inspired by Polo Sport",
    price: "$215",
    description: "Aromatic, fresh, citrus fusion for active lifestyle",
    color: "#2563EB",
    bgColor: "from-blue-500/20 to-cyan-600/30",
    textColor: "text-blue-500/15",
    category: "TPC COLLABORATION",
    image: "/c3.webp",
  },
  {
    id: 4,
    name: "SUPREMACY",
    subtitle: "Inspired by Ultra Male by JPG",
    price: "$195",
    description: "Vanilla, fruity, sweet harmony for cold weather nights",
    color: "#7C3AED",
    bgColor: "from-purple-500/20 to-violet-600/30",
    textColor: "text-purple-500/15",
    category: "BEST SELLER",
    image: "/c4.webp",
  },
  {
    id: 5,
    name: "BERLIN",
    subtitle: "Inspired by Eclat D'Arpege by Lanvin",
    price: "$185",
    description: "Citrus, woody, ozonic blend for daily sophistication",
    color: "#DC2626",
    bgColor: "from-red-500/20 to-rose-600/30",
    textColor: "text-red-500/15",
    category: "BEST SELLER",
    image: "/c5.webp",
  },
  {
    id: 6,
    name: "CHIVALRY",
    subtitle: "Inspired by Aventus Hybrid",
    price: "$205",
    description: "Fruity, woody, smoky blend for daily confidence",
    color: "#059669",
    bgColor: "from-emerald-500/20 to-green-600/30",
    textColor: "text-emerald-500/15",
    category: "BEST SELLER",
    image: "/c6.webp",
  },
];

const luxuryShowcase = [
  {
    id: 1,
    subtitle: "TPC COLLECTION",
    image: "/s1.webp",
    title: undefined,
    description: undefined,
  },
  {
    image: "/s2.webp",
    id: 2,
    subtitle: undefined,
    title: undefined,
    description: undefined,
  },
  {
    id: 3,
    image: "/s3.jpg",
    subtitle: undefined,
    title: undefined,
    description: undefined,
  },
];

export default function LuxuryPerfumeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInShowcase, setIsInShowcase] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const showcaseAnchorRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const carouselSections = perfumes.length;
  const currentPerfume = perfumes[Math.min(currentIndex, perfumes.length - 1)];

  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = isInShowcase ? "auto" : "hidden";
      if (!isInShowcase && currentIndex < carouselSections - 1) {
        window.scrollTo({ top: 0 });
      }
    };
    lockScroll();

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) return;
      // Hijack scroll until last carousel item
      if (!isInShowcase && currentIndex < carouselSections - 1) {
        e.preventDefault();
        e.stopPropagation();
        const now = Date.now();
        if (now - lastScrollTime.current < 200) return;
        lastScrollTime.current = now;
        setIsTransitioning(true);
        if (e.deltaY > 0) {
          setCurrentIndex((prev) => Math.min(prev + 1, carouselSections - 1));
        } else {
          setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
        setTimeout(() => setIsTransitioning(false), 600);
        return;
      }
      // On last carousel item, allow transition to showcase
      if (!isInShowcase && currentIndex === carouselSections - 1) {
        e.preventDefault();
        e.stopPropagation();
        const now = Date.now();
        if (now - lastScrollTime.current < 200) return;
        lastScrollTime.current = now;
        setIsTransitioning(true);
        if (e.deltaY > 0) {
          setIsInShowcase(true);
          setTimeout(() => {
            window.scrollTo({
              top: (showcaseAnchorRef.current?.offsetTop ?? 0) + 1,
              behavior: "smooth",
            });
            setIsTransitioning(false);
          }, 100);
          return;
        } else {
          setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
        setTimeout(() => setIsTransitioning(false), 600);
        return;
      }
      // In showcase, allow normal scroll
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (!isInShowcase) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;
      // Hijack scroll until last carousel item
      if (!isInShowcase && currentIndex < carouselSections - 1) {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        if (Math.abs(diff) > 50) {
          setIsTransitioning(true);
          if (diff > 0) {
            setCurrentIndex((prev) => Math.min(prev + 1, carouselSections - 1));
          } else {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
          }
          setTimeout(() => setIsTransitioning(false), 600);
        }
        return;
      }
      // On last carousel item, allow transition to showcase
      if (!isInShowcase && currentIndex === carouselSections - 1) {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        if (Math.abs(diff) > 50) {
          setIsTransitioning(true);
          if (diff > 0) {
            setIsInShowcase(true);
            setTimeout(() => {
              window.scrollTo({
                top: (showcaseAnchorRef.current?.offsetTop ?? 0) + 1,
                behavior: "smooth",
              });
              setIsTransitioning(false);
            }, 100);
            return;
          } else {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
          }
          setTimeout(() => setIsTransitioning(false), 600);
        }
        return;
      }
      // In showcase, allow normal scroll
    };

    const handleScroll = () => {
      if (!isInShowcase) return;
      const anchorTop = showcaseAnchorRef.current?.offsetTop ?? 0;
      if (window.scrollY < anchorTop - 50) {
        setIsInShowcase(false);
        setCurrentIndex(carouselSections - 1);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("scroll", handleScroll);

    // Add showcase scroll-back logic
    if (isInShowcase) {
      const handleShowcaseScroll = () => {
        if (window.scrollY <= 0) {
          setIsInShowcase(false);
          setCurrentIndex(carouselSections - 1);
        }
      };
      window.addEventListener("scroll", handleShowcaseScroll);
      return () => {
        window.removeEventListener("scroll", handleShowcaseScroll);
      };
    }

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, isTransitioning, carouselSections, isInShowcase]);

  return (
    <>
      {!isInShowcase && (
        <div className="fixed inset-0 w-screen h-screen bg-white z-50 overflow-hidden">
          <div
            ref={containerRef}
            className="relative w-full h-full overflow-x-hidden"
          >
            {" "}
            {/* Carousel Section - Always Visible */}{" "}
            <div className="relative w-full h-screen overflow-x-hidden">
              {" "}
              {/* Background Typography */}{" "}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                {" "}
                <div
                  className={`text-[20vw] font-bold leading-none transition-all duration-1000 ease-out ${currentPerfume.textColor}`}
                  style={{
                    transform: `rotate(-5deg) scale(${
                      1 + currentIndex * 0.05
                    })`,
                    filter: "blur(0.5px)",
                  }}
                >
                  {" "}
                  {currentPerfume.name.split(" ")[0]}{" "}
                </div>{" "}
              </div>{" "}
              {/* Gradient Overlay */}{" "}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentPerfume.bgColor} transition-all duration-1000 ease-out`}
              />{" "}
              {/* Header */}{" "}
              <header className="relative z-20 flex justify-between items-center p-8">
                {" "}
                <div className="flex items-center space-x-3">
                  {" "}
                  <Image
                    src="/logo.jpg"
                    alt="feralde logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />{" "}
                  <span className="text-2xl font-light tracking-[0.2em] lowercase">
                    feralde
                  </span>{" "}
                </div>{" "}
                <Link
                  href="/collection"
                  className="text-sm tracking-wider hover:opacity-60 transition-opacity"
                >
                  PARFUM
                </Link>
              </header>{" "}
              {/* Main Carousel Content */}{" "}
              <div className="relative z-10 flex items-center justify-center min-h-[80vh] overflow-x-hidden">
                {" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto px-4 md:px-8 w-full">
                  {" "}
                  {/* Product Image */}{" "}
                  <div className="relative overflow-hidden w-full flex justify-center">
                    {" "}
                    <div
                      className="relative w-full max-w-xs h-72 md:w-80 md:h-96 mx-auto"
                      style={{
                        transform: ` perspective(1000px) rotateY(${
                          currentIndex * 3
                        }deg) rotateX(${
                          Math.sin(currentIndex * 0.3) * 8
                        }deg) translateZ(${40 - currentIndex * 5}px) scale(${
                          1 - currentIndex * 0.01
                        }) `,
                        transition:
                          "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    >
                      {" "}
                      <Image
                        src={currentPerfume.image}
                        alt={currentPerfume.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        style={{
                          filter: `hue-rotate(${
                            currentIndex * 20
                          }deg) saturate(1.2)`,
                        }}
                      />{" "}
                      {/* Floating Elements */}{" "}
                      <div
                        className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"
                        style={{
                          transform: `rotate(${
                            currentIndex * 30
                          }deg) translateX(${Math.sin(currentIndex) * 15}px)`,
                          transition: "transform 0.8s ease-out",
                        }}
                      />{" "}
                      <div
                        className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm"
                        style={{
                          transform: `rotate(${
                            -currentIndex * 25
                          }deg) translateY(${Math.cos(currentIndex) * 12}px)`,
                          transition: "transform 0.8s ease-out",
                        }}
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Product Details */}{" "}
                  <div className="space-y-8 w-full px-2 md:px-0">
                    {" "}
                    <div
                      className="space-y-4"
                      style={{
                        transform: `translateX(${
                          currentIndex * 8
                        }px) translateY(${Math.sin(currentIndex * 0.2) * 4}px)`,
                        transition:
                          "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    >
                      {" "}
                      <div className="flex items-center space-x-3">
                        {" "}
                        <div className="text-xs tracking-[0.3em] text-gray-500 font-light">
                          {" "}
                          {currentPerfume.category}{" "}
                        </div>{" "}
                        <div className="w-8 h-px bg-gray-300"></div>{" "}
                      </div>{" "}
                      <h1 className="text-3xl md:text-6xl font-light tracking-tight leading-none">
                        {" "}
                        {currentPerfume.name}{" "}
                      </h1>{" "}
                      <p className=" md:text-lg text-gray-600 leading-relaxed font-light">
                        {" "}
                        {currentPerfume.description}{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <div></div>{" "}
                      <Link
                        href="/collection"
                        className="px-6 py-2 md:px-8 md:py-3 bg-black text-white text-sm tracking-[0.2em] hover:bg-gray-800 transition-colors duration-300 inline-flex items-center justify-center"
                        style={{
                          backgroundColor: currentPerfume.color,
                          transform: `scale(${
                            1 + Math.sin(currentIndex * 0.15) * 0.03
                          })`,
                          transition: "all 0.8s ease-out",
                        }}
                      >
                        {" "}
                        DISCOVER{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* Scroll Indicator */}{" "}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                {" "}
                <div className="flex flex-col items-center space-y-2 text-gray-600">
                  {" "}
                  <div className="text-xs tracking-[0.2em]"> </div>{" "}
                  <ChevronDown className="w-4 h-4 animate-bounce" />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Side Navigation */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
              <div className="space-y-3">
                {perfumes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`block w-px h-6 transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-black scale-x-3"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    style={{
                      backgroundColor:
                        index === currentIndex
                          ? currentPerfume.color
                          : undefined,
                      opacity: 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Showcase Section - Only accessible after carousel completion */}
      {isInShowcase && (
        <div ref={showcaseAnchorRef} className="relative overflow-x-hidden">
          {" "}
          {luxuryShowcase.map((showcase, index) => {
            const hasDetails = Boolean(
              showcase.subtitle || showcase.title || showcase.description
            );
            return (
              <div
                key={showcase.id || index}
                className="relative w-full overflow-hidden flex justify-center py-5 md:py-16"
              >
                {/* Image with natural size */}
                <div className="relative">
                  <Image
                    src={showcase.image || "/placeholder.svg"}
                    alt={
                      showcase.title ||
                      showcase.subtitle ||
                      `Showcase ${index + 1}`
                    }
                    width={1200}
                    height={800}
                    className="object-cover rounded-xl shadow-lg"
                    priority={index === 0}
                  />
                  {/* Overlay content absolutely centered on image, only if details exist */}
                  {hasDetails && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
                      <div className="space-y-6 bg-black/40 rounded-xl p-8">
                        {showcase.subtitle && (
                          <div className="text-sm tracking-[0.4em] text-white/70 font-light uppercase">
                            {showcase.subtitle}
                          </div>
                        )}
                        {showcase.title && (
                          <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
                            {showcase.title}
                          </h2>
                        )}
                        {(showcase.title || showcase.subtitle) && (
                          <div className="w-24 h-px bg-white/30 mx-auto"></div>
                        )}
                        {showcase.description && (
                          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            {showcase.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  {/* Corner Elements */}
                  <div className="absolute top-8 left-8 text-white/40 text-xs tracking-[0.3em]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-8 right-8 text-white/40 text-sm tracking-[0.2em]">
                    feralde
                  </div>
                </div>
              </div>
            );
          })}{" "}
          {/* Final CTA Section */}{" "}
          <div className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-x-hidden">
            {" "}
            <div className="text-center text-white space-y-12 max-w-4xl mx-auto px-8">
              {" "}
              <div className="space-y-6">
                {" "}
                <div className="text-sm tracking-[0.4em] text-white/60 font-light">
                  {" "}
                  DISCOVER MORE{" "}
                </div>{" "}
                <h2 className="text-5xl md:text-8xl font-light tracking-tight">
                  {" "}
                  COLLECTION{" "}
                </h2>{" "}
                <div className="w-32 h-px bg-white/20 mx-auto"></div>{" "}
                <p className="text-lg font-extralight md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  {" "}
                  Explore our complete range of luxury fragrances, each crafted
                  with the finest ingredients and uncompromising attention to
                  detail.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {" "}
                <Link
                  href="/collection"
                  className="inline-flex items-center space-x-3 px-12 py-4 border border-white text-white text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  {" "}
                  <span>VIEW COLLECTION</span>{" "}
                  <ArrowRight className="w-4 h-4" />{" "}
                </Link>{" "}
                <a
                  href="https://www.facebook.com/share/p/1CG9CLxzdx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
                >
                  LEARN OUR STORY
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
      {/* Add a footer with social and shop links */}
      <footer className="w-full bg-black text-white py-8 mt-16 font-extralight">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          {/* Logo and name */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0 font-extralight">
            <Image
              src="/logo.jpg"
              alt="feralde logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-lg tracking-[0.2em] lowercase">feralde</span>
          </div>
          {/* Social Links as text */}
          <div className="flex items-center gap-4 text-sm font-extralight">
            <span>Follow us:</span>
            <a
              href="https://www.facebook.com/feraldescents"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/feraldeperfume_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
          </div>
          {/* Shop Links */}
          <div className="flex items-center gap-6 font-extralight">
            <a
              href="https://s.lazada.com.ph/s.qGtOI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors text-sm"
            >
              Lazada
            </a>
            <a
              href="https://vt.tiktok.com/ZSMtqxaMV/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors text-sm"
            >
              TikTok
            </a>
            <a
              href="https://ph.shp.ee/6z6Ng54"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors text-sm"
            >
              Shopee
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Video as Tiktok, Phone as Whatsapp } from "lucide-react"; // Using similar icons for placeholders

const links = [
  { name: "Heels", url: "#heels" },
  { name: "Bags", url: "#bags" },
  { name: "Luxury Wears", url: "#luxury-wears" },
  { name: "Perfumes", url: "#perfumes" },
  { name: "Hairs & Wigs", url: "#hairs" },
  { name: "Accessories", url: "#accessories" },
];

const categories = [
  {
    id: "heels",
    title: "Heels & Slippers",
    description: "Step into confidence with heels crafted for striking elegance and lasting durability. From commanding classic pumps to head-turning stilettos, discover the perfect pair to match your ambition. Imagine commanding the room with every step—poised, empowered, and ready to conquer the world.\n\nBecause true luxury doesn't end when you kick off your heels. Our premium slippers provide the ultimate reward after a long day. Slip into plush, meticulously designed comfort that tells your feet: you've earned this.",
    items: [
      { src: "/assets/1fb59f7d-61a0-4623-b44d-4088775b1f4c.jpg", title: "Gucci Heels", description: "Elegant Gucci heels" },
      { src: "/assets/3084fd46-3acf-4e13-9f8f-4007d8052f17.jpg", title: "Alevi Milano", description: "Rhinestone detailing" },
      { src: "/assets/58a498c0-6044-4bce-8c60-4bcaf449af87.jpg", title: "Lady Anna", description: "Pointed slingbacks" },
      { src: "/assets/62db26e4-9604-4a9d-8d8e-76c698c816d6.jpg", title: "Zara Pumps", description: "Black with gold studs" },
      { src: "/assets/77143f89-707d-4d2f-91d3-abdd74915f78.jpg", title: "Valentino Garavani", description: "Signature VLogo pumps" },
      { src: "/assets/c4a5541a-6f04-44bf-afc8-042c33ba22f6.jpg", title: "Alevi Milano", description: "Strappy rhinestone heels" },
      { src: "/assets/d108160a-007b-4c41-80eb-def94b192993.jpg", title: "Valentino Slingbacks", description: "Burgundy patent leather" },
      { src: "/assets/2a9a6be7-173c-418d-a2d6-e7691514ff15.jpg", title: "Platform Sandals", description: "Chic black wedges" },
    ]
  },
  {
    id: "bags",
    title: "Bags",
    description: "More than just an accessory—your bag is a statement of who you are. Whether you need a structured tote for the boardroom or an effortlessly chic crossbody for the weekend, our curated collection carries your essentials securely while instantly elevating every outfit.",
    items: [
      { src: "/assets/1e152282-1295-48b5-95f8-6aeb9abac25a.jpg", title: "Chic 2nd Bag", description: "Stylish handbag collection" },
      { src: "/assets/171cea43-358d-44ad-8480-280246bf5d4f.jpg", title: "Chic 2nd Denim", description: "Denim mini bag" },
      { src: "/assets/5304f621-0e8c-460a-bd0b-e81cb772d76e.jpg", title: "Love Your Life", description: "Modern tote bags" },
      { src: "/assets/7059c45a-bdf0-4f10-a7ba-f03644f66e1a.jpg", title: "Dior Style Bag", description: "Black patent leather with scarf" },
      { src: "/assets/83661f04-7d7c-4542-8bdf-fff10075a2b3.jpg", title: "Black Handbag", description: "Elegant daily wear" },
      { src: "/assets/888b4798-b499-4131-a858-644c7ff0be34.jpg", title: "Coach Shoulder Bag", description: "Classic black leather" },
      { src: "/assets/a407dc66-4ca7-416e-ba3d-3ca9cba96e3d.jpg", title: "Lanseduojiao", description: "Pastel mini bags" },
    ]
  },
  {
    id: "luxury-wears",
    title: "Luxury Wears",
    description: "Command attention without saying a word. Our luxury apparel pairs impeccable tailoring with indulgent fabrics, creating pieces that feel as exquisite as they look. Upgrade your wardrobe with timeless essentials designed to ensure you're always the best-dressed in the room.",
    items: [
      { src: "/assets/00d45c9b-808c-4735-ab3e-ec5bb35b8421.jpg", title: "White Jumpsuit", description: "Sleek and elegant fit" },
      { src: "/assets/7a743ca5-31dd-433a-8519-c738c65e0a38.jpg", title: "Calvin Klein", description: "Classic black tee" },
      { src: "/assets/d6fbc5af-9ecc-4533-9ae8-c399c07ae04c.jpg", title: "Embroidered Abaya", description: "Beautiful detailing" },
    ]
  },
  {
    id: "perfumes",
    title: "Perfumes",
    description: "A scent is the most intense form of memory. Leave an unforgettable impression with our handpicked collection of premium fragrances. Whether you prefer the alluring depth of an Eau de Parfum or the fresh burst of a body mist, find the signature scent that lingers long after you've left.",
    items: [
      { src: "/assets/IMG_5596.JPG", title: "Pistachio Kunafa", description: "Dubai Chocolate Anfar 1950" },
      { src: "/assets/IMG_5593.JPG", title: "Maiden Anna", description: "Heel & Perfume Set" },
      { src: "/assets/IMG_5595.JPG", title: "Brasov EDP", description: "Various exquisite scents" },
      { src: "/assets/38851c0f-5e63-4aae-a72f-efa1c12ea763.jpg", title: "Mystical Collection", description: "Eau de Perfume Collection" },
      { src: "/assets/91975d20-dbe0-4f5f-854f-9e611745270a.jpg", title: "Victoria's Secret", description: "Body mists variety" },
    ]
  },
  {
    id: "hairs",
    title: "Hairs & Wigs",
    description: "Your hair is your crown—wear it with pride. From vibrant, bouncy curls to sleek human hair blends, our premium extensions are designed for flawless volume and effortless styling. Switch up your look instantly with natural textures that inspire confidence.",
    items: [
      { src: "/assets/IMG_6748.PNG", title: "Mila Bounce Hair", description: "Royal & coffee human hair blend" },
      { src: "/assets/IMG_7343.jpg", title: "UB Orange Hair", description: "Vibrant orange wig" },
      { src: "/assets/20f7f051-4ca8-485a-9d4a-28304cc82283.JPG", title: "Wig Collection", description: "Various textures and colors" },
    ]
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "It’s the subtle details that pull a masterpiece together. Elevate any ensemble with our elegant finishing touches. Whether it's the classic grace of a pearl necklace or a delicate bracelet, our curated jewelry adds that final, definitive spark of sophistication.",
    items: [
      { src: "/assets/01b00ef0-3211-4592-a3a4-f579441594fd.jpg", title: "Pearl Jewelry Set", description: "Necklace and bracelet" },
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div
        className="w-full max-w-md flex flex-col items-center relative z-10"
      >
        {/* Profile / Logo Area */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full border border-accent/30 p-1 mb-6 relative overflow-hidden group">
            <div className="w-full h-full rounded-full bg-surface-hover flex items-center justify-center overflow-hidden relative">
              <Image
                src="/logo.png"
                alt="The Fragrance Badge Logo"
                fill
                priority
                sizes="96px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center tracking-wide mb-2 uppercase">
            The Fragrance Badge
          </h1>
          <p className="text-muted text-sm tracking-widest mb-1 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-muted/50"></span>
            ...creates your signature scent
            <span className="w-4 h-[1px] bg-muted/50"></span>
          </p>
          <div className="flex flex-col items-center text-center mt-3 gap-1">
            <span className="text-accent/90 font-serif text-lg">The badge of elegance 🥰 ❤️</span>
            <span className="text-muted/80 text-xs tracking-widest uppercase">Elegance redefined, one step at a time</span>
          </div>
        </div>

        {/* Social Icons - Now positioned more prominently before the links */}
        <motion.div
          id="contact"
          className="flex flex-col items-center gap-5 my-8 w-full scroll-mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-sans tracking-widest text-muted uppercase border-b border-accent/20 pb-1 px-4">Shop & Connect With Us</span>
          <div className="flex gap-8">
            <SocialIcon icon={<Instagram size={24} strokeWidth={1.5} />} href="https://www.instagram.com/the_badge_of_elegance/" label="Instagram" />
            <SocialIcon icon={<Tiktok size={24} strokeWidth={1.5} />} href="https://www.tiktok.com/@thefragrancebadge" label="TikTok" />
            <SocialIcon icon={<Whatsapp size={24} strokeWidth={1.5} />} href="https://wa.me/2349054030929" label="WhatsApp" />
          </div>
        </motion.div>

        {/* Link List */}
        <motion.div
          className="w-full grid grid-cols-2 gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="relative w-full py-4 px-6 border border-accent/10 rounded-sm bg-surface-hover/30 hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 text-center group overflow-hidden"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 font-sans tracking-wide text-foreground group-hover:text-accent transition-colors duration-300">
                {link.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Visuals Gallery Sections */}
      <div className="w-full max-w-5xl mt-16 z-10 flex flex-col gap-20">
        {categories.map((category) => (
          <motion.section
            key={category.id}
            id={category.id}
            className="flex flex-col gap-6 scroll-mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 px-4">
              <h2 className="font-serif text-2xl tracking-wide text-foreground uppercase">{category.title}</h2>
              <div className="flex-grow h-[1px] bg-accent/20"></div>
            </div>

            {category.description && (
              <div className="px-4 text-muted/80 text-sm max-w-3xl whitespace-pre-wrap leading-relaxed -mt-2">
                {category.description}
              </div>
            )}

            <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar md:pb-12 px-4 snap-x">
              {category.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-64 md:w-72 aspect-[3/4] rounded-sm overflow-hidden relative border border-accent/10 snap-center group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 256px, 288px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-4 opacity-100 transition-opacity duration-300">
                    <span className="text-foreground font-serif text-lg tracking-wide">{item.title}</span>
                    <span className="text-muted/80 text-xs mt-1">{item.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center px-4 -mt-4 mb-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-accent text-background font-sans tracking-wide uppercase text-sm rounded-sm hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
              >
                Shop {category.title}
              </a>
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label?: string }) {
  return (
    <motion.a
      href={href}
      className="flex flex-col items-center gap-3 group"
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center text-accent/80 group-hover:text-accent group-hover:border-accent/60 bg-surface-hover transition-colors duration-300 shadow-lg shadow-accent/5">
        {icon}
      </div>
      {label && <span className="text-[10px] sm:text-xs font-sans tracking-wider text-muted group-hover:text-accent/80 transition-colors uppercase">{label}</span>}
    </motion.a>
  );
}

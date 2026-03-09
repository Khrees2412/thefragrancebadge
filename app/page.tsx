"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Instagram, Phone as Whatsapp } from "lucide-react"; // Using similar icons for placeholders

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
    title: "Heels",
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
    items: [
      { src: "/assets/00d45c9b-808c-4735-ab3e-ec5bb35b8421.jpg", title: "White Jumpsuit", description: "Sleek and elegant fit" },
      { src: "/assets/7a743ca5-31dd-433a-8519-c738c65e0a38.jpg", title: "Calvin Klein", description: "Classic black tee" },
      { src: "/assets/d6fbc5af-9ecc-4533-9ae8-c399c07ae04c.jpg", title: "Embroidered Abaya", description: "Beautiful detailing" },
    ]
  },
  {
    id: "perfumes",
    title: "Perfumes",
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
    items: [
      { src: "/assets/IMG_6748.PNG", title: "Mila Bounce Hair", description: "Royal & coffee human hair blend" },
      { src: "/assets/IMG_7343.jpg", title: "UB Orange Hair", description: "Vibrant orange wig" },
      { src: "/assets/20f7f051-4ca8-485a-9d4a-28304cc82283.JPG", title: "Wig Collection", description: "Various textures and colors" },
    ]
  },
  {
    id: "accessories",
    title: "Accessories",
    items: [
      { src: "/assets/01b00ef0-3211-4592-a3a4-f579441594fd.jpg", title: "Pearl Jewelry Set", description: "Necklace and bracelet" },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="w-full max-w-md flex flex-col items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile / Logo Area */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full border border-accent/30 p-1 mb-6 relative overflow-hidden group">
            <div className="w-full h-full rounded-full bg-surface-hover flex items-center justify-center overflow-hidden relative">
              <Image
                src="/logo.png"
                alt="The Fragrance Badge Logo"
                fill
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
        </motion.div>

        {/* Link List */}
        <motion.div variants={itemVariants} className="w-full flex flex-col gap-4 mb-12">
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

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-8 mb-16">
          <SocialIcon icon={<Instagram strokeWidth={1.5} />} href="https://instagram.com/thefragrancebadge" />
          {/* <SocialIcon icon={<Tiktok strokeWidth={1.5} />} href="#" /> */}
          <SocialIcon icon={<Whatsapp strokeWidth={1.5} />} href="https://wa.me/2349054030929" />
        </motion.div>
      </motion.div>

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
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-4 opacity-100 transition-opacity duration-300">
                    <span className="text-foreground font-serif text-lg tracking-wide">{item.title}</span>
                    <span className="text-muted/80 text-xs mt-1">{item.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent/80 hover:text-accent hover:border-accent/60 bg-surface-hover transition-colors duration-300"
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}

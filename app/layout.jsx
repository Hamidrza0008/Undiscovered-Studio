import "./globals.css";

export const metadata = {

  metadataBase: new URL("https://www.undiscoveredstudio.in"),

  title:
    "Undiscovered Studio | Web Development Agency | MERN & Next.js Websites",

  description:
    "Undiscovered Studio is a modern web development agency creating fast, responsive, and SEO-friendly websites for startups, businesses, and brands. We specialize in React.js, Next.js, custom websites, and digital experiences that help businesses grow online.",


  keywords: [

    // Brand
    "Undiscovered Studio",
    "Undiscovered Studio web development",
    "Undiscovered Studio agency",

    // Main Services
    "web development agency",
    "website development company",
    "custom website development",
    "professional website design",
    "modern website development",
    "responsive website development",

    // Technology Keywords
    "Next.js development agency",
    "React.js development agency",
    "React developer",
    "Next.js developer",
    "frontend development agency",
    "full stack web development",

    // Business Intent Keywords
    "website for startups",
    "startup website development",
    "business website development",
    "ecommerce website development",
    "landing page development",
    "portfolio website development",

    // SEO Keywords
    "SEO friendly website development",
    "fast website development",
    "high performance websites",
    "modern digital solutions",

    // Location Based
    "web development agency India",
    "website development company India",
    "frontend developer India",
    "React developer India",
    "Next.js developer India",

  ],


  verification: {
    google: "y0VI15NGKHCr-TTHpdZQQtvG6z71u_cu2GgYTnCTtG4",
  },


  alternates: {
    canonical: "/",
  },


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },


  openGraph: {

    title:
      "Undiscovered Studio | React & Next.js Web Development Agency",

    description:
      "We design and develop premium websites, SaaS platforms, ecommerce stores, and digital experiences using modern technologies.",

    url:
      "https://www.undiscoveredstudio.in",

    siteName:
      "Undiscovered Studio",

    type:
      "website",

    locale:
      "en_US",
  },


  twitter: {
    card: "summary_large_image",

    title:
      "Undiscovered Studio | Web Development Agency",

    description:
      "MERN , Modern React, Next.js and custom website development services for startups and businesses.",
  },

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />

      </head>


      <body className="bg-background text-foreground">
        {children}
      </body>


    </html>
  );
}
import "./globals.css";

export const metadata = {
  title: "Undiscovered Studio | Custom Websites for Modern Businesses",
  verification: {
    google: "y0VI15NGKHCr-TTHpdZQQtvG6z71u_cu2GgYTnCTtG4"
  }
  ,
  description:
    "Undiscovered Studio builds fast, responsive, and SEO-friendly websites for startups, agencies, and growing businesses. We create modern digital experiences that help brands stand out and scale online.",
  keywords: [
    "Undiscovered Studio",
    "web design agency",
    "web development agency",
    "next.js development",
    "react development",
    "website design",
    "custom website development",
    "seo friendly websites",
    "ecommerce website development",
    "digital agency"
  ],
  openGraph: {
    title: "Undiscovered Studio | Custom Websites for Modern Businesses",
    description:
    "Premium web design and development services for startups, agencies, and businesses looking to grow online.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "GRACE ICMC-USP - Grupo de Alunas de Ciências Exatas | São Carlos",
  description: "GRACE é um projeto de extensão do ICMC-USP São Carlos dedicado a incentivar meninas e mulheres nas áreas de tecnologia e ciências exatas através de cursos, oficinas e eventos gratuitos.",
  keywords: "GRACE, ICMC, USP, São Carlos, mulheres na tecnologia, programação, robótica, ciências exatas, inclusão digital, meninas digitais, TechSchool",
  authors: [{ name: "GRACE ICMC-USP" }],
  openGraph: {
    title: "GRACE ICMC-USP - Grupo de Alunas de Ciências Exatas",
    description: "Projeto de extensão do ICMC-USP que promove a inclusão de meninas e mulheres na tecnologia",
    type: "website",
    url: "https://grace.icmc.usp.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}


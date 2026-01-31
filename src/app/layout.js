import Preloader from "@/components/ui/preloader";
import "./global.css";
import "@/assets/css/modern-theme.css";
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";
import { Toaster } from "sonner";

export const metadata = {
  title: "Nasimudheen - Personal Portfolio",
  description: "Nasimudheen - Personal Portfolio React Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <Toaster position="top-right" richColors />
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}

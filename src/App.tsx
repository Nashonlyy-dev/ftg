
import Hero from './components//Sections/Hero';
import { TheWhy } from './Components/Sections/TheWhy';
import { BentoBox } from './Components/Sections/BentoBox';
import { AppPreview } from './Components/Sections/AppPreview';
import { DualEngine } from './Components/Sections/DualEngine';
import { FAQFooter } from './Components/Sections/FAQFooter';

export default function App() {
  return (
    // Explicitly forcing true black on the root wrapper text elements to ensure high contrast
    <div className="relative min-h-screen bg-[#000000] text-[#FFFFFF] antialiased">
      

      <main>
        <Hero />
        <TheWhy />
        <BentoBox />
        <AppPreview   />
        <DualEngine />
        <FAQFooter />
      </main>
    </div>
  );
}
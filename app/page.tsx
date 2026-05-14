import { Advantages } from "@/components/Advantages";
import { BudgetSolutions } from "@/components/BudgetSolutions";
import { Cases } from "@/components/Cases";
import { Contacts } from "@/components/Contacts";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { LeadForm } from "@/components/LeadForm";
import { ObjectTypes } from "@/components/ObjectTypes";
import { PartnerSection } from "@/components/PartnerSection";
import { ProductCategories } from "@/components/ProductCategories";
import { SearchQueries } from "@/components/SearchQueries";
import { SeoBottomText } from "@/components/SeoBottomText";
import { SeoIntro } from "@/components/SeoIntro";
import { ServiceAreas } from "@/components/ServiceAreas";
import { StructuredData } from "@/components/StructuredData";
import { TurnkeySection } from "@/components/TurnkeySection";
import { VideoSection } from "@/components/VideoSection";
import { Workflow } from "@/components/Workflow";
import { landingData } from "@/data/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <StructuredData />
        <Hero />
        <SeoIntro data={landingData.seoBlocks.intro} />
        <ObjectTypes />
        <IndustrySolutions data={landingData.seoBlocks.industrySolutions} />
        <ProductCategories />
        <SearchQueries data={landingData.seoBlocks.searchQueries} />
        <Advantages />
        <Workflow />
        <BudgetSolutions />
        <TurnkeySection />
        <Cases />
        <PartnerSection />
        <ServiceAreas data={landingData.seoBlocks.serviceAreas} />
        <Faq data={landingData.seoBlocks.faq} />
        <LeadForm />
        <Contacts />
        <VideoSection />
        <SeoBottomText data={landingData.seoBlocks.bottomText} />
      </main>
      <Footer />
    </>
  );
}

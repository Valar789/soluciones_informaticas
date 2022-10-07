import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
import TeamSection from "components/landing/exitoSection";
import ContactSection from "components/landing/ServicesSection";
import Form from "components/landing/Form";
import About from "components/landing/About";

export default function Landing() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <WorkingSection />
        <TeamSection />
        <About />
        <ContactSection />
        <Form />
      </main>
      <DefaultFooter />
    </>
  );
}

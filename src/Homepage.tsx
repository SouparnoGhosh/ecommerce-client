import { useAtom } from "jotai";
import { genderAtom } from "@/utils/atoms";
import { Section } from "@/utils/types";
import HomepageProductSlide from "@/components/homepage/HomepageProductSlide";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Header from "./Header";
import Footer from "./Footer";

type HomepageProps = {
  menswearSections: Section[];
  womenswearSections: Section[];
};

export default function Homepage({
  menswearSections,
  womenswearSections,
}: HomepageProps) {
  const [gender] = useAtom(genderAtom);

  const sections = gender === "men" ? menswearSections : womenswearSections;

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto py-8">
        <Breadcrumbs />
        <h1 className="text-4xl font-bold mb-8 capitalize">{gender}swear</h1>
        {sections.map((section, index) => (
          <HomepageProductSlide key={index} section={section} gender={gender} />
        ))}
      </div>
      <Footer />
    </>
  );
}

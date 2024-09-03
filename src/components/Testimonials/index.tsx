import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Shreyansh",
    designation: "Customer",
    content:
      "Saveoex has completely changed the way I shop! I’m saving money on everything, from my morning coffee to weekend getaways.",
    image: "/images/testimonials/user1.jpg",
    star: 5,
  },
  {
    id: 1,
    name: "Anusha",
    designation: "Customer",
    content:
      "I love how easy it is to use. No hassle, just savings. Highly recommend!",
    image: "/images/testimonials/user2.jpg",
    star: 5,
  },
  {
    id: 1,
    name: "Dhirendra",
    designation: "Customer",
    content:
      "The best part about Saveoex? The variety of deals! Whether I’m shopping locally or traveling, there’s always a discount waiting for me.",
    image: "/images/testimonials/user3.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Users Say"
          paragraph=""
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap gap-y-8 lg:mt-20">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

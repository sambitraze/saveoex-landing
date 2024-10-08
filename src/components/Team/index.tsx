import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Kunal",
    designation: "CEO & Founder",
    image: "/images/team/kunal.jpg",
    linkedinLink: "https://www.linkedin.com/in/kishor-kunal-150819230/",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Sambit",
    designation: "CTO & Co Founder",
    image: "/images/team/sambit.png",
    linkedinLink: "https://www.linkedin.com/in/sambitraze/",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  // {
  //   id: 3,
  //   name: "Andrieo Gloree",
  //   designation: "App Developer",
  //   image: "/images/team/team-03.png",
  //   facebookLink: "/#",
  //   twitterLink: "/#",
  //   instagramLink: "/#",
  // },
  // {
  //   id: 4,
  //   name: "Jackie Sanders",
  //   designation: "Content Writer",
  //   image: "/images/team/team-04.png",
  //   facebookLink: "/#",
  //   twitterLink: "/#",
  //   instagramLink: "/#",
  // },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Our team is a dynamic group of passionate professionals, each bringing unique expertise and creativity to the table."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

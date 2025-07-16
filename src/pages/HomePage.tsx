
import Rethink from "./homecomponents/Rethink";
import Autonomous from "./homecomponents/Atuutonomous";
import YourPod from "./homecomponents/Yourpod";
import TheTimeIsRight from "./homecomponents/TheTimeIsRight";
import OurTeamHeader from "./homecomponents/Ourteamheader";
import MeetourTeam from "./homecomponents/MeetourTeam";
import ContactUs from "./homecomponents/ContactUs";
import Hero from "./homecomponents/Hero";
import Firsttoknow from "./homecomponents/Firsttoknow";

const HomePage = () => {
  return (
    <div className="page-transition">
      <Hero />

      {/* Rethink Section */}
      <Rethink />
      <Autonomous />
      <YourPod />
      <TheTimeIsRight />
      <OurTeamHeader />
      <MeetourTeam/>
      <Firsttoknow />
      <ContactUs/>  

    </div>
  );
};

export default HomePage;

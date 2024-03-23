import Hero from "../components/Hero";
import wave from "../assets/wave (1).svg";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col  items-center justify-center relative ">
      <Hero></Hero>
      <img src={wave} className="absolute bottom-0 w-full" />
    </div>
  );
};

export default Home;

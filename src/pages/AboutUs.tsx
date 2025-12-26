
import Layout from '../components/layout/Layout';
import logo from "../assets/logo.png";
import moon from "../assets/moon.png";
import aboutImage from "../assets/aboutimage.jpg";
import person1 from "../assets/aboutimage.jpg";
import person2 from "../assets/aboutimage.jpg";
import person3 from "../assets/aboutimage.jpg";
import person4 from "../assets/aboutimage.jpg";

const AboutUs = () => {
  const team = [
    { name: "NAME", post: "POST", img: person1 },
    { name: "NAME", post: "POST", img: person2 },
    { name: "NAME", post: "POST", img: person3 },
    { name: "NAME", post: "POST", img: person4 },
    { name: "NAME", post: "POST", img: person1 },
    { name: "NAME", post: "POST", img: person2 },
    { name: "NAME", post: "POST", img: person3 },
    { name: "NAME", post: "POST", img: person4 },
    { name: "NAME", post: "POST", img: person1 },
    { name: "NAME", post: "POST", img: person2 },
    { name: "NAME", post: "POST", img: person3 },
    { name: "NAME", post: "POST", img: person4 },
    { name: "NAME", post: "POST", img: person1 },
    { name: "NAME", post: "POST", img: person2 },
    { name: "NAME", post: "POST", img: person3 },
  ];
  return (
    <Layout>
      <div className="min-h-screen w-full  text-white">
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold">ABOUT US.</h1>
        </div>
        <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 relative">
          <div className="flex justify-center md:justify-start">
            <img src={logo} className="w-52 md:w-64" alt="logo" />
          </div>
          <div className="relative">
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
              malesuada massa quisque vitae at. Aliquet scelerisque magna nulla
              aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
              Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
              malesuada massa quisque vitae at. Aliquet scelerisque magna nulla
              aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
              Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
              malesuada massa quisque vitae at. Aliquet scelerisque magna nulla
              aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
            </p>
            <img
              src={moon}
              className="hidden md:block w-40 absolute -right-10 top-10"
              alt="moon"
            />
          </div>
        </section>

        {/* ---------- FULL WIDTH GROUP IMAGE ---------- */}
        <div className="w-full mt-4">
          <img
            src={aboutImage}
            className="w-full max-h-[450px] object-cover"
            alt="about group"
          />
        </div>

        {/* ---------- TEAM GRID SECTION ---------- */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
            TEAM LEADERS OF OUR CLUB
          </h2>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {team.map((member, index) => (
    <div key={index} className="text-center">
      <img
        src={member.img}
        alt={member.name}
        className="w-[200px] h-[200px] object-cover rounded-xl mb-3 mx-auto"
      />

      <p className="font-bold text-sm">{member.name}</p>
      <p className="text-xs text-gray-300">{member.post}</p>
    </div>
  ))}
</div>

        </section>

      </div>
    </Layout>
  );
};

export default AboutUs;
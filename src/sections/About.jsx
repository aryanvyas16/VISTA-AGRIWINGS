import { Element } from "react-scroll";

const About = () => {
  return (
    <section>
      <Element
        name="about"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <h1 className="text-4xl font-bold">About Us</h1>
              </div>

              <p className="body-1 mb-10 max-w-md">
              Sachin Maltare 

Co-Founder of Vista Agriwings


              </p>

              {/* Space for text */}
              <p className="body-1 mb-10 max-w-md">
              Hi, I’m Sachin Maltare, the co-founder of Vista Agriwings. I’m passionate about transforming the agricultural sector with innovative and sustainable solutions. Through our partnership with Garuda Aerospace Pvt Ltd, I’m proud to bring cutting-edge drone technology to farming practices, helping farmers achieve better efficiency and productivity.
              </p>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[640px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  {/* Your image here */}
                  <img
                    src="/src/public/sir1.jpg" // Replace with your image
                    width={700}
                    height={300}
                    alt="hero"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* No logos, just leave space for more text if needed */}
        </div>
      </Element>
    </section>
  );
};
export default About;

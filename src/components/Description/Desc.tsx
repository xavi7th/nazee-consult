import { useState, useEffect } from "react";
import "./Desc.css";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Star, Target, Globe, Book } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Description() {
  const [activeSection, setActiveSection] = useState("values");

  const colorMap = {
    "#FFA726": "bg-orange",
    "#42A5F5": "bg-blue",
    "#66BB6A": "bg-green",
    "#AB47BC": "bg-purple",
  };

  const values = [
    { icon: Star, text: "Excellence in Education", color: "#FFA726" },
    { icon: Target, text: "Innovation in Management", color: "#42A5F5" },
    { icon: Globe, text: "Global Collaboration", color: "#66BB6A" },
    { icon: Book, text: "Knowledge Empowerment", color: "#AB47BC" },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="desc-container">
      <div className="desc-hero" data-aos="fade-up">
        <h1 className="desc-title">Empowering Project Managers Globally</h1>
        <p className="desc-tagline">
          At Nazee Consult, we transform project managers into change
          architects.
        </p>
      </div>
      <div className="desc-nav" data-aos="fade-up">
        {["values", "mission", "vision"].map((section) => (
          <button
            key={section}
            className={`desc-nav-btn ${
              activeSection === section ? "active" : ""
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <div className="desc-content">
        <div
          className={`desc-section ${
            activeSection === "values" ? "active" : ""
          }`}
        >
          <h2 className="desc-subtitle">Our Core Values</h2>
          <ul className="desc-values-list">
            {values.map(({ icon: Icon, text, color }, index) => (
              <li key={index}>
                <CardContainer className="h-full w-full">
                  <CardBody className="flex flex-col items-center justify-center h-full">
                    <CardItem
                      translateZ={40}
                      className={`icon-container mb-6 ${colorMap[color]}`}
                    >
                      <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                    </CardItem>
                    <CardItem
                      translateZ={60}
                      as="h3"
                      className="text-xl font-bold text-gray-800 mb-3 text-center pb-2"
                    >
                      {text}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="p"
                      className="text-sm text-gray-600 text-center"
                    >
                      Shaping the future of project management.
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`desc-section ${
            activeSection === "mission" ? "active" : ""
          }`}
        >
          <h2 className="desc-subtitle">Our Mission</h2>
          <p className="desc-text">
            To revolutionize project management by providing avant-garde
            resources, nurturing a network of thought leaders, and pioneering
            innovative practices.
          </p>
        </div>
        <div
          className={`desc-section ${
            activeSection === "vision" ? "active" : ""
          }`}
        >
          <h2 className="desc-subtitle">Our Vision</h2>
          <p className="desc-text">
            To forge a future where every project manager is a visionary,
            capable of orchestrating complex projects and propelling
            organizations towards unprecedented success.
          </p>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <button
        className="cursor-pointer underline"
        onClick={() => {
          isVisible == true ? setIsVisible(false) : setIsVisible(true);
        }}
      >
        Show
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setvisibleSection] = useState("career");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={(showHide) =>
          showHide == true ? setvisibleSection("about") : setvisibleSection("")
        }
      />
      <Section
        title={"Team Instamart"}
        description={"This is the about Team of Instamart"}
        isVisible={visibleSection === "team"}
        setIsVisible={(showHide) =>
          showHide == true ? setvisibleSection("team") : setvisibleSection("")
        }
      />
      <Section
        title={"Career Instamart"}
        description={"This is the about Tean of Instamart"}
        isVisible={visibleSection === "career"}
        setIsVisible={(showHide) =>
          showHide == true ? setvisibleSection("career") : setvisibleSection("")
        }
      />
    </div>
  );
};

export default Instamart;

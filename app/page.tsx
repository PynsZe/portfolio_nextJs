/* eslint-disable @typescript-eslint/no-unused-vars */
import Skills from "./components/skills";
import ProjectsH from "./components/projectsH";
import ProjectsV from "./components/projectsV";


export default function App() {

    

    return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">

        <div id="page" className="hero-section">
            <section id="parallax" className="h-[100vh] items-center flex flex-col justify-center">
                <h1 className="text-[#355a53] text-3xl">Bienvenue dans mon</h1>
                <h1 className="text-[#359381] lobster text-8xl">Portfolio</h1>
            </section>

            <section id="about " className="mx-auto">
                <div className="h-screen items-center flex flex-col justify-center border-1">
                    <h2 className="lobster text-[#359381] text-4xl w-[80%] mb-15 ml-25">
                    À propos de moi !
                    </h2>
                    <p className="text-xl w-[70%] mb-[2vh]">
                        Hey, moi c’est Mathis TONG-HATET, j’ai 19 ans et je suis actuellement étudiant en informatique à Nantes, dans le cadre d’un BUT. 
                        Curieux de nature, je m’intéresse à un peu de tout : j’aime découvrir, apprendre et comprendre, quels que soient les domaines.
                    </p>
                    <p  className="text-xl w-[70%] mb-[2vh]">
                        La musique occupe une place importante dans ma vie. J’apprend à jouer du piano, mais au-delà de l’instrument, 
                        j’ai aussi un vrai attrait pour les paysages naturels : j’aime m’évader, observer la beauté du monde qui nous entoure.
                    </p>
                    <p className="text-xl w-[70%]">
                        Je suis quelqu’un d’enthousiaste, motivé et sérieux. J’aborde ce que je fais avec implication, sans jamais perdre le plaisir d’apprendre. 
                        Il y a très peu de choses que je déteste : je préfère voir dans chaque sujet une opportunité de découverte.
                    </p>
                </div>

                <Skills />

                <ProjectsV />
                
            </section>
        </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function App() {

    

    return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">

        <div id="page" className="hero-section">
            <section id="parallax" className="h-[100vh] items-center flex flex-col justify-center">
                <h1 className="text-[#355a53] text-3xl">Bienvenue dans mon</h1>
                <h1 className="text-[#359381] lobster text-8xl">Portfolio</h1>
            </section>

            <section id="infos " className="mx-auto">
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

                <div id="skills" className="flex flex-col items-center min-h-[60vh] w-screen" >
                    <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">Je travaille avec :</h3>
                    <div className="w-[87%] flex gap-4 flex-wrap">
                        
                        <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" className="group relative flex justify-center">
                        <span className="animate-spin absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">HTML</span>
                            <div className="w-[25vw] h-15 border-2 rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="/icons/html-124-svgrepo-com.svg" alt="HTML" fill /></div></div></a>

                        <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">CSS</span>
                        <div className="w-[25vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\css3-02-svgrepo-com.svg" alt="CSS" fill={true}></Image></div></div></a>

                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">JavaScript</span>
                        <div className="w-[25vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\js01-svgrepo-com.svg" alt="JS" fill={true}></Image></div></div></a>

                        <a href="https://tailwindcss.com/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">TailWind</span>
                        <div className="w-[35vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\tailwind-svgrepo-com.svg" alt="TailWind" fill={true}></Image></div></div></a>
                    
                        <a href="https://fr.react.dev/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">React</span>
                        <div className="w-[40vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\react-svgrepo-com.svg" alt="React" fill={true}></Image></div></div></a>
                    
                        <a href="https://www.oracle.com/fr/database/technologies/appdev/sql.html" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">Oracle SQL</span>
                        <div className="w-[40vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\sql-dev3.svg" alt="SQL" fill={true}></Image></div></div></a>

                        <a href="https://www.python.org/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">Python</span>
                        <div className="w-[40vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\python-svgrepo-com.svg" alt="Python" fill={true}></Image></div></div></a>

                        <a href="https://go.dev/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">GoLang</span>
                        <div className="w-[35vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\go-svgrepo-com.svg" alt="GoLang" fill={true}></Image></div></div></a>

                        <a href="https://kotlinlang.org/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">Kotlin</span>
                        <div className="w-[40vw] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\kotlin-svgrepo-com.svg" alt="Kotlin" fill={true}></Image></div></div></a>

                        <a href="https://www.java.com/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-8">Java</span>
                        <div className="w-[25vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\java-svgrepo-com.svg" alt="Java" fill={true}></Image></div></div></a>

                        <a href="https://nextjs.org/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-8">NextJS</span>
                        <div className="w-[55vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\nextjs-fill-svgrepo-com.svg" alt="Java" fill={true}></Image></div></div></a>
                    </div>

                    <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">J&apos;utilise :</h3>
                    <div className="w-[87%] flex gap-4 flex-wrap">
                        <a href="https://www.oracle.com/fr/database/technologies/appdev/sql.html" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">Brave</span>
                        <div className="w-[40vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\brave-svgrepo-com.svg" alt="SQL" fill={true}></Image></div></div></a>

                        <a href="https://www.python.org/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">VSCode</span>
                        <div className="w-[40vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\vscode-svgrepo-com.svg" alt="Python" fill={true}></Image></div></div></a>

                        <a href="https://go.dev/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">BiteWarden</span>
                        <div className="w-[35vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\bitwarden-svgrepo-com.svg" alt="GoLang" fill={true}></Image></div></div></a>

                        <a href="https://kotlinlang.org/" target="_blank" className="group relative flex justify-center">
                        <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">Windows</span>
                        <div className="w-[40vw] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-[12vh] transition duration-200 hover:-translate-y-2 border-gray-100">
                            <div className="relative h-8 w-8"><Image src="\icons\windows-applications-svgrepo-com.svg" alt="Kotlin" fill={true}></Image></div></div></a>
                        {/* Template 
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="" alt="" fill={true}></Image>
                            </div>
                        </div>
                        */}
                        
                    </div>
                </div>

                <div id="projects" className="h-[100vh] ">
                    <h3>Voici quelques-uns de mes projets :</h3>
                    <div>
                        <Link href="/">Portfolio</Link>
                        <a href="https://gitlab.univ-nantes.fr/E248268G/farge-tong-hatet-quadtree-sae">Quadtree</a>
                        <a href="https://docs.google.com/document/d/1TEhzGx-T3rmBIp_RMVq2A9e8uaPJf4WUEYYIvv3wgY8/edit?tab=t.0">BD</a>
                        <a href="https://gitlab.univ-nantes.fr/pub/but/but1/r1.02/r1.02.dm/tp1-1/equipe-11-05_goncalves-amorim-diego_tong-hatet-mathis">Site 1</a>
                        <a href="https://gitlab.univ-nantes.fr/E243619D/site-web-communication">Site 2</a>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

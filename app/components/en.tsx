import Image from "next/image";
import Link from "next/link";

export default function App() {

    

    return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">

        <div id="page" className="hero-section">
            <section id="parallax" className="h-[100vh] items-center flex flex-col justify-center">
                <h1 className="text-[#355a53] text-3xl">Welcome to my</h1>
                <h1 className="text-[#359381] lobster text-8xl">Portfolio</h1>
            </section>

            <section id="infos " className="mx-auto">
                <div className="h-screen items-center flex flex-col justify-center">
                    <h2 className="lobster text-[#359381] text-4xl w-[80%] mb-15 ml-25">
                        About me !
                    </h2>
                    <p className="text-xl w-[70%] mb-[2vh]">
                        Hey, I&apos;m Mathis TONG-HATET, I&apos;m 19 years old and currently studying computer science in Nantes as part of a BUT program.
                        I&apos;m naturally curious and interested in all kinds of things—I love discovering, learning, and understanding, no matter the subject.
                    </p>
                    <p className="text-xl w-[70%] mb-[2vh]">
                        Music plays a big role in my life. I&apos;m learning to play the piano, but beyond the instrument, I&apos;m also really drawn to natural landscapes—
                        I enjoy escaping into nature and taking in the beauty of the world around us.
                    </p>
                    <p className="text-xl w-[70%]">
                        I&apos;m enthusiastic, motivated, and dedicated. I approach everything I do with commitment, while always keeping the joy of learning alive.
                        There&apos;s very little I truly dislike—I prefer to see every topic as a chance to explore something new.
                    </p>
                </div>

                <div id="skills" className="flex flex-col items-center min-h-[60vh] w-screen" >
                    <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">Je travaille avec :</h3>
                    <div className="w-[87%] flex gap-4 flex-wrap">
                        
                        <div className="w-[25vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[25vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\css3-02-svgrepo-com.svg" alt="CSS" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[25vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\js01-svgrepo-com.svg" alt="JS" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[35vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\tailwind-svgrepo-com.svg" alt="TailWind" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[25vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\react-svgrepo-com.svg" alt="React" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[40vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\sql-dev3.svg" alt="SQL" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[40vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\python-svgrepo-com.svg" alt="Python" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[35vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\go-svgrepo-com.svg" alt="GoLang" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[40vx] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\kotlin-svgrepo-com.svg" alt="Kotlin" fill={true}></Image>
                            </div>
                        </div>
                        <div className="w-[30vW] h-15 border-2  rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-30 transition duration-200 hover:-translate-y-2 sm:border-gray-100">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\java-svgrepo-com.svg" alt="Java" fill={true}></Image>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">J&apos;utilise :</h3>
                    <div className="w-[87%] flex gap-4 flex-wrap">
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\brave-svgrepo-com.svg" alt="Brave" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\vscode-svgrepo-com.svg" alt="VSCode" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\intellij-idea-svgrepo-com.svg" alt="IntelliJ" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="\icons\bitwarden-svgrepo-com.svg" alt="BitWarden" fill={true}></Image>
                            </div>
                        </div>
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

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Header from './components/header'
import Footer from "./components/footer";
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
                <div className="h-screen items-center flex flex-col justify-center">
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

                <div id="skills" className="min-h-[60vh] m-[5vh]" >
                    <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">Je travaille avec :</h3>
                    <div className="w-[90%] mx-auto flex gap-4 wrap">
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">J&apos;utilise :</h3>
                    <div className="w-[90%] mx-auto flex gap-4 wrap">
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
                        <div className="border-2 h-15 w-30 rounded-4xl flex items-center justify-center">
                            <div className="relative h-8 w-8">
                                <Image src="/img/html-124-svgrepo-com.svg" alt="HTML" fill={true}></Image>
                            </div>
                        </div>
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

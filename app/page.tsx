/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Header from './components/header'
import Footer from "./components/footer";

export default function App() {


    return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">

        <Header />

        <div id="page" className=" flex flex-col items-center h-[100vh] my-50">
            <section id="parallax" className="h-[80vh]">
                <h1 className="text-center">Bienvenue dans mon</h1>
                <h1 className="text-center">PORTFOLIO</h1>
            </section>

            <section id="infos" className="w-[80%]">
                <section>
                    <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque quae in minus neque corporis.
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni necessitatibus, quibusdam ad
                    provident officia laudantium voluptatem ab ut dolor nemo facere eveniet velit quisquam molestiae, incidunt
                    praesentium minima! Aperiam nam iure quidem dolor nostrum sed magnam at facere error! Dolor accusamus eaque
                    placeat dolore, cumque excepturi aperiam corrupti quis iste, mollitia aliquam iusto aspernatur exercitationem
                    nam ipsa maiores quibusdam voluptate libero porro explicabo illo. Deserunt cumque maiores soluta repellendus
                    exercitationem laborum minus odio? Consectetur iste labore accusamus dolore asperiores beatae placeat est
                    explicabo aspernatur eos aut repellendus in ullam nesciunt ab earum, accusantium amet dolorem at numquam
                    nihil ex.
                    </p>
                </section>

                <section id="skills">
                    <h3>Je travaille avec :</h3>
                    <div>
                        <a href="#">GoLang</a>
                        <a href="#">HTML</a>
                        <a href="#">CSS</a>
                        <a href="#">JavaScript</a>
                        <a href="#">Kotlin / Java</a>
                        <a href="#">SQL</a>
                        <a href="#">Python</a>
                    </div>
                </section>

                <section>
                    <h3>Voici quelques-uns de mes projets :</h3>
                    <div>
                        <a href="#">Quadtree</a>
                        <a href="#">BD</a>
                        <a href="#">Site 1</a>
                        <a href="#">Site 2</a>
                        <a href="#">Portfolio</a>
                    </div>
                </section>
            </section>
        </div>

        <Footer />

    </div>
  );
}

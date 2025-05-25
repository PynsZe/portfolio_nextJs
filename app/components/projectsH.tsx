import React from "react"
import Link from "next/link"

export default function ProjectsH(){
    return(
        <div id="projects" className="h-[100vh] ">
            <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">Voici quelques-uns de mes projets :</h3>
            <div>
                <Link href="/">Portfolio</Link>
                <Link href="https://gitlab.univ-nantes.fr/E248268G/farge-tong-hatet-quadtree-sae">Quadtree</Link>
                <Link href="https://docs.google.com/document/d/1TEhzGx-T3rmBIp_RMVq2A9e8uaPJf4WUEYYIvv3wgY8/edit?tab=t.0">BD</Link>
                <Link href="https://gitlab.univ-nantes.fr/pub/but/but1/r1.02/r1.02.dm/tp1-1/equipe-11-05_goncalves-amorim-diego_tong-hatet-mathis">Site 1</Link>
                <Link href="https://gitlab.univ-nantes.fr/E243619D/site-web-communication">Site 2</Link>
            </div>
        </div>
    )
}
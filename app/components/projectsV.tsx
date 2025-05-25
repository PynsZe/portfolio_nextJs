'use client'

import React from 'react'

// Your project items
const projects = [
  { name: 'Portfolio', href: '/' },
  { name: 'Quadtree', href: 'https://gitlab.univ-nantes.fr/E248268G/farge-tong-hatet-quadtree-sae' },
  { name: 'BD', href: 'https://docs.google.com/document/d/1TEhzGx-T3rmBIp_RMVq2A9e8uaPJf4WUEYYIvv3wgY8/edit?tab=t.0' },
  { name: 'Site 1', href: 'https://gitlab.univ-nantes.fr/pub/but/but1/r1.02/r1.02.dm/tp1-1/equipe-11-05_goncalves-amorim-diego_tong-hatet-mathis' },
  { name: 'Site 2', href: 'https://gitlab.univ-nantes.fr/E243619D/site-web-communication' },
]

// Duplicated list for infinite loop

export default function ProjectsV() {
  return (
    <div id="projects" className="h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <h3 className="text-[#359381] text-3xl mb-10 text-center">
        Voici quelques-uns de mes projets :
      </h3>
      <div className="relative w-full max-w-[100vw] overflow-hidden">
        <ul>
          {
            projects.map((projectName) => (
              <li key={projectName.name}>{projectName.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

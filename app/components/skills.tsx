'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"

const skills = [
  { name: "HTML", href: "https://developer.mozilla.org/fr/docs/Web/HTML", icon: "/icons/html-124-svgrepo-com.svg", width: "w-[25vw]" },
  { name: "CSS", href: "https://developer.mozilla.org/fr/docs/Web/CSS", icon: "/icons/css3-02-svgrepo-com.svg", width: "w-[25vw]" },
  { name: "JavaScript", href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", icon: "/icons/js01-svgrepo-com.svg", width: "w-[25vw]" },
  { name: "TailWind", href: "https://tailwindcss.com/", icon: "/icons/tailwind-svgrepo-com.svg", width: "w-[35vw]" },
  { name: "React", href: "https://fr.react.dev/", icon: "/icons/react-svgrepo-com.svg", width: "w-[40vw]" },
  { name: "Oracle SQL", href: "https://www.oracle.com/fr/database/technologies/appdev/sql.html", icon: "/icons/sql-dev3.svg", width: "w-[40vw]" },
  { name: "Python", href: "https://www.python.org/", icon: "/icons/python-svgrepo-com.svg", width: "w-[40vw]" },
  { name: "GoLang", href: "https://go.dev/", icon: "/icons/go-svgrepo-com.svg", width: "w-[35vw]" },
  { name: "Kotlin", href: "https://kotlinlang.org/", icon: "/icons/kotlin-svgrepo-com.svg", width: "w-[40vw]" },
  { name: "Java", href: "https://www.java.com/", icon: "/icons/java-svgrepo-com.svg", width: "w-[25vw]" },
  { name: "NextJS", href: "https://nextjs.org/", icon: "/icons/nextjs-fill-svgrepo-com.svg", width: "w-[55vw]" },
]

const tools = [
  { name: "Brave", href: "https://www.oracle.com/fr/database/technologies/appdev/sql.html", icon: "/icons/brave-svgrepo-com.svg", width: "w-[40vw]" },
  { name: "VSCode", href: "https://www.python.org/", icon: "/icons/vscode-svgrepo-com.svg", width: "w-[40vw]" },
  { name: "BiteWarden", href: "https://go.dev/", icon: "/icons/bitwarden-svgrepo-com.svg", width: "w-[35vw]" },
  { name: "Windows", href: "https://kotlinlang.org/", icon: "/icons/windows-applications-svgrepo-com.svg", width: "w-[40vw]" },
]

type SkillItemProps = {
  name: string
  href: string
  icon: string
  width: string
}

const SkillItem = ({ name, href, icon, width }: SkillItemProps) => (
  <li>
    <Link href={href} target="_blank" className="group relative flex justify-center">
      <span className="absolute hidden group-hover:inline-block bg-white text-sm font-semibold -translate-y-9">{name}</span>
      <div className={`${width} h-15 border-2 rounded-4xl flex items-center justify-center hover:shadow-[2px_2px_10px_3px_rgba(0,0,0,0.4)] hover:opacity-90 sm:w-35 transition duration-200 hover:-translate-y-2 border-gray-100`}>
        <div className="relative h-8 w-8">
          <Image src={icon} alt={name} fill />
        </div>
      </div>
    </Link>
  </li>
)


export default function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center min-h-[60vh] w-screen mt-10 mb-30 border-2">
      <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">Je travaille avec :</h3>
      <ul className="w-[87%] flex gap-4 flex-wrap">
        {skills.map(skill => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </ul>

      <h3 className="text-[#359381] text-3xl w-[80%] mx-auto my-10">J&apos;utilise :</h3>
      <ul className="w-[87%] flex gap-4 flex-wrap">
        {tools.map(tool => (
          <SkillItem key={tool.name} {...tool} />
        ))}
      </ul>
    </div>
  )
}

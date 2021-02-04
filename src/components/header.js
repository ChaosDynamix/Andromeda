import React from "react"
import {MarkGithubIcon} from "@primer/octicons-react"

export default function Header() {
    return(
        <header className="bg-blue-800 shadow">
            <div className="max-w-7xl mx-auto px-4 py-3">

                <div className="h-12 w-full flex justify-between text-blue-100">

                    {/* Left */}
                    <h1 className="h-full leading-12 align-middle">Andromeda</h1>

                    {/* Right */}
                    <div className="h-full flex">

                        {/* Navigation */}
                        <nav className="h-full">
                            <ul className="flex h-full space-x-10">
                                <li className="h-full">
                                    <a className="block h-full leading-12" href="">Blog</a>
                                </li>
                                <li className="h-full">
                                    <a className="block h-full leading-12" href="">Curriculum vitae</a>
                                </li>
                            </ul>
                        </nav>

                        {/* Separator */}
                        <div className="w-0.5 ml-8 mr-4 py-3">
                            <div className="w-full h-full bg-blue-600"></div>
                        </div>

                        {/* GitHub */}
                        <a className="flex justify-center items-center h-12 w-12 leading-4 hover:bg-blue-700 rounded-full" href="https://github.com/ChaosDynamix/Andromeda">
                            <MarkGithubIcon className="h-6 w-6"/>
                        </a>
                    </div>

                </div>

            </div>
        </header>
    );
}

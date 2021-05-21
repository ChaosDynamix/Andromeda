import {MarkGithubIcon} from "@primer/octicons-react"

export default function Header() {
  return(
    <header className="bg-gray-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="h-12 w-full flex justify-between text-gray-700">
          <h1 className="h-8 text-2xl font-medium self-center">Andromeda</h1>
          <div className="h-full flex">
            <a className="flex justify-center items-center h-12 w-12 leading-4 hover:bg-gray-200 rounded-full" href="https://github.com/ChaosDynamix/Andromeda">
              <MarkGithubIcon className="h-6 w-6"/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

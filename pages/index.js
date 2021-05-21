import Head from 'next/head'
import Header from "../components/header"

export default function Home() {
  return (
    <div className="h-screen bg-gray-200">
      <Head>
        <title>Andromeda - Personal website</title>
        <meta name="description" content="Andromeda is a personal website including a resume and a blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <Header />

      <main>
      </main>
    </div>
  );
}

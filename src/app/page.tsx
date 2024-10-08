import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="items-center flex flex-wrap mt-24">
        <div className="w-full lg:w-4/12 ml-auto mr-auto px-10 bg">
          <div className="bg-header">
            <h1 className="text-9xl">Indre Matre</h1>
            <p className="mt-8 text-2xl leading-relaxed text-blueGray-500">
              En liten plass på Vestlandet, med spektakulær utsikt og natur!
            </p>
          </div>
        </div>
        <div className="w-full md:w-7/12 ml-auto mr-auto px-4 bg-Image">
          <Image alt="Utsikt over hav og fjell i solskinnsvær" className="max-w-full rounded-lg shadow-lg" src="/indre-matre.jpg" width="800" height="0"/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-32 gallery">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover"
              src="/naust-indre-matre.jpg"
              alt="To naust som ligger ved vannkanten, med fjell i bakgrunn" width="500" height="0"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover"
              src="/bal-indre-matre.jpg"
              alt="Bålpanne med fjell i bakgrunn" width="500" height="0"
            />
          </div>

        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover"
              src="/svane-indre-matre.jpg"
              alt="Svane i sjøen" width="500" height="0"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover"
              src="/blomst-indre-matre.jpg"
              alt="Blomst med fjell og sjø i bakgrunn" width="500" height="0"
            />
          </div>
        </div>
      </div>
      <footer className="footer text-center p-4 text-white bg-stone-700">Nettsiden er designet og utviklet av <a href='https://skaalnes.no/' className='underline underline-offset-2'>Jorun Skålnes</a> | 2024</footer>

    </main>
  );
}

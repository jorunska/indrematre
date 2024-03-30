// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center flex flex-wrap mt-24">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-10 bg">
          <div>
            <h1 className="text-9xl font-semibold">Indre Matre</h1>
            <p className="mt-8 text-2xl leading-relaxed text-blueGray-500">
              En liten plass på Vestlandet, med spektakulær utsikt og natur!
            </p>
          </div>
        </div>
        <div className="w-full md:w-7/12 ml-auto mr-auto px-4">
          <img alt="Utsikt over hav og fjell i solskinnsvær" className="max-w-full rounded-lg shadow-lg" src="/indre-matre.jpg" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-32">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="/naust-indre-matre.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="/bal-indre-matre.jpg"
              alt="gallery-photo"
            />
          </div>

        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="/svane-indre-matre.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="/blomst-indre-matre.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
      <footer className="footer text-center p-4 text-white bg-stone-700">Nettsiden er designet og utviklet av <a href='https://skaalnes.no/' className='underline underline-offset-2'>Jorun Skålnes</a> | 2024</footer>

    </main>
  );
}

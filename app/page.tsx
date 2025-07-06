import Image from "next/image";

const locais = [
  {
    nome: "CENTRO",
    link: "https://www.google.com/maps?q=-22.9203497,-42.8200226&z=17&hl=pt-BR",
  },
  {
    nome: "São José",
    link: "https://www.google.com/maps?q=-22.93459701538086,-42.89671325683594&z=17&hl=pt-BR",
  },
  {
    nome: "Inoã",
    link: "https://www.google.com/maps?q=-22.91680335998535,-42.93476867675781&z=17&hl=pt-BR",
  },
  {
    nome: "Itaipuaçu Leste",
    link: "https://www.google.com/maps?q=-22.97018051147461,-42.921714782714844&z=17&hl=pt-BR",
  },
  {
    nome: "Itaipuaçu Central",
    link: "https://www.google.com/maps?q=-22.951250076293945,-42.95674133300781&z=17&hl=pt-BR",
  },
  {
    nome: "Barra de Maricá",
    link: "https://www.google.com/maps/place/22%C2%B057'16.0%22S+42%C2%B048'38.7%22W/@-22.9544487,-42.8133163,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-22.9544487!4d-42.8107414?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    nome: "Ponta Negra",
    link: "https://www.google.com/maps?q=-22.95464324951172,-42.69724655151367&z=17&hl=pt-BR",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-poderpop-black text-poderpop-red font-sans p-0 sm:p-4 px-2 sm:px-4 w-full max-w-full overflow-x-hidden">
      <header className="flex flex-col items-center mb-8 w-full max-w-full bg-red-600 py-1 sm:py-2 px-1 sm:px-4 rounded-xl">
        <div className="w-full flex justify-center items-start">
          <Image
            src="/logo.png"
            alt="Logo Poder Popular"
            width={320}
            height={180}
            className="object-contain mb-0 sm:w-[320px] sm:h-[180px]"
            priority
          />
        </div>
        <h1 className="mt-0 text-2xl sm:text-4xl font-bold tracking-tight uppercase text-white text-center drop-shadow-lg">
          PED 2025 - Eleições Internas do PT
        </h1>
        <p className="mt-3 text-base sm:text-lg text-white text-center max-w-2xl">
          Participe das eleições internas do Partido dos Trabalhadores! Confira abaixo os locais de votação do PED 2025 em Maricá e acesse o mapa para chegar até o seu local.
        </p>
      </header>

      {/* Card de Candidatos */}
      <section className="w-full max-w-full sm:max-w-xl bg-gradient-to-br from-white via-gray-200 to-gray-400 border-2 border-gray-300 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col gap-2 mb-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-2 text-2xl font-extrabold uppercase">
            <span className="text-red-600">DIEGO</span>
            <span className="text-yellow-400">★</span>
            <span className="text-black">ANDREA</span>
            <span className="text-black">|</span>
            <span className="text-black">EDINHO</span>
            <span className="text-yellow-400">★</span>
            <span className="text-red-600">QUAQUÁ</span>
          </div>
          <div className="text-xs text-black font-semibold uppercase tracking-wide text-center">
            Presidentes: Nacional, Estadual e Municipal
          </div>
          <div className="text-xl font-extrabold text-red-600 mt-2">VOTE CERTO!</div>
          <div className="flex flex-col items-center gap-1 mt-2">
            <div className="bg-black text-white px-4 py-1 rounded text-lg font-bold tracking-widest">DIA 06 DE JULHO</div>
            <div className="bg-yellow-400 text-black px-4 py-1 rounded text-lg font-bold tracking-widest">9H ÀS 17H</div>
          </div>
        </div>
      </section>

      {/* Card de Votação */}
      <section className="w-full max-w-full sm:max-w-xl bg-gradient-to-br from-white via-gray-200 to-gray-400 border-2 border-gray-300 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2 py-1 rounded font-bold text-lg">180</span>
            <span className="text-red-600 font-bold text-lg">EDINHO</span>
            <span className="ml-2 text-xs font-semibold text-black bg-yellow-300 px-2 py-0.5 rounded">Presidente Nacional</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white px-2 py-1 rounded font-bold text-lg">280</span>
            <span className="text-black font-bold text-xs">DERROTAR A EXTREMA-DIREITA E AVANÇAR NA CONSTRUÇÃO DE UM NOVO BRASIL</span>
            <span className="ml-2 text-xs font-semibold text-black bg-yellow-300 px-2 py-0.5 rounded">Chapa Nacional</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2 py-1 rounded font-bold text-lg">380</span>
            <span className="text-red-600 font-bold text-lg">DIEGO ZEIDAN</span>
            <span className="ml-2 text-xs font-semibold text-black bg-yellow-300 px-2 py-0.5 rounded">Presidente Estadual</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white px-2 py-1 rounded font-bold text-lg">480</span>
            <span className="text-black font-bold text-lg">CNB FAVELA</span>
            <span className="ml-2 text-xs font-semibold text-black bg-yellow-300 px-2 py-0.5 rounded">Chapa Estadual</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2 py-1 rounded font-bold text-lg">513</span>
            <span className="text-red-600 font-bold text-lg">ANDREA CUNHA</span>
            <span className="ml-2 text-xs font-semibold text-black bg-yellow-300 px-2 py-0.5 rounded">Presidente Municipal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white px-2 py-1 rounded font-bold text-lg">613</span>
            <span className="text-black font-bold text-lg">CNB</span>
            <span className="ml-2 text-xs font-semibold text-black bg-yellow-300 px-2 py-0.5 rounded">Chapa Municipal</span>
          </div>
        </div>
      </section>

      <main className="w-full max-w-full sm:max-w-xl rounded-lg shadow-lg p-4 sm:p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold bg-red-600 text-white rounded-lg px-6 py-2 mb-2 text-center">Locais de Votação</h2>
        <ul className="flex flex-col gap-3">
          {locais.map((local) => (
            <li key={local.nome} className="flex flex-nowrap items-center justify-between bg-red-600 rounded px-2 sm:px-4 py-2 group">
              <span className="flex-1 text-xs sm:text-base md:text-lg font-bold text-white uppercase tracking-wide truncate group-hover:text-yellow-400 active:text-yellow-400 focus:text-yellow-400 transition-colors">
                {local.nome}
              </span>
              {local.link ? (
                <a
                  href={local.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 sm:ml-4 w-auto min-w-[80px] sm:min-w-[96px] flex-shrink-0 flex justify-center items-center rounded font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-md hover:shadow-lg hover:scale-105 transition-all border border-yellow-500 px-2 sm:px-3 py-1"
                >
                  Ver mapa
                </a>
              ) : (
                <span className="ml-4 text-white/80 text-sm">Mapa em breve</span>
              )}
            </li>
          ))}
        </ul>
      </main>

      {/* Imagem motivos Diego - agora antes do footer */}
      <div className="w-full max-w-full flex justify-center p-0 m-0">
        <img
          src="/motivos-diego.JPG"
          alt="3 motivos para votar Diego para presidente do PTRJ"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto bg-white p-0 m-0 border-none shadow-none"
        />
      </div>

      <footer className="w-full mt-0 text-center text-xs bg-red-600 text-white flex flex-col items-center gap-2 py-4">
        <span>&copy; {new Date().getFullYear()} PED 2025 - Poder Popular / PT Maricá</span>
        <a
          href="https://www.instagram.com/poderpopular_oficial?igsh=MTlkY3ZmNjFjN2Nmdg=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md font-semibold text-base bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-red-700 border border-yellow-400 shadow-md hover:scale-105 hover:shadow-lg transition-all mt-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="18" height="18" className="inline"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
          Siga no Instagram
        </a>
      </footer>
    </div>
  );
}

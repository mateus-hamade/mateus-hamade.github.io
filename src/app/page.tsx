import { ArrowUpRight, Box, Database } from "lucide-react"

export const Home = () => {
  return (
    <div className="gap-4 bg-gray-950 text-gray-400 p-10">
      <div className="flex justify-between flex-col">
        <h1 className="md:text-3xl font-bold text-2xl">Mateus Hamade 👨‍💻</h1>
        <ul className="gap-4 py-4">
          <div className="flex items-center gap-2">
            <ArrowUpRight />
            <h2 className="underline text-md text-white">Redes Sociais</h2>
          </div>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin-icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4"
                height="12"
                x="2"
                y="9"></rect>
              <circle cx="4"
                cy="4"
                r="2"></circle>
            </svg>
            <a href="https://www.linkedin.com/in/mateus-hamade/"
              target="_blank"
              className="hover:text-green-400 transition-all">LinkedIn</a>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram-icon">
              <rect width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5"
                x2="17.51"
                y1="6.5"
                y2="6.5"></line>
            </svg>
            <a href="https://www.instagram.com/mateus_hamade25/"
              target="_blank"
              className="hover:text-green-400 transition-all">Instagram</a>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-smile-icon">
              <circle cx="12"
                cy="12"
                r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9"
                x2="9.01"
                y1="9"
                y2="9"></line>
              <line x1="15"
                x2="15.01"
                y1="9"
                y2="9"></line>
            </svg>
            <a href="https://huggingface.co/mateus-hamade"
              target="_blank"
              className="hover:text-green-400 transition-all">Hugging Face</a>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github-icon">
              <path 
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 
                0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 
                0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <a href="https://github.com/mateus-hamade"
              target="_blank"
              className="hover:text-green-400 transition-all">GitHub</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <ArrowUpRight />
          <h2 className="underline text-md text-white">Síntese das qualificações</h2>
        </div>
        <div className="flex items-center gap-2 py-4">
          <p className="text-justify">
              Profissional formado em Ciência da Computação, com sólidos conhecimentos em 
            <span className="text-green-400"> Estruturas de Dados e Algoritmos</span> demonstrando um 
              forte interesse na área de desenvolvimento Full-Stack. 
               Possui experiência prática com <span className="text-green-400">JavaScript</span> e 
            <span className="text-green-400"> TypeScript</span>, atuando principalmente com 
            <span className="text-green-400"> React.js</span> e <span className="text-green-400">Next.js</span>. 
                Tem conhecimento em gerenciamento de estado utilizando 
            <span className="text-green-400"> Context API</span> e <span className="text-green-400">Redux</span>. 
              Conta com habilidades no uso de <span className="text-green-400">Tailwind CSS</span> para 
              construção de interfaces responsivas e modernas. 
              Experiência com <span className="text-green-400">bancos de dados relacionais e não-relacionais</span>, 
              como <span className="text-green-400">PostgreSQL</span> e <span className="text-green-400">
                MongoDB</span>. 
              Familiaridade com <span className="text-green-400">Git</span> e metodologias ágeis, 
              prezando pelo trabalho colaborativo, qualidade do código e atenção aos princípios de 
            <span className="text-green-400"> UI/UX</span>. 
              Comprometido em contribuir para projetos desafiadores 
              e no aprimoramento constante de suas habilidades técnicas.
          </p>
        </div>
      </div>
      <div className="pb-4">
        <div className="flex items-center gap-2">
          <ArrowUpRight />
          <h2 className="underline text-md text-white">Experiência</h2>
        </div>
        <div className="flex items-center gap-2 py-4">
          <p> <span className="text-green-400">Cachaça Gestor, Ouro Preto</span> – 
          Estágio em Desenvolvimento Full-Stack (Agosto 2024 - presente)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-justify">
           Minha experiência inclui a criação de interfaces de usuário com 
            <span className="text-green-400"> Next.js</span> e 
            <span className="text-green-400"> Tailwind CSS</span>, 
           assim como o desenvolvimento de APIs utilizando 
            <span className="text-green-400"> Node.js</span> e 
            <span className="text-green-400"> TypeScript</span>. 
           No gerenciamento de dados, atuo com <span className="text-green-400"> MongoDB</span>, 
           implementando soluções escaláveis e seguras. 
           Também sou responsável pela criação e execução de testes automatizados com 
            <span className="text-green-400"> Jest </span> 
           e pela elaboração de documentação técnica que apoia a manutenção e evolução dos projetos.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <ArrowUpRight />
          <h2 className="underline text-md text-white">Formação Acadêmica</h2>
        </div>
        <div className="flex items-center gap-2 py-4">
          <p> Bacharelado em Ciência da Computação – (2020 - 2025) 
            <span className="text-green-400"> Universidade Federal de Ouro Preto - UFOP/MG. </span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <ArrowUpRight />
          <h2 className="underline text-md text-white">Projetos</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 text-gray-300">
          <a href="https://github.com/mateus-hamade/information-retrieval-models"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Information Retrieval Models</p>
          </a>
          <a href="https://github.com/mateus-hamade/chatbot-ufop"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>ChatBot UFOP</p>
          </a>
          <a href="https://github.com/mateus-hamade/webscraping-python"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Web Scraping</p>
          </a>
          <a href="https://github.com/mateus-hamade/spotify-vue"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Spotify</p>
          </a>
          <a href="https://github.com/mateus-hamade/health-vue"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Health Hospital</p>
          </a>
          <a href="https://github.com/mateus-hamade/jokenpo-pygame"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Jokenpô</p>
          </a>
          <a href="https://github.com/mateus-hamade/promogames-django"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Promogames</p>
          </a>
          <a href="https://github.com/mateus-hamade/job-finder-node"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Job Finder</p>
          </a>
          <a href="https://github.com/mateus-hamade/plann.er"
            target="_blank"
            className="flex items-center gap-2 py-2 border border-gray-600 rounded px-2
             hover:bg-slate-900 transition-all hover:text-green-400">
            <Box size={"20px"} />
            <p>Plann.er</p>
          </a>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right-icon">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
          <h2 className="underline text-md">Banco de Dados</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          <div className="flex items-center py-4 gap-2 hover:text-green-400 transition-all">
            <Database size={"16px"}/> 
            <a href="https://huggingface.co/datasets/mateus-hamade/multiple-choice-questions"
              target="_blank"> Multiple Choice Questions </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


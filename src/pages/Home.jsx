import Header from "../components/Header";
import Card from "../components/Card";
import SolidJSIcon from "/SolidJS.svg";
import FirebaseIcon from "/Firebase.svg";
import TailwindcssIcon from "/Tailwindcss.svg";
import ViteIcon from "/Vite.svg";
import { A } from "@solidjs/router";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pb-7">
        <h1
          className="
          text-white text-2xl text-center
          mt-20 px-3"
        >
          Let's get to know the technologies of the{" "}
          <A
            target="_blank"
            href="https://github.com/jehaad1/SolidBase"
            className="font-bold"
          >
            SolidBase
          </A>{" "}
          stack.
        </h1>
        <div
          className="
          sm:w-10/12
          sm:grid
          grid-cols-2 grid-rows-2 gap-4
          flex flex-col items-center
          w-8/12 max-w-2xl
          relative
          mt-12"
        >
          <Card
            title="SolidJS"
            description="SolidJS is a JavaScript library for building fast and reactive user interfaces."
            icon={SolidJSIcon}
            url="https://www.solidjs.com/"
            classes="bg-gradient-to-l from-slate-500 to-slate-700 sm:rounded-br-none"
          />
          <Card
            title="Firebase"
            description="Firebase is a platform that provides awesome back-end services."
            icon={FirebaseIcon}
            url="https://firebase.google.com"
            classes="bg-gradient-to-r from-amber-300 to-orange-400 sm:rounded-bl-none"
          />
          <Card
            title="Tailwindcss"
            description="Tailwindcss is a CSS framework that provides classes to build web designs easily."
            icon={TailwindcssIcon}
            url="https://tailwindcss.com/"
            classes="bg-gradient-to-l from-cyan-600 to-sky-700 sm:rounded-tr-none"
          />
          <Card
            title="Vite"
            description="Vite is a JavaScript build tool that runs web apps locally with a dev server."
            icon={ViteIcon}
            url="https://vitejs.dev/"
            classes="bg-gradient-to-r from-indigo-400 to-fuchsia-500 sm:rounded-tl-none"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

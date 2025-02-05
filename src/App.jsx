import { useState } from "react";
import JSConfetti from 'js-confetti'

function App() {
  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})
  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)
  const [valueSi, setValueSi] = useState(false)

  let random = [
    { id: 1, description: "Di que sí, porfi 💕🥺", img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" },
    { id: 2, description: "Piénsalo otra vez... ¿sí? 🥰", img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif" },
    { id: 3, description: "Anda, di que sí, te haré muy feliz 💖", img: "https://www.gifmaniacos.es/wp-content/uploads/2019/05/gatitos-kawaii-gifmaniacos.es-19.gif" },
    { id: 4, description: "No tengas miedo, será algo hermoso ✨🥺", img: "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif" },
    { id: 5, description: "Confía en mí, será muy divertido 💓😚", img: "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif" },
    { id: 6, description: "No dudes, te hará muy muy feliz 💕🌸", img: "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif" },
    { id: 7, description: "Prometo que será inolvidable, como en un cuento de hadas ✨💖", img: "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif" },
    { id: 8, description: "No dejes que el miedo te aleje de algo tan lindo 🥺💫", img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" },
    { id: 9, description: "El destino nos está guiando, hay magia en el aire ✨💞", img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif" },
    { id: 10, description: "Te lo juro, no te arrepentirás, será maravilloso 💘🥰", img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif" }
];

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 10);
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }

  const handleImageLoad = () => {
    setImagenCargada(true);
  }

  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">¿Quieres ser mi San Valentín?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" : randomValor.img} 
              alt="San Valentín" 
              className="mx-auto" 
              width={400} 
              height={400} 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button 
                onClick={() => {
                  setValueSi(true);

                  jsConfetti.addConfetti({
                    emojis: ['😍', '🥰', '❤️', '😘'],
                    emojiSize: 70,
                    confettiNumber: 80,
                  });

                  // Redirige a Google después de 3 segundos
                  setTimeout(() => {
                    window.location.href = "https://enio-my-back-rose-page.vercel.app/";
                  }, 3000);
                }} 
                className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} 
                style={{ height: agrandar }}
              >
                Sí
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentín?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">¡Sabía que dirías que sí ❤️!</h1>
            <img src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif" alt="San Valentín" className="mx-auto" />
            <span hidden>{document.title = '¡Sabía que dirías que sí ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App;

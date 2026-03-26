export default function PerfilPage() {

  const seguidores = ["player1", "retroDev", "pixelFan"]
  const siguiendo = ["gameStudio", "devMario"]

  return (

    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-xl">

      <div className="flex items-center gap-6 mb-6">

        <div className="w-20 h-20 bg-gray-300 rounded-full" />

        <div>
          <h1 className="text-2xl font-bold">
            gamer123
          </h1>

          <p className="text-gray-500">
            Amante de los videojuegos indie 🎮
          </p>
        </div>

      </div>

      <div className="flex gap-10 mb-6">

        <div>
          <p className="font-bold text-lg">
            {seguidores.length}
          </p>
          <p className="text-gray-500">
            Seguidores
          </p>
        </div>

        <div>
          <p className="font-bold text-lg">
            {siguiendo.length}
          </p>
          <p className="text-gray-500">
            Siguiendo
          </p>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <h2 className="font-bold mb-2">
            Seguidores
          </h2>

          {seguidores.map((user, i) => (
            <p key={i}>@{user}</p>
          ))}

        </div>

        <div>
          <h2 className="font-bold mb-2">
            Siguiendo
          </h2>

          {siguiendo.map((user, i) => (
            <p key={i}>@{user}</p>
          ))}

        </div>

      </div>

    </div>

  )
}
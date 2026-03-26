export default function LoginPage() {

  return (

    <div className="bg-white p-10 rounded-xl shadow-md w-96">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Iniciar sesión
      </h1>

      <form className="flex flex-col gap-4">

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 rounded"
        />

        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>

      </form>

    </div>

  )
}

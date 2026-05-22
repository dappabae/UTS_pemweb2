import converse from "../../assets/Converse.png";

export default function Dashboardindex() {
  return (
    <div className="flex flex-col gap-8">
      {/* hero */}
      <div className="bg-linear-to-r from-amber-800 to-orange-500 rounded-2xl p-8 text-white flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-3">
            Welcome to Converse
          </h1>

          <p className="text-white/90 max-w-xl">
            Kelola data barang, category, pembicara, dan event Invofest dengan mudah melalui dashboard admin.
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src={converse}
            alt="Converse"
            className="w-52 h-24 object-countain"
            />
        </div>
      </div>

      {/* statistik */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Total Barang</p>
          <h2 className="text-3xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Total Category</p>
          <h2 className="text-3xl font-bold mt-2">4</h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Total Pembicara</p>
          <h2 className="text-3xl font-bold mt-2">3</h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Total Event</p>
          <h2 className="text-3xl font-bold mt-2">5</h2>
        </div>
      </div>

      {/* bawah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Event Terbaru
          </h2>

          <div className="flex flex-col gap-4">
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">IT Seminar</h3>
              <p className="text-sm text-gray-500">20 Juni 2026 • Aula Kampus</p>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">UI/UX Workshop</h3>
              <p className="text-sm text-gray-500">25 Juni 2026 • Ruang Multimedia</p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Aktivitas Admin
          </h2>

          <div className="flex flex-col gap-4 text-gray-600">
            <p>Data category berhasil ditambahkan</p>
            <p>Data pembicara berhasil diperbarui</p>
            <p>Event baru berhasil dibuat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// import { Link } from "react-router-dom";

export default function BarangIndex() {
  return (
    <div className="flex flex-col gap-6">

      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Barang
          </h1>

          <p className="text-gray-500 mt-1">
            Kelola data barang di sini
          </p>
        </div>

        {/* button tambah
        <Link
          to="/dashboard/barang/create"
          className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition font-medium"
        >
          + Tambah Barang
        </Link> */}
      </div>

      {/* content */}
      <div className="bg-gray-50 border rounded-2xl p-6 min-h-100 flex items-center justify-center">
        <p className="text-gray-400 text-lg">
          Belum ada data barang
        </p>
      </div>

    </div>
  );
}
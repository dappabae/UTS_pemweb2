import { Link } from "react-router-dom";
import { useState } from "react";

export default function BarangCreate() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-6">

      {/* header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Tambah Barang
        </h1>

        <p className="text-gray-500 mt-1">
          Tambahkan data barang baru di sini
        </p>
      </div>

      {/* form */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm">

        <form className="flex flex-col gap-5">

          {/* nama barang */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Nama Barang
            </label>

            <input
              type="text"
              placeholder="Masukkan nama barang"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* harga dan stok */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Harga Barang
              </label>

              <input
                type="number"
                placeholder="Masukkan harga barang"
                className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Stock Barang
              </label>

              <input
                type="number"
                placeholder="Masukkan stock barang"
                className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

          </div>

          {/* deskripsi */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Deskripsi Barang
            </label>

            <textarea
              rows={4}
              placeholder="Masukkan deskripsi barang"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* image */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Image URL
            </label>

            <input
              type="text"
              name="name"
              placeholder="Masukkan URL gambar barang"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          {/* button */}
          <div className="flex gap-3 mt-4">

            <button
              type="submit"
              className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition"
            >
              Simpan
            </button>

            <Link
              to="/dashboard/barang"
              className="px-5 py-3 bg-gray-200 text-black rounded-xl hover:bg-gray-300 transition"
            >
              Kembali
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}
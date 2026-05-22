import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PembicaraCreate() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch("https://back-end-converse-jkmq.vercel.app/pembicara", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      alert("Data pembicara berhasil ditambahkan");

      navigate("/dashboard/pembicara");

    } catch (error) {
      console.log("Gagal menambahkan data", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">

      {/* header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Tambah Pembicara
        </h1>

        <p className="text-gray-500 mt-1">
          Tambahkan data pembicara baru
        </p>
      </div>

      {/* form */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm">

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >

          {/* nama */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Nama Pembicara
            </label>

            <input
              type="text"
              name="name"
              placeholder="Masukkan nama pembicara"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* bidang */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Bidang
            </label>

            <input
              type="text"
              name="role"
              placeholder="Masukkan Bidangnya"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          {/* image */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="Masukkan URL gambar"
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
              to="/dashboard/pembicara"
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
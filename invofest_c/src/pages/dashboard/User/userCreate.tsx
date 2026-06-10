import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    foto: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
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
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      alert("Data user berhasil ditambahkan");

      navigate("/dashboard/user");
    } catch (error) {
      console.log("Gagal menambahkan user", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Tambah User
        </h1>

        <p className="text-gray-500 mt-1">
          Tambahkan data user baru
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Nama User
            </label>

            <input
              type="text"
              name="name"
              placeholder="Masukkan nama user"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Masukkan email user"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Masukkan password user"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* foto */}
        <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
                Foto User
            </label>

            <input
                type="text"
                name="foto"
                placeholder="Masukkan URL foto"
                className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.foto}
                onChange={handleChange}
            />
        </div>

          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition"
            >
              Simpan
            </button>

            <Link
              to="/dashboard/user"
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
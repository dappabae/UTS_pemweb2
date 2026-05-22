import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CategoryCreate() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch("https://back-end-converse-jkmq.vercel.app/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });

      const data = await response.json();

      console.log(data);

      alert("Category berhasil ditambahkan");

      navigate("/dashboard/category");

    } catch (error) {
      console.log("Gagal menambahkan category", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Tambah Category
        </h1>

        <p className="text-gray-500 mt-1">
          Tambahkan category baru di sini
        </p>
      </div>

      {/* form */}
      <div className="bg-gray-50 border rounded-2xl p-6">
        
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >

          {/* input */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Nama Category
            </label>

            <input
              type="text"
              placeholder="Masukkan nama category"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* button */}
          <div className="flex gap-3">
            
            <button
              type="submit"
              className="bg-amber-500 text-white px-5 py-3 rounded-xl hover:bg-amber-600 transition"
            >
              Simpan
            </button>

            <Link
              to="/dashboard/category"
              className="bg-gray-200 text-black px-5 py-3 rounded-xl hover:bg-gray-300 transition"
            >
              Kembali
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}
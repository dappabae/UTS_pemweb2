import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EventCreate() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    dateEvent: "",
    categoryId: "",
    pembicaraId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
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

      const response = await fetch("https://back-end-converse-jkmq.vercel.app/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      alert("Event berhasil ditambahkan");

      navigate("/dashboard/event");

    } catch (error) {
      console.log("Gagal menambahkan event", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Tambah Event
        </h1>

        <p className="text-gray-500 mt-1">
          Tambahkan data event baru di sini
        </p>
      </div>

      {/* form */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Nama Event
            </label>

            <input
              type="text"
              name="title"
              placeholder="Masukkan nama event"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Category Event
            </label>

            <select
              name="categoryId"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.categoryId}
              onChange={handleChange}
            >
              <option value="">Pilih category</option>
              <option value="1">Seminar</option>
              <option value="2">Workshop</option>
              <option value="3">Competition</option>
              <option value="4">Talkshow</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Pembicara
            </label>

            <select
              name="pembicaraId"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.pembicaraId}
              onChange={handleChange}
            >
              <option value="">Pilih pembicara</option>
              <option value="1">Memet Jaya</option>
              <option value="2">Chulo Appa</option>
              <option value="3">Gibran Ahmad</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Tanggal Event
              </label>

              <input
                type="date"
                name="dateEvent"
                className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.dateEvent}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Lokasi Event
              </label>

              <input
                type="text"
                name="location"
                placeholder="Masukkan lokasi event"
                className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Deskripsi Event
            </label>

            <textarea
              rows={4}
              name="description"
              placeholder="Masukkan deskripsi event"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.description}
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
              to="/dashboard/event"
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
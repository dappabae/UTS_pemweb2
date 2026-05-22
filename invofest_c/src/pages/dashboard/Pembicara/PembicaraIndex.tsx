import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PembicaraIndex() {

  const [pembicara, setPembicara] = useState<any[]>([]);

  const handleDelete = async (id: number) => {
  try {
    await fetch(`http://localhost:3000/pembicara/${id}`, {
      method: "DELETE",
    });

    setPembicara(pembicara.filter((item) => item.id !== id));
  } catch (error) {
    console.log("Gagal menghapus pembicara", error);
  }
};

  useEffect(() => {
    const fetchPembicara = async () => {
      try {
        const response = await fetch("http://localhost:3000/pembicara");

        const data = await response.json();

        setPembicara(data);
      } catch (error) {
        console.log("Gagal mengambil data pembicara", error);
      }
    };

    fetchPembicara();
  }, []);

  return (
    <div className="flex flex-col gap-6">

      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Pembicara
          </h1>

          <p className="text-gray-500 mt-1">
            Kelola data pembicara di sini
          </p>
        </div>

        {/* button tambah */}
        <Link
          to="/dashboard/pembicara/create"
          className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition font-medium"
        >
          Tambah Pembicara
        </Link>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {pembicara.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            
            <div className="flex flex-col gap-2">

              <h2 className="text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-gray-500">
                {item.role}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {item.description}
              </p>

              <div className="flex gap-3 mt-5">
              <Link
                to="/dashboard/pembicara/create"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
              >
                Delete
              </button>
            </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
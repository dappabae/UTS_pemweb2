import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Categoryindex() {

  const [categories, setCategories] = useState<any[]>([]);

  const handleDelete = async (id: number) => {
    try {

      await fetch(`http://localhost:3000/category/${id}`, {
        method: "DELETE",
      });

      setCategories(
        categories.filter((item) => item.id !== id)
      );

    } catch (error) {
      console.log("Gagal menghapus category", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/category");

        const data = await response.json();

        setCategories(data);

      } catch (error) {
        console.log("Gagal mengambil data category", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Category
          </h1>

          <p className="text-gray-500 mt-1">
            Kelola data category di sini
          </p>
        </div>

        <Link
          to="/dashboard/category/create"
          className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition font-medium"
        >
        Tambah Category
        </Link>
      </div>

      {/* content */}
      <div className="bg-gray-50 border rounded-2xl p-6 min-h-100">

        {categories.length > 0 ? (
          <div className="flex flex-col gap-4">

            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-4 shadow-sm flex items-center justify-between"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
                >
                  Delete
                </button>
              </div>
            ))}

          </div>
        ) : (
          <p className="text-gray-400 text-center mt-10">
            Belum ada data category   
          </p>
        )}

      </div>
    </div>
  );
}
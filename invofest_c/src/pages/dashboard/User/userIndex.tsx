import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserIndex() {
  const [users, setUsers] = useState<any[]>([]);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://back-end-converse-jkmq.vercel.app/user/${id}`, {
        method: "DELETE",
      });

      setUsers(users.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Gagal menghapus user", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://back-end-converse-jkmq.vercel.app/user"
        );

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log("Gagal mengambil data user", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            User
          </h1>

          <p className="text-gray-500 mt-1">
            Kelola data user di sini
          </p>
        </div>

        <Link
          to="/dashboard/user/create"
          className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition font-medium"
        >
          Tambah User
        </Link>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {users.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-gray-500">
                {item.email}
              </p>

              <div className="flex gap-3 mt-5">
                <Link
                  to="/dashboard/user/create"
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
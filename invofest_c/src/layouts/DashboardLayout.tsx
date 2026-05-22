import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handlelogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* kiri / sidebar */}
      <div className="bg-amber-900 w-64 flex flex-col justify-between p-6 text-white">
        {/* atas */}
        <div>
          <h1 className="text-3xl font-bold text-center mb-10">
            CONVERSE
          </h1>

          {/* menu */}
          <ul className="flex flex-col gap-3 w-full">
            <li>
              <Link
                to="/dashboard"
                className="block w-full p-4 rounded-2xl bg-amber-800 hover:bg-white hover:text-black transition font-medium shadow-sm"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/Barangindex"
                className="block w-full p-4 rounded-2xl bg-amber-800 hover:bg-white hover:text-black transition font-medium shadow-sm"
              >
                Barang
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/category"
                className="block w-full p-4 rounded-2xl bg-amber-800 hover:bg-white hover:text-black transition font-medium shadow-sm"
              >
                Category
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/Pembicara"
                className="block w-full p-4 rounded-2xl bg-amber-800 hover:bg-white hover:text-black transition font-medium shadow-sm"
              >
                Pembicara
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/Event"
                className="block w-full p-4 rounded-2xl bg-amber-800 hover:bg-white hover:text-black transition font-medium shadow-sm"
              >
                Event
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/biodata"
                className="block w-full p-4 rounded-2xl bg-amber-800 hover:bg-white hover:text-black transition font-medium shadow-sm"
              >
                Biodata
              </Link>
            </li>
          </ul>
        </div>

        {/* bawah */}
        <button
          type="button"
          onClick={handlelogout}
          className="w-full p-4 bg-white text-black rounded-xl cursor-pointer hover:bg-gray-200 transition font-semibold"
        >
          Logout
        </button>
      </div>

      {/* kanan / content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-2xl shadow-md p-8 min-h-150">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
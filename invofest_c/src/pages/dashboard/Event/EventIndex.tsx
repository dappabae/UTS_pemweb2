import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EventIndex() {

  const [events, setEvents] = useState<any[]>([]);

  const handleDelete = async (id: number) => {
    try {

      await fetch(`/https://back-end-converse-jkmq.vercel.app/event/${id}`, {
        method: "DELETE",
      });

      setEvents(events.filter((event) => event.id !== id));

    } catch (error) {
      console.log("Gagal menghapus event", error);
    }
  };

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await fetch("https://back-end-converse-jkmq.vercel.app/event");

        const data = await response.json();

        setEvents(data);

      } catch (error) {
        console.log("Gagal mengambil data event", error);
      }
    };

    fetchEvents();

  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Event
          </h1>

          <p className="text-gray-500 mt-1">
            Kelola data event Invofest di sini
          </p>
        </div>

        <Link
          to="/dashboard/event/create"
          className="px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition font-medium"
        >
        Tambah Event
        </Link>
      </div>

      {/* list event */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  {event.category?.name}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h2>

              <p className="text-gray-500 text-sm mb-4">
                {event.description}
              </p>

              <div className="text-sm text-gray-600 flex flex-col gap-2">
                <p>
                  {new Date(event.dateEvent).toLocaleDateString()}
                </p>

                <p>
                  Lok. {event.location}
                </p>
              </div>

              <div className="flex gap-3 mt-5">
                <Link
                  to="/dashboard/event/create"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-3">
            Belum ada data event
          </p>
        )}

      </div>
    </div>
  );
}
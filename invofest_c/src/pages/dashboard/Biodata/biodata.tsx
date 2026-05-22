import profile from "../../../assets/saya.jpeg";

export default function Biodata() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Biodata
      </h1>

      <div className="bg-white border rounded-2xl p-8 shadow-sm flex flex-col items-center gap-6">
        
        <img
          src={profile}
          alt="Foto Profil"
          className="w-40 h-40 rounded-full object-cover border-4 border-amber-500 shadow"
        />

        <div className="w-full max-w-2xl flex flex-col gap-4">
          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-700">Nama</span>
            <span className="text-gray-600">Daffa Amri Hizbullah</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-700">NIM</span>
            <span className="text-gray-600">24090078</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-700">Tempat, Tanggal Lahir</span>
            <span className="text-gray-600">Belanda, 5 januari 2008</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-700">Kelas</span>
            <span className="text-gray-600">TI-4C</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-700">Jurusan</span>
            <span className="text-gray-600">Teknik Informatika</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-700">Status</span>
            <span className="text-gray-600">Mahasiswa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Bantuan() {
  const faqs = [
    {
      question: "Bagaimana cara membeli produk?",
      answer:
        "Pilih produk yang diinginkan, klik tombol beli, lalu lanjutkan ke proses checkout.",
    },
    {
      question: "Apakah bisa tukar ukuran?",
      answer:
        "Ya, Anda bisa menukar ukuran selama stok tersedia dalam waktu 7 hari.",
    },
    {
      question: "Berapa lama pengiriman?",
      answer:
        "Pengiriman memakan waktu 2-5 hari kerja tergantung lokasi.",
    },
    {
      question: "Metode pembayaran apa saja?",
      answer:
        "Kami menerima transfer bank, e-wallet, dan kartu kredit.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Pusat Bantuan
      </h1>

      {/* FAQ Section */}
      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <h2 className="font-semibold text-lg mb-2">
              {item.question}
            </h2>
            <p className="text-gray-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Butuh bantuan lebih lanjut?
        </h2>
        <p className="text-gray-600 mb-4">
          Hubungi kami melalui email atau WhatsApp.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:emailkamu@gmail.com"
            className="bg-black text-white px-6 py-2 rounded-lg inline-block"
            >
            Email
            </a>
          <a
            href="https://api.whatsapp.com/send/?phone=6281575111117&text&type=phone_number&app_absent=0"
            className="border border-black text-black px-6 py-2 rounded-lg inline-block"
            >
            Whatsapp
            </a>
        </div>
      </div>
    </div>
  );
}
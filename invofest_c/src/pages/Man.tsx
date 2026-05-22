import { Button } from "../components/ui/button";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Card } from "../components/ui/CardProject";

export default function Man() {
    const speakers = [
    {
      name: "Chuck 70",
      price: "Rp. 1.299.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CON162050C000003-1.jpg",
    },
    {
      name: "Run Star Trainer",
      price: "Rp. 1.299.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA08263C00509H-1.jpg",
    },
    {
      name: "Converse x CDG Chuck 70",
      price: "Rp. 2.499.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA08795C00W09H-1.jpg",
    },
    {
      name: "Converse x 1908 Jogger",
      price: "Rp. 1.599.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA21431C00G010-1.jpg",
    },
    {
      name: "Converse Sport Casual",
      price: "Rp. 1.099.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA16024C00G09H-1.jpg",
    },
    {
      name: "One Star 95",
      price: "Rp. 1.299.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA16027C12W09H-1.jpg",
    },
  ];

  const cardItems = [
    {
      title: "Chuck 70",
      description:
        "Sepatu high-top dengan upper kanvas premium dalam warna musiman Jahitan tongue bersayap untuk dukungan tambahan Patch bintang pergelangan kaki dan plat lisensi Terinspirasi dari arsip, midsole egret glossy Bantalan insole Ortholite",
    },
    {
      title: "Run Star Trainer",
      description:
        "Fitur dan Keunggulan Upper nilon awet dengan lapisan luar suede dan aksen kulit untuk tampilan dan sensasi yang mewah Bantalan busa CX membantu memberikan kenyamanan tingkat selanjutnya Sol luar karet dengan traksi yang memberikan cengkeraman Lubang tali sepatu dan tali sepatu berlapis menambah sentuhan premium Logo Star Chevron, All Star, dan Converse yang ikonis",
    },
    {
      title: "Converse x CDG Chuck 70",
      description:
        "Fitur dan Manfaat Bahan kanvas yang ringan dan tahan lama. Penutup ujung karet berwarna dan penahan tumit yang kontras untuk gaya yang menonjol. Desain bertali untuk kenyamanan yang pas. Sol karet vulkanisir untuk meningkatkan daya cengkeram. Logo hati dan mata yang khas menambah kesan menyenangkan.",
    },
    {
      title: "Converse x 1908 Jogger",
      description:
        "Green Glow/Nutria/Deep Dive",
    },
    {
      title: "Converse Sport Casual",
      description:
        "Fitur dan Keunggulan Upper kulit imitasi, dengan tampilan skate retro Busa memory foam responsif yang tetap nyaman Toe bumper suede yang lebih tangguh membantu memberi daya tahan optimal Warna-warna netral dan detail senada agar mudah dipadupadankan Star Chevron yang ikonis melambangkan warisan Converse",
    },
    {
      title: "One Star 95",
      description:
        "Fitur dan Keunggulan Upper suede dengan tampilan dan sensasi khas '95 One Star klasik Bantalan OrthoLite membantu memberi kenyamanan optimal Lebih lebar daripada One Star klasik membantu memberi tambahan kenyamanan Warna-warna klasik yang serasi dengan semua tampilanmu Logo '95 One Star orisinal melambangkan warisan sebagai sepatu favorit alternati",
    },    
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <section className="py-24">
          <h1 className="text-3xl font-bold text-center mb-10">
            Man (Laki-Laki)
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 flex flex-col"
              >
                <SpeakerCard
                  name={speaker.name}
                  price={speaker.price}
                  imageUrl={speaker.imageUrl}
                />

                <Button
                  label="Beli"
                  variant="outline"
                  className="mt-4 w-50 mx-auto"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h1 className="text-3xl font-bold text-center text-Black mb-10">
            Detail Produk
          </h1>

          <div className="py-10 grid grid-cols-1 md:grid-cols-1 gap-10 px-3">
            {cardItems.map((item, index) => (
              <Card key={index} className="w-full">
                <h3 className="text-xl text-Black mb-4">
                  {item.title}
                </h3>
                <p>{item.description}</p>

                <Button
                  label="Info Selengkapnya"
                  variant="primary"
                  className="mt-4"
                />
              </Card>
            ))}
          </div>
        </section>

      </div>
    </div>
    );
}
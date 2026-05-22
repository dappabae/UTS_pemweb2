import { Button } from "../components/ui/button";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Card } from "../components/ui/CardProject";

export default function Woman() {
    const speakers = [
    {
      name: "Chuck Taylor All Star",
      price: "Rp. 1.299.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA19911CGRE05H-1.jpg",
    },
    {
      name: "Run Star Trainer Stitched Suede",
      price: "Rp. 1.399.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA16076C00P06H-1.jpg",
    },
    {
      name: "Chuck Taylor All Star Lift Platform Heathered Glam",
      price: "Rp. 1.299.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA17597C01807H-1.jpg",
    },
    {
      name: "Chuck Taylor Lo",
      price: "Rp. 1.299.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA16122CIVO08H-1.jpg",
    },
    {
      name: "Run Star Trainer Ballet Flat",
      price: "Rp. 1.099.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA17029CLAV06H-1.jpg",
    },
    {
      name: "Chuck Taylor All Star Lift Double Stack",
      price: "Rp. 1.299.000",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA17884CTAU05H-1.jpg",
    },    
  ];

  const cardItems = [
    {
      title: "Chuck Taylor All Star",
      description:
        "Fitur dan Keunggulan Upper kanvas awet untuk tampilan dan sensasi Chucks klasik Bantalan OrthoLite membantu memberi kenyamanan optimal di bagian bawah kaki Syal satin mini yang bisa diikat atau tidak Sol luar berpola wajik Logo Chuck Taylor dan pelat merek All Star yang ikonis.",
    },
    {
      title: "Run Star Trainer Stitched Suede",
      description:
        "Fitur dan Keunggulan Suede dua warna yang awet untuk tampilan dan sensasi klasik Sockliner memory foam tiga lapis membantu memberi pijakan yang nyaman dan empuk di bagian bawah kaki yang mengikuti bentuk kakimu Sol luar karet bertraksi yang senada memberi cengkeraman Jahitan berhias menambah sentuhan yang elegan Logo-logo Star Chevron, All Star, dan Converse yang ikonis",
    },
    {
      title: "Chuck Taylor All Star Lift Platform Heathered Glam",
      description:
        "Fitur dan Keunggulan Upper kanvas heathered untuk tampilan dan sensasi khas Chucks Bantalan OrthoLite membantu memberi kenyamanan di bagian bawah kaki yang optimal Diambil dari nama pelatih basket dan penjual Converse, Chuck Taylor Eyelet emas, label di lidah sepatu, dan detail stud menambah sentuhan mewah.",
    },
    {
      title: "Chuck Taylor Lo",
      description:
        "Fitur dan Keunggulan Upper suede premium dan kerah tumit sepatu kulit untuk tampilan klasik Tali sepatu katun dan berpola bintik untuk gaya yang bisa diuba-ubah Sol tengah dengan busa ringan yang tersembunyi serta sockliner OrthoLite membantu memberi alas kaki optimal yang nyaman tanpa mengorbankan gaya Sol luar karet dan toe cap yang awet menciptakan tampilan terbaik Label lidah sepatu Iconic All Star dan logo tumit khas Chuck Taylor.",
    },
    {
      title: "Run Star Trainer Ballet Flat",
      description:
        "Fitur dan Keunggulan Upper kanvas awet dengan lapisan luar suede untuk tampilan dan sensasi mewah Sockliner memory foam tiga lapis membantu memberi pijakan di bagian bawah kaki yang nyaman dan empuk dan mengikuti bentuk kakimu Lapisan elastis lentur membantu membuatnya pas di kaki Sol luar karet bertraksi membantu memberi cengkeraman Logo-logo Star Chevron dan Converse yang ikonis.",
    },
    {
      title: "Chuck Taylor All Star Lift Double Stack",
      description:
        "Fitur dan Keunggulan Upper jacquard dengan motif rusa Bantalan EVA untuk kenyamanan yang terasa ringan dan berukuran lebih tinggi Eyelet perak untuk memberi sentuhan kilau Ukuran tinggi sol 2 Pleat merek All Star berukuran besar di tumit dan logo Chuck Taylor di bagian pergelangan kaki.",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <section className="py-24">
          <h1 className="text-3xl font-bold text-center mb-10">
            Produk Kami
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
                  variant="primary"
                  className="mt-4 w-50 mx-auto"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h1 className="text-3xl font-bold text-center text-black-900 mb-10">
            Detail Produk
          </h1>

          <div className="py-10 grid grid-cols-1 md:grid-cols-1 gap-10 px-3">
            {cardItems.map((item, index) => (
              <Card key={index} className="w-full">
                <h3 className="text-xl text-black mb-4">
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
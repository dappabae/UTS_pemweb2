import { Button } from "../components/ui/button";

type Product = {
  name: string;
  imageUrl: string;
};

export default function Shop() {
  const products: Product[] = [
    {
      name: "Converse x Comme des Garçons PLAY Chuck 70 Multi Heart",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA08147C005003-1.jpg",
    },
    {
      name: "Converse Essential Slide",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/c/o/cona12174c-1.jpg",
    },
    {
      name: "Retro Chuck Jacket",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONMJ11056010DA0XL-1.jpg",
    },
// woman
    {
      name: "Run Star Trainer",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA13053C0PK06H-1.jpg",
    },
    {
      name: "Chuck Taylor All Star Dainty Ballerina",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA18870CXM008H-1.jpg",
    },
    {
      name: "Sporty Crop Waffle Polo",
      imageUrl:
        "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONLO101610000W0XL-1.jpg",
    },
  ];
  
  const manProducts = products.slice(0, 3);
  const womanProducts = products.slice(3, 6);

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Shop Produk
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {manProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {product.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button
          label="MAN"
          variant="primary"
          className="px-10"
        />
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {womanProducts.map((product, index) => (
        <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src={product.imageUrl} className="w-full h-60 object-cover" />
        <div className="p-4">
            <h2 className="font-semibold">{product.name}</h2>
        </div>
        </div>
    ))}
    </div>

    <div className="text-center mt-6">
    <Button label="WOMAN" variant="primary" />
    </div>

    </div>
  );
}
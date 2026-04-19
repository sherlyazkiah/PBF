import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, [isLogin, push]);

   // function untuk mengambil data produk
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/produk");
      const responsedata = await response.json();
      setProducts(responsedata.data);
    } catch (error) {
      console.error("Error fetching produk:", error);
    }
  };

  // fetch pertama saat halaman dibuka
  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Daftar Produk</h1>

      {/* tombol refresh */}
      <button
        onClick={fetchProducts}
        className="mt-3 mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refresh Data
      </button>
      
      {products.map((products: ProductType) => (
        <div key={products.id}>
          <h2 className="text-xl font-semibold">{products.name}</h2>
          <p className="text-base">Harga: {products.price}</p>
          <p className="text-base">Ukuran: {products.size}</p>
          <p className="text-base">Kategori: {products.category}</p>

        </div>
      ))}
    </div>
  );
};

export default kategori;
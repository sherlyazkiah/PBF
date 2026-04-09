const MainSection = () => {
  return (
    <section className="p-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">
        Daftar Produk
      </h2>

      <ul className="space-y-3 w-64">
        <li className="bg-white shadow-md p-3 rounded text-center">
          Laptop
        </li>

        <li className="bg-white shadow-md p-3 rounded text-center">
          Smartphone
        </li>

        <li className="bg-white shadow-md p-3 rounded text-center">
          Headphone
        </li>
      </ul>
    </section>
  );
};

export default MainSection;
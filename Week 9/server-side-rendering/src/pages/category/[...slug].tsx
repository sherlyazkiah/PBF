import { useRouter } from "next/router";

const HalamanKategori = () => {
    // const Router = useRouter();
    // console.log(Router);
    const { query } = useRouter();

  return (
    <div>
      <h1>Halaman Kategori</h1>
      <h4>URL Parameters:</h4>
      <ul>
        {Array.isArray(query.slug) &&
          query.slug.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default HalamanKategori;
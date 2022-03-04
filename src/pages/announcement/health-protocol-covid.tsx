const HealthProtocolCovid = () => {
  return (
    <article>
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto space-y-8 max-w-prose">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Protokol Kesehatan Joyful Laundry selama masa pandemi COVID-19
          </h1>
          

          <div className="aspect-w-16 aspect-h-9">
            <img
              className="object-cover rounded-xl"
              src="https://www.hyperui.dev/photos/man-2.jpeg"
              alt=""
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ol>
              <li className="p-2 ">Semua karyawan laundry yang bekerja dipastikan dalam keadaan sehat.</li>
              <li className="p-2 ">Jaga jarak antara karyawan laundry dan customer.</li>
              <li className="p-2 ">Pencucian dengan deterjen konsentrat tinggi ditambah disinfektan.</li>
              <li className="p-2 ">Menggunakan mesin pengering di atas 65°C sehingga segala virus dan bakteri akan mati.</li>
              <li className="p-2 ">Menggunakan setrika uap boiler dengan suhu yang sangat tinggi.</li>
              <li className="p-2 ">Menggunakan sarung tangan plastik satu kali pakai per satu customer per satu kali pencucian.</li>
              <li className="p-2 ">Setiap karyawan wajib cuci tangan setelah mencuci pakaian customer.</li>
              <li className="p-2 ">Setiap karyawan wajib menggunakan masker saat melayani customer.</li>
              <li className="p-2 ">Memberlakukan sistem antar jemput gratis*.</li>
              <li className="p-2 ">Menggunakan water diffuser disinfektan sehingga ruangan laundry tetap bersih.</li>
              <li className="p-2 ">Rutin menyemprot ruangan laundry dengan disinfektan.</li>
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HealthProtocolCovid;

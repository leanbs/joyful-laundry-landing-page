import { useRouter } from 'next/router';

const Banner = () => {
  const router = useRouter();
  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://images.unsplash.com/photo-1587785580224-ff32e30978de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3089&q=80"
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Saatnya meninggalkan rutinitas mencuci baju sendiri.
            <strong className="font-extrabold text-rose-700 sm:block">
              Hemat 4 Jam per minggu
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Joyful Laundry dapat membantu mengambil, membersihkan, dan mengantar
            laundry kamu!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
              onClick={() => {
                router.push('/track/laundry');
              }}
            >
              Lacak
            </a>

            {/* <a
              className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

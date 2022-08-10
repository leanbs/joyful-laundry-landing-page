const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:p-6 lg:p-8">
      <details className="group" open>
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium">Can you guarantee a delivery date?</h2>

          <svg
            className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        {/* <div className="px-4 mt-4">
          <p className="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </div> */}
      </details>

      <details className="group">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium">What if my parcel is damaged?</h2>

          <svg
            className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        {/* <div className="px-4 mt-4">
          <p className="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </div> */}
      </details>

      <details className="group">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium">
            How do I send a gift without the person knowing?
          </h2>

          <svg
            className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        {/* <div className="px-4 mt-4">
          <p className="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </div> */}
      </details>
    </div>
  );
};

export default FAQ;

interface Props {
  reverse?: boolean;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Section = ({
  reverse = false,
  title,
  description,
  buttonText,
  onButtonClick,
}: Props) => {
  return (
    <section
      className={`relative flex flex-wrap ${reverse ? 'flex-row-reverse' : ''}`}
    >
      <div className="flex items-center w-full px-4 py-12  lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-96 lg:items-center">
        <div className="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-gray-500">{description}</p>

          <button
            className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg "
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1451933335233-c41672c8f378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
      </div>
    </section>
  );
};

export default Section;

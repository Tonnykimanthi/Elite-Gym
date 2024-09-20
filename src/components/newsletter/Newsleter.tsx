const Newsleter = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold max-md:text-center">
        Signup our newsletter to get update information, insight or news.
      </h3>
      <div className="my-10 flex h-14 items-center rounded-lg max-md:max-w-lg max-md:mx-auto bg-light/10 p-2">
        <input
          type="email"
          placeholder="Email"
          className="h-full w-full bg-transparent pl-2 outline-none"
        />
        <button className="h-full w-48 rounded bg-primary text-dark transition hover:bg-primary/80 active:scale-95">
          Subscribe
        </button>
      </div>
      <p className="max-md:text-center">
        We respect your privacy. Your information is safe and will never be
        shared
      </p>
    </div>
  );
};

export default Newsleter;

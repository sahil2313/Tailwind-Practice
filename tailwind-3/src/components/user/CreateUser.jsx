const CreateUser = () => {
  return (
    <div>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome! Please start by telling your name:
      </p>
      {/* <br /> */}
      <input className="w-72" type="text" placeholder="Your full name" />
    </div>
  );
};

export default CreateUser;

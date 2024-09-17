import CreateUser from './user/CreateUser';

export const Home = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-lg font-semibold">
        The best pizza. <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
};

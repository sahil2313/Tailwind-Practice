import Username from './user/Username';

// import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <a href="/" className="tracking-widest">
        Fast React Pizza Co.
      </a>
      <input
        type="text"
        placeholder="search order #"
        className="border-grey-500 block border"
      />
      <Username />
    </header>
  );
};

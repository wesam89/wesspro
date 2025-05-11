function Header({ children }) {
  return (
    <div className="sticky top-0 z-[20] flex justify-between border-b-5 border-yellow-400 bg-stone-800 px-3 py-5 align-middle">
      {children}
    </div>
  );
}

export default Header;

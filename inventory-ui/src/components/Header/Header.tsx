export const Header = () => {
  return (
    <header className="bg-zinc-600">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/">
              <span className="font-semibold text-lg">Inventory System</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

type NavigatorProps = {
  title: string;
};

export const Navigator = ({ title }: NavigatorProps) => {
  return (
    <header className="bg-zinc-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-8 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-zinc-800" href="/">
              <span className="font-medium">{title}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

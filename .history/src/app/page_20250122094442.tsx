export default function Layout() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] grid-cols-4 gap-4 p-4 min-h-screen">
      {/* Left Nav */}
      <nav className="bg-yellow-400 p-4 row-span-3 col-span-1">Nav</nav>

      {/* Header */}
      <header className="bg-yellow-400 p-4 col-span-3">Header</header>

      {/* Main Article */}
      <main className="bg-yellow-400 p-4 col-span-2">Article</main>

      {/* Ads */}
      <aside className="bg-yellow-400 p-4 row-span-2 col-span-1">Ads</aside>

      {/* Footer */}
      <footer className="bg-yellow-400 p-4 col-span-2 col-start-2">Footer</footer>
    </div>
  );
}
export default function Header() {
  return (
    <header className="w-full border-b border-[#E5E5E5]">
      <div className="flex py-4 mx-auto max-width-[960px]">
        <div className="font-bold text-4xl px-4 hover:cursor-pointer">
          hummusnotes
        </div>
        <nav className="nav-links px-4 flex items-center text-xl font-bold gap-5">
          <a>
            About
          </a>
          <a>
            Contact
          </a>
          <a>
            Notes
          </a>
        </nav>
      </div>
    </header>
  )


}
function NavBar() {
  return(
    <>
    <nav className="flex-auto max-w-[100%] bg-white border-b sticky top-0 py-2">
      <h1 className="text-center mb-0 text-xl">Héctor Hernandez</h1>
      <ul className="max-w-[100%] flex flex-auto justify-center m-0 p-0 mt-1">
        <li className="px-0"><a href="#top" className="no-underline rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</a></li>
        <li className="px-0"><a href="#education" className="no-underline rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Education</a></li>
        <li className="px-0"><a href="#skills" className="no-underline rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Skills</a></li>
        <li className="px-0"><a href="#contact" className="no-underline rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Contact</a></li>
      </ul>
    </nav>
    </>
  );
}

export default NavBar
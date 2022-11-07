const NavBar = () => {

    return (
        <div className="navbar">
            
<nav class="bg-white border-gray-200 px-2 py-3 dark:bg-red-600">
  <div class="container flex flex-wrap justify-between   mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Pringles_logo.png" class=" h-20 " alt="Pringles Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-red-600 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
        <li>
          <a href="/" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl" aria-current="page">INICIO</a>
        </li>
        <li>
          <a href="/products" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl">PRODUCTOS</a>
        </li>
        <li>
          <a href="/about" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl">NUESTRA MARCA</a>
        </li>
        <li>
          <a href="/contacto" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl">CONTACTO</a>
        </li>
        <li>
          <a href="/juego" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl">¡A JUGAR!</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}
export default NavBar
const NavBar = () => {

    return (
        <div className="navbar">
            
<nav class="  px-2 py-3 bg-red-600">
  <div class="container flex flex-wrap justify-between   mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Pringles_logo.png" class=" h-20 " alt="Pringles Logo" />
    </a>
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-red-600 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
        <li>
          <a href="/" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl" aria-current="page">INICIO</a>
        </li>
        <li>
          <a href="/products" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl">PRODUCTOS</a>
        </li>
        <li>
          <a href="/merchandising" class="font-bold block py-2 pr-4 pl-3 ue-700 md:p-0 bg-red-600 text-white hover:text-black focus:text-black text-xl" aria-current="page">MERCHANDISING</a>
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
import gorra from '../Imagenes/gorra.jpg'
import remeras from '../Imagenes/remeras.jpg'
import taza from '../Imagenes/taza.jpg'

const Products = () => {
    return (
        <div>
            <h1 className="flex justify-center font-display py-8 text-5xl">MERCHANDISING</h1>
            <div className="content-none border-b mx-60 border-red-600"></div>
            <div className="font-Hubballi ml-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:pr-8">
            <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img className=" rounded-xl h-52 mt-20" src={remeras} alt="Remeras pringles" />
            <h1 className="m-2 font-medium text-2xl pt-16 pl-10 right-[40%] bottom-0">Remera Pringles</h1>
            <br />
        </div>

        <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img className="  rounded-xl pl-16 h-60 mt-20" src={taza} alt="Taza pringles" />
            <h1 className="m-2 font-medium text-2xl pt-16 pl-10 right-[40%] bottom-0">Taza Pringles</h1>
            <br />
        </div>
    
         
        <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img  src={gorra} alt="Gorra pringles" />
            <h1 className="m-2 font-medium text-2xl pt-16 right-[40%] bottom-0">Gorra Pringles</h1>
            <br />
        </div>
        </div>
        </div>
    )
}

export default Products
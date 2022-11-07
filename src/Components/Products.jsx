const Products = () => {
    return (
        <div>
            <h1 className="flex justify-center font-display py-8 text-5xl">PRODUCTOS</h1>
            <div className="content-none border-b mx-60 border-red-600"></div>
            <div className="font-Hubballi ml-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:pr-8">
            <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img className=" rounded-xl lg:max-w-full  m-0" src="https://static.wixstatic.com/media/db7513_91596860eab14b6da6696cbb0200db99~mv2.png/v1/fill/w_257,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.png" alt="" />
            <h1 className="m-2 font-medium text-2xl pt-16 right-[40%] bottom-0">Pringles Original</h1>
            <br />
            <button className="inline-block text-xl bottom-0">Ver Más</button>
        </div>

        <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img className="  rounded-xl lg:max-w-full  m-0" src="https://static.wixstatic.com/media/db7513_da55c30847e749b99a05d1fbb6203a5d~mv2.png/v1/fill/w_257,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.png" alt="" />
            <h1 className="m-2 font-medium text-2xl pt-16 right-[40%] bottom-0">Pringles Crema y Cebolla</h1>
            <br />
            <button className="inline-block text-xl bottom-0">Ver Más</button>
        </div>
    
         
        <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img  src="https://static.wixstatic.com/media/db7513_2becaa8c3c7f4c669f1e8116075c7cc2~mv2.jpeg/v1/fill/w_257,h_257,al_c,lg_1,q_80,enc_auto/Image-empty-state.jpeg" alt="" />
            <h1 className="m-2 font-medium text-2xl pt-16 right-[40%] bottom-0">Pringles Wavy Jalapeño</h1>
            <br />
            <button className="inline-block text-xl bottom-0">Ver Más</button>
        </div>
        
        <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img  src="https://static.wixstatic.com/media/db7513_2348dcc0b81746018266d016a8ebaddc~mv2.jpeg/v1/fill/w_257,h_257,al_c,lg_1,q_80,enc_auto/Image-empty-state.jpeg" alt="" />
            <h1 className="m-2 font-medium text-2xl pt-16 right-[40%] bottom-0">Pringles Wavy Cheddar</h1>
            <br />
            <button className="inline-block text-xl bottom-0">Ver Más</button>
        </div>
        <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img className=" h-96 pt-10" src="data:image/jpeg;base64,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" alt="" />
            <h1 className="m-2 font-medium text-2xl pt-16 right-[40%] bottom-0">Pringles Wavy BBQ</h1>
            <br />
            <button className="inline-block text-xl bottom-0">Ver Más</button>
        </div>

        <div
      className=" flex flex-col-2 bg-white  max-w-3xl lg:h-full  h-1/2   
        justify-items-center rounded-xl border border-black my-6 mx-3 relative">

            <img className="w-96" src="https://onixsuper.com/wp-content/uploads/2021/08/38000184956.jpg" alt="" />
            <h1 className="m-2 font-medium text-2xl pt-16 right-[40%] bottom-0">Pringles Queso</h1>
            <br />
            <button className="inline-block text-xl bottom-0">Ver Más</button>
        </div>
        

        </div>
        </div>
    )
}

export default Products
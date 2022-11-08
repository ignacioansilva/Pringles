import { FaInstagram,FaTiktok,FaFacebookF,FaTwitter } from "react-icons/fa";
import Latas from "../Imagenes/Latas.png"

const Home = () => {
    return ( 
        <div className=" lg:pb-2 bg-contain">

            <div className="flex flex-col-3 bg-contain justify-between pt-20 bg-red-600">
                <div className="" >
                <h1 className="text-white font-display text-8xl ml-32 hover:text-yellow-400 cursor-pointer">PRINGLES</h1>

                    <img  className="h-96 mt-40"    
                    src={Latas} alt="Landing Page "/> 
                            {/* <img  className="h-96 mt-40"    
                            src="https://assets.stickpng.com/images/5954b96bdeaf2c03413be347.png" alt="Landing Page "/>      */}
                </div>
                {/* https://assets.stickpng.com/thumbs/5954b973deaf2c03413be348.png */}
                <div className="">
                    <img  className="w-2/3 "
                    src="https://www.pringles.com/content/dam/pringles/es_ES/images/promotions/promotion-header-mobile.png" align="right" alt="Landing Page "/>
                </div>

            </div>
            <div className="bg-white bg-contain">
                <div className="flex justify-around">
                    <div className="mt-32">
                    <a href="https://www.facebook.com/profile.php?id=100087212060173"><FaFacebookF  className="inline-block ml-4 mt-3 h-8 w-8 fill-black" /></a>

                    <a href="https://www.instagram.com/pringles.arg/"><FaInstagram  className="inline-block ml-4 mt-3 h-8 w-8 fill-black" /></a>
                    
                    <a href="https://twitter.com/pringles_argent"><FaTwitter  className="inline-block ml-4 mt-3 h-8 w-8 fill-black" /></a>

                    <a href="https://www.tiktok.com/@pringles.argentina?lang=es"><FaTiktok  className="inline-block ml-4 mt-3 h-8 w-8 fill-black" /></a>

  
                    </div>
                    
                    <div>
                      <div className="bg-yellow-400 bg contain m-20 p-10 inline-block shadow-xl">
                        <input type="text" placeholder="EMAIL" className="p-2"/>
                        <br />
                        <button className="text-xl font-display py-1 px-4 bg-white m-2 focus:bg-black focus:text-white
                        ">UNIRSE</button>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
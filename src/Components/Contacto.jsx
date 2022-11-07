import { FaInstagram,FaTiktok,FaFacebookF,FaTwitter } from "react-icons/fa";


const Contacto = () => {
    return (
        <div className=" bg-white lg:bg-contact-bg bg-no-repeat bg-cover lg:pt-52 lg:pb-2 ">
        <div className=" flex text-xl font-medium bg-red-700  rounded-xl bg-contain text-center m-auto place-content-center lg:my-6 lg:mx-40 p-10">
            
            <div className="m-10 p-10 texl-xl text-white">
                <h1>CONTACTO</h1>
                <h1 className="m-5">0 800 122 0451</h1>
            </div>
            <div className="m-10 p-10 texl-xl text-white">
                <h1>EMAIL</h1>
                <h1 className="m-5">consumer-affairs.la@kellogg.com</h1>
            </div>
            <div className="m-10 p-10 texl-xl text-white">
                <h1>REDES SOCIALES</h1>
                <div className="mt-2">
                    <FaFacebookF className="inline-block ml-2 mt-3 h-8 w-8 fill-white" />
                    <FaInstagram className="inline-block ml-2 mt-3 h-8 w-8 fill-white" />
                    <FaTiktok className="inline-block ml-2 mt-3 h-8 w-8 fill-white" />
                    <FaTwitter className="inline-block ml-2 mt-3 h-8 w-8 fill-white" />

                    </div>
            </div>
        </div>
        
        </div>
    )
}

export default Contacto
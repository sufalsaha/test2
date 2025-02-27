import Carousel from "./components/carousel";
import ImgSelider from "./components/img-carousel";
import App from "./components/test";




export default function Page(){
  return (
    <div className="bg-[#030E1C]">
      <h3>hello</h3>
      <Carousel />
      <ImgSelider />
     <div className="mt-[100px]">
     <App />
     </div>
    </div>
  )
}
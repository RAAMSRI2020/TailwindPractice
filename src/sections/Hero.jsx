import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { Button ,ShoeCard} from "../components"
import { shoes, statistics } from "../constants"
const Hero = () => {
  return (
    <section 
    id="home" 
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container p-2">
      <div className="relative xl:2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[82px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike Arrivals ,quality comfort and innovation for your active life.</p>
        <Button label='Shop now'
        iconURL={arrowRight}/>
        <div className="flex items-start justify-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=>(
              <div key={stat.label}>
                <p className="font-montserrat text-4xl font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat test-slate-gray">{stat.label}</p>
              </div>
          ))}
        </div>
      </div>
      <div className="realtive flex-1 flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} 
        alt="shoe collections"
        width={610}
        height={500}
        className="object-contain relative z-10"
        />
        <div>
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard 
              imageURL={shoe}
              changeBigShoeImage={()=>{}}
              bigShoeImage=''
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
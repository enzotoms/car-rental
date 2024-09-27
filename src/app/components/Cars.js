
// components
import Brand from "./Brand";
import CarSlider from "./CarSlider";

export default function Cars() {
  return (
    <section className="h-screen flex items-center" id="cars">
      <div className="container mx-auto">
          <Brand />
          <CarSlider />
      </div>
    </section>
  )
}
 
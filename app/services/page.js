import Service from '../components/Service';
import PageTitle from '../components/PageTitle';

export default function Services() {
  return (
    <>
      <PageTitle>Our Services</PageTitle>
      <div className="container">
        <Service
          title="Residential Interior and Exterior Painting"
          pic="/images/IMG_0007.jpg"
          alt="test"
        >
          Transform your home with professional painting services tailored to
          enhance durability and aesthetics. Whether it's refreshing walls
          indoors or protecting exteriors from harsh weather, our skilled
          painters ensure a flawless finish
        </Service>

        <Service
          title="Drywall Installation and Repair"
          pic="/images/IMG_0007.jpg"
          alt="test"
        >
          From new drywall installations to seamless repairs, we provide expert
          craftsmanship that ensures smooth surfaces and solid construction.
          Whether dealing with cracks, holes, or installing fresh drywall, we
          create a polished foundation for your walls.
        </Service>

        <Service
          title="Stipple Ceiling Removal"
          pic="/images/IMG_0007.jpg"
          alt="test"
        >
          Upgrade your ceilings by removing outdated stipple (popcorn) textures.
          Our dust-free, efficient removal process results in smooth, modern
          ceilings that brighten and update any room.
        </Service>

        <Service
          title="Baseboard Installation"
          pic="/images/IMG_0007.jpg"
          alt="test"
        >
          Achieve a polished, elegant look with expertly installed baseboards.
          We ensure precise cuts and seamless alignment, adding a refined finish
          to any space while protecting walls from daily wear.
        </Service>

        <Service
          title="Drywall Finishing: Mud and Tape Application"
          pic="/images/IMG_0007.jpg"
          alt="test"
        >
          Perfectly smooth drywall is achieved through precise mudding and
          taping. Our experts create seamless joints and durable surfaces,
          preparing walls for paint or texture application.
        </Service>
      </div>
    </>
  );
}

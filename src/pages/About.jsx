import Trevor from "../assets/images/trevor.png";
import Drew from "../assets/images/drew.png";
import Cole from "../assets/images/cole.png";
import Mascot from '../assets/svg/mascot.svg'
function About() {
  return (
    <div>
      <div className="flex justify-center my-10 ba">
        <div className="background standard">
          <h5 className="font-logo text-center text-5xl my-5 dark:text-neoblue">
            About Us
          </h5>
          <h5 className=" text-center text-xl">
            <p>Meet the staff at</p>{" "}
            <p className="font-logo dark:text-neoblue text-3xl">Stikify</p>
          </h5>

          <div className="flex justify-center ">
            <div className="lg:w-9/12">
              <People
                image={Trevor}
                name="Trevor"
                direction="left"
                text="My name is Trevor Hair"
              />
              <People
                image={Drew}
                name="Drew"
                direction="right"
                text="Hi, I'm Drew Ronsman"
              />
              <People
                image={Cole}
                name="Cole"
                direction="left"
                text="Hello, my name is Cole GilderSleeve"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="bg-gray-200 dark:bg-gray-600 p-3 mx-auto rounded-2xl w-10/12">
          <h5 className="font-logo text-center text-5xl my-5 dark:text-neoblue">
            Meet Our Mascot!
          </h5>

          <div className="flex justify-center ">
            <div className="lg:w-9/12">
              <div className="flex bg-gray-100 rounded-2xl dark:bg-gray-500 p-3">
                <img
                  src={Mascot}
                  alt="Mascot"
                  className="h-32 transform -rotate-12"
                />
                <p className="m-5">Meet Asher The Sticker Loving Avacado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function People(props) {
  const { image, name, text, direction } = props;
  const styles = {
    left: {
      justifyContent: "flex-start",
    },
    right: {
      justifyContent: "flex-end",
    },
  };
  return (
    <div
      className="flex mx-5 my-5 border-4 dark: border-transparent border-gray-400 rounded-2xl dark:bg-gray-500 p-5 w-11/12"
      style={styles[direction]}
    >
      <div className="flex start">
        {direction === "left" ? (
          <>
            <div className="p-3 lg:p-8  dark:border-gray-400 border-4 rounded-3xl">
              <h5 className="font-bold text-xl">{name}</h5>
              <img src={image} className=" w-16 rounded-full "alt='' />
            </div>

            <div className="ml-10">
              <p className="text-sm">{text}</p>
            </div>
          </>
        ) : (
          <>
            <div className="mr-10 mb-5">
              <p className="text-sm">{text}</p>
            </div>
            <div className="p-3 lg:p-8  dark:border-gray-400 border-4 rounded-3xl">
              <h5 className="font-bold text-xl ">{name}</h5>
              <img src={image} className=" w-16 lg:w-24 rounded-full " alt=''/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default About;

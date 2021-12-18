import Mascot from '../assets/svg/mascot.svg'

function Home() {
  return (
    <div className="flex justify-center my-10">
      <div className="background standard">
        <h5 className="font-logo text-center text-5xl my-5 dark:text-neoblue ">
          Home
        </h5>
        <div className="flex justify-evenly align-evenly">
          <div className="my-5 bg-gray-100 dark:bg-gray-500 p-3 rounded-3xl">
            <img
              src={Mascot}
              alt="Mascot"
              className="h-72 transform -rotate-12"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <p className="w-3/4 self-center p-3">
            We make high-quality stickers to represent you and your hobbies and
            interests. We source the highest quality stickers to meet your
            demands and specifications. We are currently a two-man operation,
            our mission is to enable people to customize more of what they love
            including water bottles, laptops, and wherever you can stick a
            custom sticker. We let the customers customize their stickers from
            any image, or we here at Stikify can design something from the
            bottom up.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;

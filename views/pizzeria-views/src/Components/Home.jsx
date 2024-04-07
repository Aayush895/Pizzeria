/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-4xl mb-4">Our Story</h1>
      </div>

      <div className="w-[94%] mx-auto">
        <p className="mb-6 text-xl leading-7">
          We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on
          our Facebook fan page. Fans were given situations where they had to
          come up with wacky and fun excuses. The person with the best excuse
          won the Best Excuse Badge and won Pizzeria's vouchers. Their
          enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the
          Tastiest Pan Pizza. Ever!
        </p>

        <p className="mb-6 text-xl leading-7">
          Ever since we launched the Tastiest Pan Pizza, ever, people have not
          been able to resist the softest, cheesiest, crunchiest, butteriest
          Domino's Fresh Pan Pizza. They have been leaving the stage in the
          middle of a performance and even finding excuses to be disqualified in
          a football match.
        </p>

        <p className="mb-6 text-xl leading-7">
          We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
          page. Fans were given situations where they had to come up with wacky
          and fun excuses. The person with the best excuse won the Best Excuse
          Badge and won Domino's vouchers. Their enthusiastic response proved
          that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
        </p>
      </div>

      <div className="w-[94%] mx-auto mt-16 mb-10 flex justify-around items-center">
        <div>
          <img
            src="https://image.shutterstock.com/shutterstock/photos/526830277/display_1500/stock-photo-raw-dough-for-pizza-with-ingredients-and-spices-on-table-526830277.jpg"
            alt="raw-dough-pizza"
            className="w-[70%] h-[60%]"
          />
        </div>

        <div className="w-[135%]">
          <h1 className="text-4xl mb-7">Ingredients</h1>
          <p className="text-xl">
            We're ruthless about goodness. We have no qualms about tearing up a
            day-old lettuce leaf (straight from the farm), or steaming a baby
            (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While
            they're still young and fresh - that's our motto. It makes the
            kitchen a better place.
          </p>
        </div>
      </div>

      <div className="w-[94%] mx-auto mt-16 mb-10 flex justify-between items-center">
        <div className="w-[50%]">
          <h1 className="text-4xl mb-7">Our Chefs</h1>
          <p className="text-xl">
            They make sauces sing and salads dance. They create magic with
            skill, knowledge, passion, and stirring spoons (among other things).
            They make goodness so good, it doesn't know what to do with itself.
            We do though. We send it to you.
          </p>
        </div>

        <div>
          <img
            src="https://thumb1.shutterstock.com/image-photo/stock-photo-happy-chef-450w-437116033.jpg"
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>

      <div className="w-[94%] mx-auto flex items-center">
        <div>
          <img
            src="https://thumb9.shutterstock.com/image-photo/stock-photo-vintage-analog-kitchen-countdown-timer-with-classical-clock-face-and-red-remaining-time-display-450w-669255388.jpg"
            alt="timer"
          />
        </div>

        <div>
          <h1 className="text-4xl mx-10">45 min delivery</h1>
        </div>
      </div>
    </div>
  )
}
export default Home

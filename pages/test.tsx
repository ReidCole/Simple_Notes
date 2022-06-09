import { NextPage } from "next";
import Notification from "../components/Notification";
import useNotificationState from "../hooks/useNotificationState";

const Test: NextPage = () => {
  const [ns, sn] = useNotificationState();

  return (
    <div>
      <button onClick={() => sn("sup we fwe fwefwe weeee", "bg-red-400 border-red-500")}>
        Notify
      </button>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id fugit quam cupiditate
        nesciunt, aperiam facere dolorem, labore laborum assumenda deserunt commodi quaerat.
        Voluptatibus ut modi minima soluta, temporibus quaerat eligendi hic quibusdam nostrum
        exercitationem repudiandae dolor? Nostrum eaque obcaecati illum officiis eligendi maiores,
        et, nemo, in iste repellat recusandae ab dolores iure quo temporibus quidem error corporis
        illo. Veniam repudiandae alias veritatis nulla obcaecati mollitia, nesciunt debitis quisquam
        optio, voluptate dolor enim quis quidem aspernatur aut quaerat, quod beatae consectetur id
        cum labore earum? Quasi dolorem in eveniet numquam architecto quas nam suscipit animi nihil,
        sunt deleniti aliquid fugit eius ipsum similique ipsa! Aspernatur animi praesentium fugit
        blanditiis perferendis. Consequatur cumque doloremque odit nulla dolore dolores error
        expedita fugit eius provident veniam sed iste sit rem quasi ratione deleniti natus, nihil
        pariatur. Ea mollitia perferendis, neque quidem, aspernatur asperiores ratione consequuntur
        eum nihil odio officia blanditiis expedita pariatur reiciendis soluta? Reiciendis suscipit
        placeat earum ducimus nam sunt ut quaerat pariatur facere corporis? Cumque tenetur
        reprehenderit porro ullam a vitae possimus perferendis aperiam! Repellendus eaque explicabo
        consectetur? Quae cum cupiditate nobis ullam provident hic quisquam quis, placeat aut
        blanditiis libero, enim sit animi. Quae fuga saepe optio pariatur eius dolore?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id fugit quam cupiditate
        nesciunt, aperiam facere dolorem, labore laborum assumenda deserunt commodi quaerat.
        Voluptatibus ut modi minima soluta, temporibus quaerat eligendi hic quibusdam nostrum
        exercitationem repudiandae dolor? Nostrum eaque obcaecati illum officiis eligendi maiores,
        et, nemo, in iste repellat recusandae ab dolores iure quo temporibus quidem error corporis
        illo. Veniam repudiandae alias veritatis nulla obcaecati mollitia, nesciunt debitis quisquam
        optio, voluptate dolor enim quis quidem aspernatur aut quaerat, quod beatae consectetur id
        cum labore earum? Quasi dolorem in eveniet numquam architecto quas nam suscipit animi nihil,
        sunt deleniti aliquid fugit eius ipsum similique ipsa! Aspernatur animi praesentium fugit
        blanditiis perferendis. Consequatur cumque doloremque odit nulla dolore dolores error
        expedita fugit eius provident veniam sed iste sit rem quasi ratione deleniti natus, nihil
        pariatur. Ea mollitia perferendis, neque quidem, aspernatur asperiores ratione consequuntur
        eum nihil odio officia blanditiis expedita pariatur reiciendis soluta? Reiciendis suscipit
        placeat earum ducimus nam sunt ut quaerat pariatur facere corporis? Cumque tenetur
        reprehenderit porro ullam a vitae possimus perferendis aperiam! Repellendus eaque explicabo
        consectetur? Quae cum cupiditate nobis ullam provident hic quisquam quis, placeat aut
        blanditiis libero, enim sit animi. Quae fuga saepe optio pariatur eius dolore?
      </div>
      <Notification state={ns} />
    </div>
  );
};

export default Test;

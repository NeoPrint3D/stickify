import { useState, useEffect } from "react";
import { db, auth, firebase } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 rounded-2xl p-1 text-white"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <div className="flex justify-center">
        <button
          className="bg-blue-500 rounded-2xl p-1 text-sm mb-5 text-white"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  );
}
function Dashboard() {
  const [user] = useAuthState(auth);
  let uid = "";
  if (user) {
    uid = user.uid === import.meta.env.VITE_GOOGLE_AUTH;
  } else {
    uid = false;
  }
  return (
    <div className="flex justify-center my-5">
      <div className="background h-cool">
        <h5 className="head">Admin</h5>
        <SignOut />

        {uid ? <DashboardJR /> : <SignIn />}
      </div>
    </div>
  );
}

function DashboardJR() {
  const [orders, setOrders] = useState([]);
  const deleteItem = (id) => {
    db.collection("orders").doc(id).delete();
  };
  useEffect(() => {
    db.collection("orders").onSnapshot((snapshot) => {
      const listItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(listItems);
    });
  }, []);
  return (
    <>
      <div
        className="grid grid-cols-12 text-center"
        style={{ fontSize: "10px" }}
        key={(orders.createdAt, "desc")}
      >
        <p className="col-span-2 border-2 dark:border-white border-black">
          Order Name
        </p>
        <p className="col-span-1 border-2 dark:border-white border-black">
          QTY
        </p>
        <p className="col-span-3 border-2 dark:border-white border-black">
          Email
        </p>
        <p className="col-span-2 border-2 dark:border-white border-black">
          Adress
        </p>
        <p className="col-span-2 border-2 dark:border-white border-black">
          Click for Image
        </p>
        <p className="col-span-2 border-2 dark:border-white border-black">
          Fulfill
        </p>
      </div>
      {orders &&
        orders.map((order) => {
          return (
            <div
              className="grid grid-cols-12 text-center"
              style={{ fontSize: "10px" }}
              key={order.createdAt}
            >
              <p className="col-span-2 border-2 dark:border-white border-black">
                {order.orderName}
              </p>
              <p className="col-span-1 border-2 dark:border-white border-black">
                {order.quanity}
              </p>
              <p className="col-span-3 border-2 dark:border-white border-black">
                {order.email}
              </p>
              <p className="col-span-2 border-2 dark:border-white border-black">
                {order.adress}
              </p>

              <a
                className="col-span-2 border-2 dark:border-white border-black"
                href={`${order.downloadURL}`}
                download={"image"}
              >
                Download
              </a>
              <button
                className="col-span-2 border-2 dark:border-white border-black"
                onClick={() => deleteItem(order.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}

export default Dashboard;

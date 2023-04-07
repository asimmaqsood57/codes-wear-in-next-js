import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
        <div className="logo mx-5">
          <Link href="/">
            <Image width={200} height={50} src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="nav">
          <ul className="flex space-x-2 font-bold">
            <Link href="/tshirts">
              <li>T-Shirts</li>
            </Link>
            <Link href="/hoodies">
              <li>Hoodies</li>
            </Link>
            <Link href="/mugs">
              <li>Mugs</li>
            </Link>
            <Link href="/">
              <li>Stickers</li>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-2">
          <AiOutlineShoppingCart className="text-3xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

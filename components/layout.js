import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)
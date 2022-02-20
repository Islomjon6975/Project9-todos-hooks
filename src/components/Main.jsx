import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MainContainer } from "./styled";
import Table from "./Table";

const Main = () => {

    return(
        <MainContainer>
            <Navbar />
            <Table />
            <Footer />
        </MainContainer>
    )
}

export default Main
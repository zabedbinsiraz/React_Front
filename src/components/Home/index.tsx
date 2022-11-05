import React from "react";
import Accompany from "./Accompany";
import Discover from "./Discover";
import Hero from "./Hero";
import Properties from "./Properties";
import Search from "./Search";

const Home = () => {
    return (
        <>
            <Hero />
            <Search />
            <Properties />
            <Accompany />
            <Discover />
        </>
    )
}
export default Home;
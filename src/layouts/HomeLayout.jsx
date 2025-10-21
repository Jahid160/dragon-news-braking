import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {

const {state} = useNavigation()


const [allNews, setAllNews] = useState([]);
// console.log(allNews);
  useEffect(() => {
    // fetch once when the layout mounts
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews newsList={allNews}></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
         {state == 'loading' ? <Loading></Loading>: <Outlet></Outlet>} 
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

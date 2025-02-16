import React from "react";
import Header from "../components/Header/Header";
import BookList from "../components/BookList/BookList";
import Footer from "../components/Footer/Footer";
import booksData from "../assets/data/books.json";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <BookCard
        image="spektr"
        title="Спектр"
        author="Сергей Лукьяненко"
        description="«Расскажи историю, странник…» Такова странная цена, которую надлежит заплатить таинственному ключнику за пропуск через Врата – межпланетные порталы, через которые проходят туристы и искатели приключений, сбежавшие из дома подростки и усталые отцы семейств, скрывающиеся от закона преступники и нанятые для возвращения беглецов охотники. Сколько Врат предстоит пройти лучшему из земных охотников, пытающемуся найти бесследно исчезнувшую девчонку? Из мира – в мир! От планеты – к планете. От истории – к истории!"
      /> */}
      <BookList books={booksData} />
      <Footer />
    </div>
  );
};

export default HomePage;

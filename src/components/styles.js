// const mainColor = "#F0E6EF";
// const accentColor = "#8F3F7B";
// const secondaryColor = "#D0B1D7";
// const mainTextColor = "#333";
// const whiteColor = "#fff";

const mainColor = "#F8F5FA";
const accentColor = "#82628A";
const secondaryColor = "#A984AA";
const mainTextColor = "#2D2D2D";
const secondaryTextColor = "#82628A";
const whiteColor = "#fff";

const styles = {
  body: {
    fontFamily: "Open Sans",
    backgroundColor: mainColor,
    color: mainTextColor,
    boxSizing: "border-box",
  },
  header: {
    boxSizing: "border-box",
    marginInline: "auto",
    display: "flex",
    paddingInline: "100px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: secondaryColor,
    width: "1600px",
    borderRadius: "0 0 30px 30px",
    boxShadow: "0 1px 0 rgba(0, 0, 0, .08)",
    color: whiteColor,
    textShadow: "1px 1px 2px rgb(155, 84, 184)",
    marginBottom: "30px",
    a: {
      fontFamily: "Segoe Print, cursive",
      // fontSize: "40px",
      color: whiteColor,
      textDecoration: "none",
      transition: "color 0.3s ease-in-out",
      padding: "8px",
    },
    h1: {
      fontSize: "36px",
    },
  },
  bookCard: {
    width: "300px",
    height: "380px",
    borderRadius: "8px",
    padding: "10px 15px",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(180deg,rgb(255, 255, 255) 90%, rgba(255, 255, 255, 0) 100%)",
    // boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.15)",
    boxShadow: "4px 6px 10px rgba(104, 79, 110, 0.1)",
    color: secondaryTextColor,
    textShadow: "1px 1px 2px rgba(130, 98, 138, 0.1)",
    fontSize: "20px",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease-in-out",
    // border: "1px, solid, " + accentColor,
    image: {
      height: "300px",
      borderRadius: "3px",
      margin: "0px auto 10px",
      border: "1px, solid, " + secondaryColor,
    },
    cardText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      marginBlock: "5px",
    },
    price: {
      marginBlock: "5px",
      fontSize: "22px",
    },
    textDescription: {
      width: "100%",
      display: "-webkit-box", // Нужно для сокращения многострочного текста
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 8, // Количество строк
      overflow: "hidden",
    },
    biggerText: {
      fontSize: "24px",
    },
  },
  bookList: {
    marginInline: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(300px, 1fr))",
    width: "1600px",
    justifyContent: "space-between",
    gridAutoRows: "min-content", // Создает ряды высотой с контент
    rowGap: "30px",
    justifyItems: "center", // Предотвращает растяжение дочерних элементов
  },
  footer: {
    boxSizing: "border-box",
    width: "1600px",
    height: "90px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 100px",
    backgroundColor: secondaryColor,
    borderRadius: "30px 30px 0 0",
    marginTop: "30px",
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginInline: "auto",
    h: {
      // opacity: 0.7,
      color: whiteColor,
      textDecoration: "none",
      transition: "color 0.3s ease-in-out",
      padding: "8px",
    },
  },
};
export default styles;

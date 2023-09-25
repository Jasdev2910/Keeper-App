import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

const App = () => {

  const {}

  console.log();
  return (
    <div>
      <Header />
      <CreateArea />

      <Note key={1} title="note title" content="note content" />

      <Footer />
    </div>
  );
};

export default App;

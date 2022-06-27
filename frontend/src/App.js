import AuthorsBookContainer from "./components/AuthorsBookContainer";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import ArticleResourseContainer from "./components/ArticleResourseContainer";
import LernContainer from "./components/LernContainer/LernContainer";
import TrustedConteiner from "./components/TrusredConteiner";
import Nav from "./components/Nav";
import Titul from "./components/Titul";
import Bio from "./components/Bio";
import Copy_block from "./components/Copy_block/Copy_block";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <Provider store={store}>

          <Nav />

          <Titul />

          <AuthorsBookContainer />

          <Bio />

          <TrustedConteiner />

          <Copy_block />

          <LernContainer />

          <ArticleResourseContainer />

          <Contact />

    </Provider>
  );
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom'
import utf8 from 'utf8'
import Content from 'resource/components/content'
import 'resource/styles/main.css'

function initApp() {
  let container = document.getElementById('content');
  let list = utf8.decode(window.__list__);
  list = JSON.parse(list);
  // reuse server side render result
  ReactDOM.render(
    <Content list={list}/>,
    container
  );

}

initApp();

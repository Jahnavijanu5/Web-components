import fetchData from "./app-internals/fetchData";
import form from "./app-internals/form";

// web components' import
import "./components/hello-world";
import "./components/demo-component";
import "./components/model-chooser";
import "./components/model-viewer";
import "./lit-components/lit-hello-world";
import "./components/to-do-list";

const appElement = document.getElementById("app");

appElement.innerHTML = `
  <hello-world></hello-world>
  <lit-hello-world name="Jahnavi"></lit-hello-world>
  
  <demo-component 
    title="bucket-list"
    image-src="https://tse1.mm.bing.net/th?id=OIP.OqLdIsiaegYhJC_lrmiVugHaJ4&pid=Api&P=0&h=180"
    >
    <p class="notes" slot="notes">A list of must-do activities for a fulfilling life journey</p>
</demo-component>
<to-do-list></to-do-list>

  ${form}
  
  <div class="columns">
    <nav class="column">
      <model-chooser limit="4"></model-chooser>
    </nav>
    <section class="column">
      <model-viewer show-details></model-viewer>
    </section>
  </div>
`;

const chooser = appElement.querySelector("model-chooser");
const viewer = appElement.querySelector("model-viewer");
const showDetailsInput = appElement.querySelector("[name=show-details]");
const urlInput = appElement.querySelector("[name=url]");
const limitInput = appElement.querySelector("[name=limit]");

const loadList = () =>
  fetchData(urlInput.value).then((data) => (chooser.items = data));

appElement.addEventListener("model-change", (event) => {
  if (!viewer) return;
  viewer.data = chooser.items[event.detail];
});

showDetailsInput.addEventListener("change", (event) => {
  const enabled = !!showDetailsInput.value;
  if (enabled) {
    viewer.setAttribute("show-details", "");
  } else {
    viewer.removeAttribute("show-details");
  }
});
urlInput.addEventListener("change", (event) => {
  loadList();
});
loadList();

limitInput.addEventListener("change", (event) => {
  // chooser.setAttribute('limit', event.currentTarget.value)
  chooser.limit = event.currentTarget.value;
});

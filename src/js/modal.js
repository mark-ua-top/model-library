import * as basicLightbox from "basiclightbox";
const openButton = document.querySelector("#register");
const closeButton = document.querySelector("#submitCloseButton");

const modalRegistretion = basicLightbox.create(`
    <div>
      <h1>Register form</h1>
      <form action="">
        <input type="text" placeholder="Your name..." />
        <input type="text" placeholder="Your lastname..." />
        <input type="text" placeholder="Your age..." />
        <input type="text" placeholder="Your work..." />
        <button type="submit id="submitCloseButton" ><p>submit</p></button>
      </form>
    </div>
`);

openButton.addEventListener("click", (event) => {
  modalRegistretion.show();
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault()
  modalRegistretion.close();
});

function display(id) {
  for (let i = 0; i < images.length; i++) {
    if ("img" + i == id) {
      show(id);
    } else {
      hide("img"+i);
    }
  }
}

function hide(id) {
  const image = document.getElementById(id);
  image.className = "closed";
}

function show(id) {
  const image = document.getElementById(id);
  image.className = "open";
}

const imageFolder = "images";
const images = [ "image1.jpg", "image2.jpg", "image3.jpg" ];

const equipe = [ "Augusto Biehl", "Gabriele Bauer", "Mateus Botega", "Thales Barbosa", "Ulisses Bardini" ].sort();

const content = document.getElementById("content");
const footer = document.getElementById("footer");

images.forEach((image, index) => {
  const img = document.createElement('img');
  img.src = imageFolder + "/" + image;
  img.id = "img" + index;
  content.appendChild(img);
});

const h3 = document.createElement("h3");
h3.innerHTML = "Equipe: ";
h3.innerHTML += equipe.join(" | ");
footer.appendChild(h3);

display("img0");
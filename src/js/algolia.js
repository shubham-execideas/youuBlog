const algoliasearch = require("algoliasearch");

const client = algoliasearch("MOJFSHYLU6", "39cf10b4f7ccd398f2a06e4f65344b34");
const index = client.initIndex("Youu_Website");




async function addBlogPost(objectID, title, description) {
  const record = {
    objectID: objectID,
    title: title,
    description: description,
  };

  await index.addObject(record);
}

async function updateBlogPost(objectID, title, description) {
  const record = {
    objectID: objectID,
    title: title,
    description: description,
  };

  await index.saveObject(record);
}

async function deleteBlogPost(objectID) {
  await index.deleteObject(objectID);
}







const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value;

  if (query.length < 3) {
    searchResults.innerHTML = "";
    return;
  }

  index
    .search(query)
    .then(({ hits }) => {
      const html = hits
        .map(
          (hit) => `
        <article>
          <h2>${hit.title}</h2>
          <p>${hit.description}</p>
        </article>
      `
        )
        .join("");

      searchResults.innerHTML = html;
    })
    .catch(console.error);
});

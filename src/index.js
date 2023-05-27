fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/301", {
  method: "GET",
  headers: {
    "X-API-KEY": "42f8d0ee-ab8e-4a14-a100-1190987cba05",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((json) => {
    const img = document.createElement("img");
    img.src = json.posterUrl;
    document.body.append(img);
  })
  .catch((err) => console.log(err));

export default function handle(req, res) {
  res.json({
    menus: [
      {
        name: "hamburger",
        price: 6000,
        image:
          "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
      },
      {
        name: "pizza",
        price: 8000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/250px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
      },
      {
        name: "salad",
        price: 7000,
        image:
          "https://www.medicalnewstoday.com/content//images/articles/324/324956/close-up-of-a-plate-of-food.jpg"
      }
    ]
  });
}

// numbers            0  1  2
// numberArrays[90]
const numberArrays = [1, 2, 3, 4,58 ,35, 9, 57];
// strings
const tags = ['engenire', 'developer'];
// objects
// news[0].title
// news[3].title == error
const news = [{
  title: 'title 1',
  description: 'mvkdjkldfk kl fjdskl jfl',
  rate: 20,
}, {
  title: 'title 2',
  description: 'mvkdjkldfk kl fjdskl jfl',
  rate: 20,
  url: 'https://www.google.com/search?q=cat+image&sxsrf=ACYBGNS69ovx0Xw7glldAgf334-x20Bn-g:1579347911458&tbm=isch&source=iu&ictx=1&fir=jTIW6IefDrIT9M%253A%252ChVpvvL-HxQGRYM%252C_&vet=1&usg=AI4_-kQOBtOKg3UmorMATeTtfJqWhi5uYg&sa=X&ved=2ahUKEwiUzfS5iY3nAhWPw4sKHUqDBSAQ9QEwAXoECAkQBg#'
}];

// any
const anyArray = [2,'tite', null,  function () {

}, undefined];

module.exports = { anyArray, news, numberArrays, tags };
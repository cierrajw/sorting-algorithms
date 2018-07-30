var title = $('.movie-title');
var year = $('.movie-year');
var siteName = "My site";

title.on('input', setLocalStorage);


// function storeValues(){

//   setLocalStorage();
//   getLocalStorage();
// }

function setLocalStorage(event){

  var setTitle = localStorage.setItem('userMovie', JSON.stringify(title.val()));
  var setYear = localStorage.setItem('userYear', JSON.stringify(year.val()));

  localStorage.setItem('thesite', siteName);

}

// function getLocalStorage(setTitle){

//   var getTitle = localStorage.getItem(, JSON.stringify(setTitle));

// }


// function Idea(title, body){

//   this.title = title;
//   this.body = body;
//   this.id = Time.now(); //comes through as an integer, unix timestamp
//   this.quality = 0;
// }
// function populateIdeaAndSave(ideaTitle, ideaBody){
//   var idea = new Idea(ideaTitle, ideaBody);

// {idea.id} 
// {idea.title}
// {idea.body}

// localStorage.setItem(idea.id, JSON.stringfy(idea));

// }
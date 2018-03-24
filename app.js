var config = {
  apiKey: "ABC",
  authDomain: "ABC",
  databaseURL: "ABC",
  projectId: "ABC",
  storageBucket: "ABC",
  messagingSenderId: "ABC"
};
firebase.initializeApp(config);
var db = firebase.firestore();

  var db = firebase.firestore();

  var objects =[] ;

// const data=document.querySelector("#data");

  db.collection("testing")
    .get()
    .then(function(querySnapshot) {
      var count=0;
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            objects.push(new users(doc.data().first,doc.data().last,doc.data().born));

            document.getElementById("data").innerHTML+="<br>"
            +doc.data().first+""+doc.data().last+"-"+doc.data().born
            +"<button id='"+count+"'"
            +"onClick='showDetails("+count+")'>"
            +"DETAILS"
            +"</button>"
            +"<button id='"+count+"'"
            +"onClick='updateDetails("+count+")'>"
            +"Update"
            +"</button>";
            count=count+1;
          }
        );

          console.log("objects "+objects.toString());

         //  var app = angular.module("myList", []);
         //  app.controller("myCtrl", function($scope) {
         //   $scope.data = objects;
         // });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });


    function showDetails(h){
      console.log("On Click "+h);
      var index = h.toString();
      var abc = document.getElementById(index);
      var person = objects[h];
      document.getElementById("details").innerHTML="-"+person.first+"<br>"+person.last;

    }

    function updateDetails(h){

    }

const firstName=document.querySelector("#firstName");
var lastName=document.querySelector("#lastName");
var born=document.querySelector("#born");
var saveButton=document.querySelector("#loadButton");


saveButton.addEventListener("click",function(){
  var name1=firstName.value;
  var last1=lastName.value;
  var dob1=born.value;


  const docRef = db.collection("testing").add({
    first:name1,
    last:last1,
    born:new Date(dob1)
  })
  .then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

});

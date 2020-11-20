
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC2xHRAm7d8eCU-Emm81lpKmpLjkG9As9g",
    authDomain: "smartfield-iot.firebaseapp.com",
    databaseURL: "https://smartfield-iot.firebaseio.com",
    projectId: "smartfield-iot",
    storageBucket: "smartfield-iot.appspot.com",
    messagingSenderId: "946698171545",
    appId: "1:946698171545:web:49c79169e27f3c615b3408",
    measurementId: "G-6ZD5J7X6QC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function readInformasi(){
  //Mengambil data firebase
    var informasi = firebase.database().ref("User1/");
  var table = document.getElementById("tabel-status-alat").getElementsByTagName('tbody')[0];;
    informasi.on("child_added", function (data) {
        var informasiValue = data.val();
        var kelembaban_tanah = informasiValue.kelembaban_tanah;
        var suhu_udara = informasiValue.suhu_udara;

}
console.log(readInformasi());

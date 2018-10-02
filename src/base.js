import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCM_ee8O4pWM9h9xDmCYsczRU3pcQmdglY",
    authDomain: "catch-of-the-day-jesper-fredri.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jesper-fredri.firebaseio.com",
  });
console.log(firebaseApp);
    const base = Rebase.createClass(firebaseApp.database());

    export { firebaseApp };

    export default base;
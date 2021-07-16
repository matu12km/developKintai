import firebase from "firebase";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_AP_ID,
};

console.log(config); // 参照出来ているかの確認用

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
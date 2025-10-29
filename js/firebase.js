import { initializeApp } from "https://www.gstatic.com/firebasejs/x.y.z/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/x.y.z/firebase-database.js";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.firebasestorage.app",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

let saveVotes = (productId) =>{
    const votesRef= ref(database, 'votes');
    const database= push(votesRef);

    return set(newVoteRef, {
        productId: productId,
        timestamp: Date.now()
    })
    .then(() =>{
        return {
            status: true,
            message: "Vote saved successfully"
        }
    })
    .catch((error) =>{
        console.error("Error saving vote: ", error);
        return {
            status: false,
            message: "Error saving vote"
        }
    });
}

export {saveVotes}
import {app} from './services/firebase.js'
import firebase from 'firebase/app'
import {useState, useEffect} from 'react'

import Button from './components/Button'
import Channel from './components/Channel'

const auth = app.auth();
const firestore = app.firestore();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(tmpUser => {
      if(tmpUser){
        setUser(tmpUser);
      } else {
        setUser(null);
      }
      if(initializing){
        setInitializing(false);
      }
    });

    return unSubscribe;
  }, [initializing])


  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    try{
      await auth.signInWithPopup(provider);
    }catch (error){
      console.log(error);
    }
  }

  const signOut = async () => {
    try{
      await auth.signOut();
    }catch(error){
      console.log(error.message)
    }
  };

  if(initializing) return 'Loading....';

  return (
    <div>
    {user ? (
      <>
      <Button onClick={signOut}>Sign Out</Button>
      <Channel user={user} db={firestore}></Channel>
      </>
    ) : (
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
      )}
    </div>
  );
}

export default App;

import auth from '@react-native-firebase/auth';
import database, { firebase } from '@react-native-firebase/database';
import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';


const patientRef = database().ref('Patients');
const doctorRef = database().ref('Doctors');
const userId = auth().currentUser.uid;

export function authenticate () {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    const getuser = () => {
        return user;
    }
    // Handle user state changes
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        
        return subscriber; // unsubscribe on unmount
    }, []);
    if (initializing) return null;
    return user;
}

export const signUpByEmailPass = (email, pass, navigation) => {
    console.log("entered auth", email, pass)
    auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
        console.log('User account created')
        navigation.navigate('Manage')
        addPatientToCollection(email, "Human", "gay");
        addPatientToFirestore(email, )
    })
    .catch(error => {
        console.error(error);
    });
}

export const signInWithEmailPass = (email, password) => {
    try {
      auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };


  //PATIENT
 export const addPatientToCollection = (email, name, gender) => {
    patientRef.push({
        email: email,
        firstName: "atbiahs",
        gender: "male"
    }).then (res =>{
        //console.log(res);
    })
}

export const addPatientToFirestore = (email, name, gender,) =>{
  firestore().collection("Patients").doc(auth().currentUser.uid).set({
    firstName: "tabish",
    email: email,
    gender: "male",
    image: 'https://reactjs.org/logo-og.png'
  })
}

export const getPatientFromFirestore = () => {
  const [name, setN] = useState('')
  const [email, setE] = useState('')
  const [gender, setG] = useState('')
  const [image, setImage] = useState('')
  useEffect(() => {
    const subscriber = firestore()
    .collection('Patients')
    .doc(auth().currentUser.uid)
    .onSnapshot(documentSnap => {
      console.log("ENTERED PATIENT GET")
      setN( documentSnap.data().firstName )
      setE(documentSnap.data().email)
      setG( documentSnap.data().gender)
      setImage(documentSnap.data().image)
    });
    return () => {subscriber()}
  }, []);
  patient = [name, email, gender, image]
  return patient;
}

export const getCurrentPatient = () => {
    const [name, setN] = useState('')
    const [email, setE] = useState('')
    const [gender, setG] = useState('')
    let mail = auth().currentUser.email;
    useEffect(()=>{
       patient = patientRef.on('value', snapshot => {
            let fetchedRecords = snapshot.val()
            if(fetchedRecords != null) {
                Object.keys(fetchedRecords).map(key => {
                    if(fetchedRecords[key].email.toLowerCase() == mail.toLowerCase()){
                        let name = (fetchedRecords[key].firstName)
                        let email = (fetchedRecords[key].email)
                        let gender = (fetchedRecords[key].gender)
                        setN(name)
                        setE(email)
                        setG(gender)
                    }
                });
            }
            });
        return ()=>{patient};
    },[]);
    const user = [name, email, gender]
    return user;
    
}

export const getAllPatients = () => {
  const [patients, setPatients] = useState([]);
  var data = firestore().collection('Patients').get();
  var snapshot = data.val();

  snapshot.forEach(element => {
    setPatients(patient => [...patient, element.data()])
  });
  return patients;
}

//APPOINTMENT
export const getAllPatientAppointments = async () => {
  //const [appoints, setAppoints] = useState([]);
  // useEffect(()=>{
  //   const data = firestore().collection('Patients').doc(auth().currentUser.uid)
  //   .collection('appointments').get().then((snapshot)=>{
  //     console.log("ENTERED SNAPSHOT")
  //     console.log(snapshot.data())
  //     snapshot.forEach(appointment => {
  //       setAppoints(appointments => [...appointments, appointment.data()])
  //     });
  //   })
  //   return () => data
  // }, [])
  const appoints = await firestore().collection('Patients').doc(auth().currentUser.uid).collection('appointments').get();
  return appoints;
}

export const deleteAppointment = (id) => {
  firestore().collection('Patients').doc(userId)
  .collection('appointments').doc(id)
  .delete().then(()=>
    console.log("Appointment deleted")
  ).catch(()=>{
    console.log("ERROR DELETING APPOINTMENT")
  })
}

export const updateAppointment = () => {

}

export const addAppointment = () => {
  firestore().collection("appointments").doc().set({

  })
}

export const editAppointment = () => {

}

//DOCTOR
export const getDoctorFromFirestore = () => {

}
export const addDoctor = (name, email, wage, occupation, location) => {

}

export const approveAppointment = () => {

}



// export const getUser = () => {
//     const userID = auth().currentUser.getIdToken;
//     console.log(userID)
//     var name = '';
//     var mail = '';
//     var gender = '';
//     database().ref("Patients/" + userID).once(
//         'value').then((snapshots) => {
//             name = snapshots.val().firstName;
//             mail = snapshots.val().email;
//             gender = snapshots.val().gender;
//         }).catch(()=>{
//             console.log("USER NOT FOUND")
//         })
    
    
//     currentUser = {name: name, email: mail, gender: gender}
//     return currentUser;
// }







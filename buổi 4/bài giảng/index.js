getManyDocument()
async function getOnceDocument() {
    const docId='cnudy'
    
    //promise
    //const res=firebase.firestore().collection('users').doc(docId).get()
    //.then((res) =>{
    //    console.log(res.data());
   // })
    //async await
    const res= await firebase.firestore().collection('users').doc(docId).get()
    const user=getDattaFromDoc(res)
    console.log(user)
  // READ 

} 
async function getManyDocument(){
      const res= await firebase.firestore().collection('users').get()
      .where('age','==',18).get()
      .where('email','array-contains','mail')
      console.log(res.docs[0].data())
  }
function getDattaFromDoc(doc){
    const data=doc.data()
    data.id=doc.id
    return data
}
function getDataFromDocs(docs){
    const arr=[];
    for(const item of docs){
        arr.push(getDattaFromDoc(item))
    }
    return arr
   // return docs.map(getDattaFromDoc)
}
addDocument()
function addDocument(){
    const dataToAdd={
        name:'ABC',
        address:'HN'
    }
    firebase.firestore().collection('users').add(dataToAdd)
}
//update document
function upDateDocument(){
    const idUpdate=''
    const dataToUpData={
        address:'TPHCM'
    }
    firebase.firestore().collection('users')
    .doc(idUpdate).update(dataToUpData)
}
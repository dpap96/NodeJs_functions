"use strict";

// Χρησιμοποιω το fs-fileSystem για τον χειρισμο και την δημιουργ΄ία φακέλων ή αρχε΄ίων:

// ΒΗΜΑ 1) Τσιμπαω το πακετο fs απο το περιβαλλον node.js
const fs= require("fs")

// ΔΙΝΩ ΟΝΟΜΑ ΣΤΟ ΑΡΧΕΙΟ: 

const file1="file.docx" //ετσι θα λεγεται το αρχειο που θα φτιαξω!
const file2="file2.docx"
const file3="file3.docx"

// Δημιουργώ το αρχειο + Γραφω δεδομενα σε αυτο:
try{ 
    fs.writeFileSync(file1,"Hello this is my first document !") //ΜΕΘΟΔΟΣ ΠΟΥ ΔΗΜΙΟΥΡΓΕΙ ΤΟ ΑΡΧΕΙΟ + ΕΙΣΑΓΕΙ DATA
}catch(err){
    console.error("Σφαλμα κατα την δημιουργια και εγγραφη στο αρχειο",err) //ΧΕΙΡΙΖΟΜΑΙ ΤΗΝ ΠΕΡΙΠΤΩΣΗ ΣΦΑΛΜΑΤΟΣ 
}

try{
    fs.writeFileSync(file2,"") //ΜΕΘΟΔΟΣ ΠΟΥ ΔΗΜΙΟΥΡΓΕΙ ΤΟ ΑΡΧΕΙΟ + ΕΙΣΑΓΕΙ DATA
}catch(err){  
    console.error("Σφαλμα κατα την δημιουργια και εγγραφη στο αρχειο",err)
}

try {
    fs.writeFileSync(file3,"This data will be changed")
} catch (err) {
    console.error("Σφαλμα κατα την δημιουργια και εγγραφη στο αρχειο",err)
    
}
//ΕΛΕΓΧΟΣ ΥΠΑΡΞΗΣ ΑΡΧΕΙΟΥ Ή ΟΧΙ:
console.log( fs.existsSync(file1)) //true




//ΑΝΑΓΝΩΣΗ ΤΩΝ ΔΕΔΟΜΕΝΩΝ ΤΟΥ ΑΡΧΕΙΟΥ: readFileSync επιστρεφει τα δεδομενα του αρχειου
try{
    const content = fs.readFileSync(file1, 'UTF-8'); //MEΘΟΔΟΣ ΠΟΥ ΕΠΙΣΤΡΕΦΕΙ ΤΑ DATA ΤΟΥ ΑΡΧΕΙΟΥ
    console.log(`Τα δεδομενα του αρχειου : ${file1} ειναι τα εξης: ${content}`)
}catch(err){
    console.error("Σφαλμα κατα την αναγνωση των δεδομενων του αρχειου ")
}

//ΔΙΑΓΡΑΦΗ ΑΡΧΕΙΟΥ:
try{
    fs.unlinkSync(file2) //ΜΕΘΟΔΟΣ ΔΙΑΓΡΑΦΗΣ ΤΟΥ ΑΡΧΕΙΟΥ 
    console.log(`Το αρχειο ${file2} διεγραφη με επιτυχια!`)
}catch(err){
    console.error("Σφαλμα κατα την διαγραφη του αρχειου ",error)
}

//ΓΡΑΨΙΜΟ ΕΠΙΠΛΕΟΝ ΔΕΔΟΜΕΝΩΝ ΣΤΟ ΑΡΧΕΙΟ:
const new_data="\n this is additional content!"

try {
    fs.appendFileSync(file1,new_data); //ΜΕΘΟΔΟΣ ΠΟΥ ΠΡΟΣΘΕΤΕΙ ΠΕΡΙΕΧΟΜΕΝΟ ΣΤΟ ΑΡΧΕΙΟ:
    console.log("Προστεθηκαν επιπλεον περιεχομενα στο αρχειο",file1)
} catch (err) {
    console.error(`Σφάλμα κατά την προσθήκη επιπλέον περιεχόμενου στο αρχείο ${newName}`, err);
}

//ΕΠΕΞΕΡΓΑΣΙΑ ΤΟΥ ΠΕΡΙΕΧΟΜΕΝΟΥ ΤΟΥ ΑΡΧΕΙΟΥ:
/* Για να επεξεργαστεις τα περιεχομενα του αρχειου , πρεπει πρωτα να τα διαβασεις , να τα επεξεργαστεις , και
    στη συνεχεια να τα γραψεις πισω στο αρχειο:
*/
try {
    //διαβαζω τα δεδομενα του αρχειου που θα επεξεργαστω:
    const data= fs.readFileSync(file3,"utf-8")
    console.log(data) //τα γραμμενα περιεχομενα του αρχειου
    const editedData= data.replace('will be','has been') //κανω αντικατασταση μερος των δεδομενων 
    fs.writeFileSync(file3,editedData) //γραφω τα νεα επεξεργασμενα δεδομενα στο αρχειο 
    console.log(`Το αρχειο file3 πλεον περιεχει: `, fs.readFileSync( file3,"utf8"))
    
} catch (err) {
    console.error(`Σφάλμα κατά την επεξεργασία του περιεχομένου του αρχείου ${file3}`, err);
}

//METAKINHΣΗ ΑΡΧΕΙΟΥ ΣΕ ΑΛΛΟ ΦΑΚΕΛΟ:
const path =require("path");
const currentPath= path.resolve(__dirname,file1) //δημιουργω το πληρες ΣΩΣΤΟ μονοπατι του αρχειου μου
console.log(currentPath)

const newpath="c:/Users/Ραφαελα/Desktop/"+ file1
try {
    fs.renameSync(currentPath,newpath)
    console.log(`Το αρχείο μετακινήθηκε με επιτυχία από ${path} σε ${newpath}.`);
} catch (error) {
    console.error('Σφάλμα κατά τη μετακίνηση του αρχείου: ', err);
    
}
//ΣΤΟΙΧΕΙΑ ΓΙΑ ΤΟ ΑΡΧΕΙΟ:
fs.stat(file3, (err, stats) => {
    if (err) {
      console.error('Σφάλμα κατά την ανάκτηση στατιστικών: ', err);
    } else {
      console.log('Πληροφορίες στατιστικών του αρχείου: ', stats);
    }
  });
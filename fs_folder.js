"use strict";
const path=require("path");
const fs= require("fs");


//ΔΙΝΩ ΟΝΟΜΑ ΣΤΟΝ ΦΑΚΕΛΟ ΠΟΥ ΘΑ ΔΗΜΙΟΥΡΓΗΣΩ:
const folder1= "Folder1";



//ΔΗΜΙΟΥΡΓΙΑ ΦΑΚΕΛΟΥ ΚΑΙ ΕΙΣΑΓΩΓΗ  ΜΕΣΑ ΤΟΥ ΕΝΑ ΑΡΧΕΙΟ
const file="file.txt"
const folderpath=path.resolve(__dirname,folder1) //ΤΟ ΠΛΗΡΕΣ ΜΟΝΟΠΑΤΙ ΤΟΥ ΦΑΚΕΛΟΥ ΜΟΥ
console.log("To path tou folder1 einai: ",folderpath)
const filepath=path.resolve(folderpath,file) //ΒΑΖΩ ΤΟ ΑΡΧΕΙΟ ΜΕΣΑ ΣΤΟΝ ΦΑΚΕΛΟ
console.log("To path tou file einai: ", filepath)

// Δημιουργία του φακέλου (αν δεν υπάρχει ήδη)
if (!fs.existsSync(folderpath)) {
    fs.mkdirSync(folderpath); //δημιουργω τον φακελο
    console.log('Ο φάκελος "folder1" δημιουργήθηκε.');
    fs.writeFileSync(filepath, 'Περιεχόμενα του αρχείου.');//ΔΗΜΙΟΥΡΓΩ ΤΟ ΑΡΧΕΙΟ
  
    console.log('Το αρχείο δημιουργήθηκε με επιτυχία.');
  } else {
    console.log('Ο φάκελος "folder1" υπάρχει ήδη.');
  }
  

//ΕΜΦΑΝΙΣΗ ΤΩΝ ΑΡΧΕΙΩΝ ΠΟΥ ΕΧΕΙ ΜΕΣΑ ΤΟΥ Ο ΦΑΚΕΛΟΣ:
try {
    const filesSync = fs.readdirSync(folderpath);
    console.log('Οι αρχείοι και φάκελοι που βρίσκονται στον φάκελο είναι (συγχρονισμένη μέθοδος): ', filesSync);
  } catch (err) {
    console.error('Σφάλμα κατά την ανάγνωση των αρχείων και φακέλων (συγχρονισμένη μέθοδος): ', err);
  }

//ΜΕΤΑΟΝΟΜΑΣΙΑ ΦΑΚΕΛΟΥ:
const newPath= path.resolve(__dirname,"renamed_folder")
try {
    fs.renameSync(folderpath, newPath);
    console.log('Ο φάκελος μετονομάστηκε με επιτυχία (συγχρονισμένη μέθοδος).');
  } catch (err) {
    console.error('Σφάλμα κατά την μετονομασία φακέλου (συγχρονισμένη μέθοδος): ', err);
  }

//ΜΕ ΤΟ renameSync μπορω να αλλαξω και το path του folder

//ΓΙΑ ΝΑ ΔΙΑΓΡΑΨΩ ΕΝΑ ΦΑΚΕΛΟ , ΠΡΕΠΕΙ ΠΡΩΤΑ ΝΑ ΔΙΑΓΡΑΨΩ ΟΛΑ ΤΑ ΠΕΡΙΕΧΟΜΕΝΑ ΤΟΥ
async function deleteFolderRecursively(folderPath) {
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath);
  
      for (const file of files) {
        const currentPath = `${folderPath}/${file}`;
  
        if (fs.lstatSync(currentPath).isDirectory()) {
          await deleteFolderRecursively(currentPath);
        } else {
          fs.unlinkSync(currentPath);
        }
      }
  
      fs.rmdirSync(folderPath);
      console.log(`Ο φάκελος ${folderPath} διαγράφτηκε με επιτυχία!`);
    } else {
      console.log(`Ο φάκελος ${folderPath} δεν υπάρχει.`);
    }
  }

deleteFolderRecursively(folderpath);

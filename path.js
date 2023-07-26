
"use strict";

const fs = require("fs");
const path = require("path");

const folder2 = "Folder2";
const teachersFolder = "teachers_folder";
const file3 = "file3.txt";

const folder2Path = path.resolve(__dirname, folder2);
const teachersFolderPath = path.resolve(folder2Path, teachersFolder);
const file3Path = path.resolve(teachersFolderPath, file3);

if (!fs.existsSync(folder2Path)) { //ΔΗΜΙΟΥΡΓΙΑ ΤΟΥ ΠΡΩΤΟΥ ΦΑΚΕΛΟΥ
  fs.mkdirSync(folder2Path);
}

if (!fs.existsSync(teachersFolderPath)) { //ΔΗΜΙΟΥΡΓΙΑ ΤΟΥ ΔΕΥΤΕΡΟΥ ΦΑΚΕΛΟΥ
  fs.mkdirSync(teachersFolderPath);
}
fs.writeFileSync(file3Path, "Περιεχόμενα του αρχείου."); //ΔΗΜΙΟΥΡΓΙΑ ΤΟΥ ΑΡΧΕΙΟΥ!
console.log("Το αρχείο δημιουργήθηκε επιτυχώς!");

// Παίρνουμε το όνομα του αρχείου από το file3Path
const filename = path.basename(folder2); //επιστρεφει το ονομα του αρχειου ή φακελου
console.log(filename)

//dirname() επιστρεφει το path μεσα στο οποιο βρισκεται το τελευταιο αρχειο ή φακελος
const fullPath = '/home/user/projects/documents';
const dirName = path.dirname(fullPath);

console.log(dirName); // Output: /home/user/projects/documents

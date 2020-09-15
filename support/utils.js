import AdmZip from "adm-zip";
import fs from "fs";

export function listFiles(folder) {
  if (!fs.existsSync(folder)) {
    throw new Error("The folder does not exist: " + folder);
  }
  return listDirectoryContent(folder).filter(
    (content) => !fs.statSync(content).isDirectory()
  );
}

export function filterFileByExtension(files, extension) {
  return files.filter(
    (file) => file.substring(file.lastIndexOf(".") + 1) === extension
  );
}

export function sortingFilesByDateModified(files) {
  return files
    .map((file) => {
      return {
        name: file,
        time: fs.statSync(file).mtime.getTime(),
      };
    })
    .sort((fileA, fileB) => {
      return fileA.time - fileB.time;
    })
    .map((file) => {
      return file.name;
    });
}

export function listFolders(folder) {
  return listDirectoryContent(folder).filter((content) =>
    fs.statSync(content).isDirectory()
  );
}

export function listDirectoryContent(folder) {
  return fs.readdirSync(folder).map((content) => {
    return `${folder}/${content}`;
  });
}

export function convertToBase64(file) {
  return fs.readFileSync(file, "base64");
}

export function zipFile(file) {
  const outputFile = `${file.slice(0, -4)}.zip`;
  const zip = new AdmZip();
  zip.addLocalFile(file);
  zip.writeZip(outputFile);
  return outputFile;
}

export function zipFolder(folder) {
  const outputFiles = listFiles(folder);
  const outputFile = `${folder}/allure-results.zip`;
  const zip = new AdmZip();
  outputFiles.forEach((file) => {
    zip.addLocalFile(file);
  });
  zip.writeZip(outputFile);
  return outputFile;
}

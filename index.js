const core = require('@actions/core');
const github = require('@actions/github');

const fs = require('fs');
const path = require('path');

// Contents/mods/MODNAME


const workshopModRoot = path.join("Contents")
const workshopModFullDir = path.join(workshopModRoot, "mods", modName);


const modName = core.getInput('modName')
fs.mkdirSync(workshopModFullDir, { recursive: true });


// Various locations
const mediaFolder = path.join("media");
fs.cpSync(mediaFolder, path.join(workshopModFullDir, "media"), { recursive: true });

// Root files
const rootFilesToCopy = ["workshop.txt", "preview.png"];
for (const file of rootFilesToCopy) {
    try {
        const sourcePath = path.join("workshop_files", file);
        fs.copyFileSync(sourcePath, path.join(workshopModRoot, file));
    } catch (error) {
        console.log("Error copying " + file);
        console.log("Error", error.message);
    }
}

////////////

const modFilesToCopy = ["mod.info", "poster.png", "icon.png"];
for (const file of modFilesToCopy) {
    try {
        const sourcePath = path.join(file);
        fs.copyFileSync(sourcePath, path.join(workshopModRoot, file));
    } catch (error) {
        console.log("Error copying " + file);
        console.log("Error", error.message);
    }
}

// TODO: change mod.info with additional_text

console.log("All done!");
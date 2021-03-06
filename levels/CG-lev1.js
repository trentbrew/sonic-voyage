console.log('~~~ INIT CG-LEVEL1');

level = [
    [
        new spring(128*7+48,128*11+96,32,32,"res/items/springR.png",14),
        new spring(128*9+48,128*11+96,32,32,"res/items/springR.png",14),
        new motobug(128*8+43,128*9+87,41,41,"res/characters/enemies/motobug.png"),
        new motobug(128*20+43,128*11+87,41,41,"res/characters/enemies/motobug.png"),
        new motobug(128*22+43,128*11+87,41,41,"res/characters/enemies/motobug.png"),
        new motobug(128*24+43,128*11+87,41,41,"res/characters/enemies/motobug.png"),
        new spikes(128*28+96,128*16+96,32,32,"res/items/spikes.png"),
        new devText(128*1,128*7+64,15,"Press arrow keys to move,"),
        new devText(128*1,128*7+80,15,"and a to jump"), 
        new devText(128*10,128*8+64,15,"SONIC HAS A DROP DASH!"), 
        new devText(128*10,128*8+80,15,"Hold a in midair!"), 
        new devText(128*34,128*10+64,15,"END OF LEVEL"), 
        new devText(128*34,128*10+80,15,"Press p to change characters"), 
        new devText(128*34,128*10+100,15,"Explore the characters' double-jump"), 
        new devText(128*32,128*16+64,15,"END OF LEVEL"), 
        new devText(128*32,128*16+80,15,"Press <i> to enter dev mode"), 
        new devText(128*32,128*16+100,15,"Here, <L> changes levels"), 
        new layerSwitch(128*27,128*11,128,128,0,0),
        new layerSwitch(128*32,128*13,128,128,1,1),
        new layerSwitch(128*30+32,128*12,64,64,1,0),
        new layerSwitch(128*28,128*10-40,128*4,128,1,1),
],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1, 0, 0,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1, 0, 0,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1, 0,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1, 0, 1,-1, 1, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [ 1, 1,10,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [ 0, 0, 0,-1,-1,11, 1,-1,-1,-1, 1,10,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [ 0, 0, 0,-1,-1, 0, 0,-1, 1,-1, 0, 0,-1,-1,-1,11,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,     -1,     -1,     -1,     -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [ 0, 0, 0, 6, 7, 0, 0,-1, 0,-1, 0, 0,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,[-1,11],[-1, 1],      1,     10,-1,11, 1, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [ 0, 0, 0, 8, 9, 0, 0, 1, 0, 1, 0, 0, 6,-1, 7, 0, 0, 6,-1, 7, 1,-1,11,10,-1, 1, 1, 1,[10, 0],[-1,14],     15,      0,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 8, 1, 9, 0, 0, 8, 1, 9, 0,-1,13,12,-1, 0, 0, 0,      0,      6,[ 7,-1],[ 0,-1], 7, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,-1,-1,-1,-1,-1,-1,      0,      8,      9,      0, 9, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 0, 8, 1, 1, 1, 1,10,-1,     -1,     -1,     -1,     -1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 6,     -1,     -1,     -1,     -1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 8,      1,     -1,      1,     -1, 1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 0,      0,     -1,      0,     -1, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    //1                            10                               20                               30                         40                            50                            60
// GHZ Act 2 = 66
];//current level = 48

// backgroundMusic.src = "res/music/Dig3.ogg";
// backgroundMusic.loop = true;
// backgroundMusic.play();
console.log('playing background music...');

backgroundMusic.innerHTML = "";
backgroundMusic.appendChild(addSource("res/music/Dig3.ogg"));
backgroundMusic.load();

chunks = [];
thisScript = document.createElement("script");
thisScript.src = "levels/CGTiles.js";
document.body.appendChild(thisScript);
delete thisScript;

//arrayRings(level,12*128,7.75*128,4,1,32,32);
loopRings(level,4*128-8,11*128-8,100,Math.PI/7,Math.PI*5/14,3);
loopRings(level,16*128-8,11*128-8,150,Math.PI/8,Math.PI*22/16,3);
//arrayRings(level,660,7.29*128,3,1,32,32);
//arrayRings(level,128*17,7*128,10,10,5,5);

levelName = [
    "Crystal Geyser",
    "Zone",
    "ACT 1"
];
cBack = 1;
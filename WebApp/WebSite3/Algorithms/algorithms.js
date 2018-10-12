//JS Algorithms

//Tree Object
var tree_0 = {
    nodeCount: 7,
    nodeSet: nodes
};

var nodes = {
    vertices: [AB, AE, BD, BC, CD, CG, DF, FE]
};

var AB = {
    nodevalues: ["A", "B"],
    cost: ABcost
};

var AE = {
    nodevalues: ["A", "E"],
    cost: AEcost
};

var BD = {
    nodevalues: ["B", "D"],
    cost: BDcost
};

var BC = {
    nodevalues: ["B", "C"],
    cost: BCcost
};

var CD = {
    nodevalues: ["C", "D"],
    cost: CDcost
};

var CG = {
    nodevalues: ["C", "G"],
    cost: CGcost
};

var DF = {
    nodevalues: ["D", "F"],
    cost: DFcost
};

var FE = {
    nodevalues: ["F", "E"],
    cost: FEcost
};

var ABcost;
var AEcost;
var BCcost;
var BDcost;
var CDcost;
var CGcost;
var DFcost;
var FEcost;

function shuffleCosts() {

    ABcost = Math.floor(Math.random() * 10);
    AEcost = Math.floor(Math.random() * 10);
    BCcost = Math.floor(Math.random() * 10);
    BDcost = Math.floor(Math.random() * 10);
    CDcost = Math.floor(Math.random() * 10);
    CGcost = Math.floor(Math.random() * 10);
    DFcost = Math.floor(Math.random() * 10);
    FEcost = Math.floor(Math.random() * 10);

}


//Prim's Algorithm



//Kruskal's Algorithm
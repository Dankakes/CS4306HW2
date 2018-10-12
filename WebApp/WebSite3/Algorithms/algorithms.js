//Page Logic



//Tree Object

var ABcost = 0;
var AEcost = 0;
var BCcost = 0;
var BDcost = 0;
var CDcost = 0;
var CGcost = 0;
var DFcost = 0;
var FEcost = 0;

var AB = {
    vertex: "AB",
    nodevalues: ["A", "B"],
    cost: ABcost
};

var AE = {
    vertex: "AE",
    nodevalues: ["A", "E"],
    cost: AEcost
};

var BD = {
    vertex: "BD",
    nodevalues: ["B", "D"],
    cost: BDcost
};

var BC = {
    vertex: "BC",
    nodevalues: ["B", "C"],
    cost: BCcost
};

var CD = {
    vertex: "CD",
    nodevalues: ["C", "D"],
    cost: CDcost
};

var CG = {
    vertex: "CG",
    nodevalues: ["C", "G"],
    cost: CGcost
};

var DF = {
    vertex: "DF",
    nodevalues: ["D", "F"],
    cost: DFcost
};

var FE = {
    vertex: "FE",
    nodevalues: ["F", "E"],
    cost: FEcost
};

var nodes = {
    vertices: [AB, AE, BD, BC, CD, CG, DF, FE]
};

var tree_0 = {
    nodeCount: 8,
    nodeSet: nodes
};


$('#shuffle').click(function shuffleCosts() {

    AB.cost = Math.floor(Math.random() * 10);
    AE.cost = Math.floor(Math.random() * 10);
    BC.cost = Math.floor(Math.random() * 10);
    BD.cost = Math.floor(Math.random() * 10);
    CD.cost = Math.floor(Math.random() * 10);
    CG.cost = Math.floor(Math.random() * 10);
    DF.cost = Math.floor(Math.random() * 10);
    FE.cost = Math.floor(Math.random() * 10);

});

$('button').click(function reprintAll() {
    document.getElementById("values").innerHTML = AB.vertex + ": " + AB.cost + ", " + AE.vertex + ": " + AE.cost + ", " + BC.vertex + ": " + BC.cost + ", " + BD.vertex + ": " + BD.cost + ", " + CD.vertex + ": " + CD.cost + ", " + CG.vertex + ": " + CG.cost + ", " + DF.vertex + ": " + DF.cost + ", " + FE.vertex + ": " + FE.cost;
});

$('#begin').click(function() {
    reprintAll();
});

//Prim's Algorithm

function prims() {

};

//Kruskal's Algorithm

function kruskals() {

};


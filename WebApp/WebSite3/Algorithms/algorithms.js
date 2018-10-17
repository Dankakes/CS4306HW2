//Page Info

/* 
 * Highlight Vectors with highlightVert("vertstring"); with vertstring being "ab" or "bd" etc
 * HighlightNodes with highlightNode("nodestring"); with nodestring being "a" or "b" etc
 * Highlight Vectors/Nodes that have been visited in your logic
 * 
 * Shuffle Button does not reset highlighting temporarially, and if youre worried that the highlight function isnt working theres a 
 *   button that tests if the highlight function is working properly. 
 * 
 * The way to call nodes using vars without specifically typing each node out is with: 
 * "tree.nodeSet.vertices[1].cost/.nodes/.vertex"
 * This calls the tree, the set, the first vertex (ab), then either the cost, an array of the nodes used, or a string of the vertex ID
 */

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
    nodes: ["A", "B"],
    cost: ABcost
};

var AE = {
    vertex: "AE",
    nodes: ["A", "E"],
    cost: AEcost
};

var BD = {
    vertex: "BD",
    nodes: ["B", "D"],
    cost: BDcost
};

var BC = {
    vertex: "BC",
    nodes: ["B", "C"],
    cost: BCcost
};

var CD = {
    vertex: "CD",
    nodes: ["C", "D"],
    cost: CDcost
};

var CG = {
    vertex: "CG",
    nodes: ["C", "G"],
    cost: CGcost
};

var DF = {
    vertex: "DF",
    nodes: ["D", "F"],
    cost: DFcost
};

var FE = {
    vertex: "FE",
    nodes: ["F", "E"],
    cost: FEcost
};

var nodes = {
    vertices: [AB, AE, BD, BC, CD, CG, DF, FE]
};

var tree = {
    nodeCount: 8,
    nodeSet: nodes
};



//Math to randomize all costs
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

//Prim's Algorithm (Daemon)




//Prim's Button
$("#prims").click(function () {

});

//Kruskal's Algorithm (Eric)



//Kruskal's Button
$("#kruskals").click(function () {

});

//Printing and Visual Changes
$('button').click(function reprintAll() {
    document.getElementById("values").innerHTML = AB.vertex + ": "+ AB.cost + ", " + AE.vertex + ": " + AE.cost + ", " + BC.vertex + ": " + BC.cost + ", " + BD.vertex + ": " + BD.cost + ", " + CD.vertex + ": " + CD.cost + ", " + CG.vertex + ": " + CG.cost + ", " + DF.vertex + ": " + DF.cost + ", " + FE.vertex + ": " + FE.cost;
    document.getElementById("ab").innerHTML = AB.cost;
    document.getElementById("ae").innerHTML = AE.cost;
    document.getElementById("bc").innerHTML = BC.cost;
    document.getElementById("bd").innerHTML = BD.cost;
    document.getElementById("cd").innerHTML = CD.cost;
    document.getElementById("cg").innerHTML = CG.cost;
    document.getElementById("df").innerHTML = DF.cost;
    document.getElementById("fe").innerHTML = FE.cost;

    //resetHighlight();

});

function highlightVert(vert) {
    switch (vert) {
        case "ab":
            document.getElementById("ab").style.fill = "#1850FF";
            document.getElementById("ab_line").style.stroke = "#1850FF";
            break;
        case "ae":
            document.getElementById("ae").style.fill = "#1850FF";
            document.getElementById("ae_line").style.stroke = "#1850FF";
            break;
        case "bc":
            document.getElementById("bc").style.fill = "#1850FF";
            document.getElementById("bc_line").style.stroke = "#1850FF";
            break;
        case "bd":
            document.getElementById("bd").style.fill = "#1850FF";
            document.getElementById("bd_line").style.stroke = "#1850FF";
            break;
        case "cd":
            document.getElementById("cd").style.fill = "#1850FF";
            document.getElementById("cd_line").style.stroke = "#1850FF";
            break;
        case "cg":
            document.getElementById("cg").style.fill = "#1850FF";
            document.getElementById("cg_line").style.stroke = "#1850FF";
            break;
        case "df":
            document.getElementById("df").style.fill = "#1850FF";
            document.getElementById("df_line").style.stroke = "#1850FF";
            break;
        case "fe":
            document.getElementById("fe").style.fill = "#1850FF";
            document.getElementById("fe_line").style.stroke = "#1850FF";
            break;
    }
}

function highlightNode(node) {
    switch (node) {
        case "a":
            document.getElementById("a_circle").style.fill = "#1850FF";
            break;
        case "b":
            document.getElementById("b_circle").style.fill = "#1850FF";
            break;
        case "c":
            document.getElementById("c_circle").style.fill = "#1850FF";
            break;
        case "d":
            document.getElementById("d_circle").style.fill = "#1850FF";
            break;
        case "e":
            document.getElementById("e_circle").style.fill = "#1850FF";
            break;
        case "f":
            document.getElementById("f_circle").style.fill = "#1850FF";
            break;
        case "g":
            document.getElementById("g_circle").style.fill = "#1850FF";
            break;
       
    }
}

$("#resethighlight").click(function resetHighlight() {

    document.getElementById("ab").style.fill = "black";
    document.getElementById("ae").style.fill = "black";
    document.getElementById("bc").style.fill = "black";
    document.getElementById("bd").style.fill = "black";
    document.getElementById("cd").style.fill = "black";
    document.getElementById("cg").style.fill = "black";
    document.getElementById("df").style.fill = "black";
    document.getElementById("fe").style.fill = "black";

    document.getElementById("ab_line").style.stroke = "black";
    document.getElementById("ae_line").style.stroke = "black";
    document.getElementById("bc_line").style.stroke = "black";
    document.getElementById("bd_line").style.stroke = "black";
    document.getElementById("cd_line").style.stroke = "black";
    document.getElementById("cg_line").style.stroke = "black";
    document.getElementById("df_line").style.stroke = "black";
    document.getElementById("fe_line").style.stroke = "black";

    document.getElementById("a_circle").style.fill = "white";
    document.getElementById("b_circle").style.fill = "white";
    document.getElementById("c_circle").style.fill = "white";
    document.getElementById("d_circle").style.fill = "white";
    document.getElementById("e_circle").style.fill = "white";
    document.getElementById("f_circle").style.fill = "white";
    document.getElementById("g_circle").style.fill = "white";
});


$("#begin").click(function () {
    reprintAll();
});



$("#highlightvert").click(function () {
    highlightVert("ab");
    highlightVert("ae");
    highlightVert("bc");
    highlightVert("bd");
    highlightVert("cd");
    highlightVert("cg");
    highlightVert("df");
    highlightVert("fe");
});

$("#highlightnode").click(function () {
    highlightNode("a");
    highlightNode("b");
    highlightNode("c");
    highlightNode("d");
    highlightNode("e");
    highlightNode("f");
    highlightNode("g");

});

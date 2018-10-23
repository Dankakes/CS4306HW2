//Page Info

/* 
 * Highlight Vectors with:
 * "highlightVert("vertstring")" 
 * with vertstring being "ab" or "bd" etc
 * 
 * HighlightNodes with:
 * "highlightNode("nodestring")"
 * with nodestring being "a" or "b" etc
 * 
 * Highlight Vectors/Nodes that have been visited in your logic
 * 
 * Shuffle Button does not reset highlighting temporarially, and if youre worried that the highlight function isnt working theres a 
 *   button that tests if the highlight function is working properly. 
 * 
 * The way to call nodes using vars without specifically typing each node out is with: 
 * "tree.nodeSet.vertices[1].cost/.nodes/.vertex"
 * This calls the tree, the set, the first vertex (ab), then either the cost, an array of the nodes used, or a string of the vertex ID
 * 
 * Could use this to check if a vertex has been visited by storing the .vertex in an array, 
 *   or if the nodes have been visited by storing the .nodes in an array.
 * 
 * Could use the .cost to check the cost of each vert or use them to store the values into your Identity Matrix.
 *   
 * Using the calling through the "tree.nodeSet.vertices[1].cost/.nodes/.vertex" can be used in loops if need be to hopefully make it easier
 *   than hard-checking each individual node with a set path. 
 *   
 * The Nodes will always be A, B, C, D, E, F, and G, but the costs are shuffled each time. 
 *   
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
    vertex: "EF",
    nodes: ["E", "F"],
    cost: FEcost
};

var A = {
    string: "A"
}

var B = {
    string: "B"
}

var C = {
    string: "C"
}

var D = {
    string: "D"
}

var E = {
    string: "E"
}

var F = {
    string: "F"
}

var G = {
    string: "G"
}

var nodes = {
    vertices: [AB, AE, BD, BC, CD, CG, DF, FE]
};

var tree = {
    nodeCount: 8,
	nodeSet: nodes
};


//Math to randomize all costs
$('#shuffle').click(function shuffleCosts() {

    AB.cost = Math.floor(Math.random() * 9 + 1);
    AE.cost = Math.floor(Math.random() * 9 + 1);
    BC.cost = Math.floor(Math.random() * 9 + 1);
    BD.cost = Math.floor(Math.random() * 9 + 1);
    CD.cost = Math.floor(Math.random() * 9 + 1);
    CG.cost = Math.floor(Math.random() * 9 + 1);
    DF.cost = Math.floor(Math.random() * 9 + 1);
    FE.cost = Math.floor(Math.random() * 9 + 1);


});

////Prim's Algorithm (Daemin)

//constructs Primms Algorithms
function primMST() {

	//var parent = [A, B, C, D, E, F, G]
	var parent = [];
	var v = tree.nodeCount - 1;
	var key[];
	var mstArr[];
	var gEdges[] = [ABcost, AEcost, BCcost, BDcost, CDcost, CGcost, DFcost, FEcost];
	var q[];

	for (var i = 0; i < v; i++) {
		key[i] = Number.MAX_VALUE;
		mstArr[i] = false;
	}

	key[0] = 0;
	mstArr[0] = true;
	parent[0] = -1;
	var u = 0;

	function primsAlgorithm() {



		while (mstArr[] != true;) {
			switch (u) {

				//A
				case 0:
					key[1] = ABcost;
					key[4] = AEcost;



					break;

				//B
				case 1:
					key[1] = ABcost;
					key[2] = BCcost;
					key[3] = BDcost;

					break;

				//C
				case 2:
					key[2] = BCcost;
					key[3] = CDcost;
					key[6] = CGcost;
					break;

				//D
				case 3:
					key[1] = BDcost;
					key[2] = CDcost;
					key[5] = DFcost;
					break;

				//E
				case 4:
					key[4] = AEcost;
					key[5] = FEcost;
					break;


				//F
				case 5:
					key[5] = FEcost;
					break;

				//G
				case 6:
					key[6] = CGcost;
					break;

			}




			for (var y = 0; y < v; y++) {
				if (mstArr[y] == true) {

				}
			}

		}

		//function printQueue() {
		//	for (var p = 0; p < v; p++) {

		//	}
		//}

		$("#primspath").innerHTML =  
	}





	//Prim's Button
	$("#prims").click(function () {
		highlightVert("ab");
	});
	




//Prim's Button
$("#prims").click(function () {
	highlightVert("ab");
});



//Kruskal's Algorithm (Eric)

/*
$("#kruskals").click(function kruskalsAlgorithm(node, vert) {
    var mstSet;
    var originalTreeSetCost = [AB, AE, BC, BD, CD, CG, DF, FE];

    var i = 0;

    for (i = 0; i < originalTreeSetCost.length; i++) {
        let value = originalTreeSetCost[i].cost;
        for (var j = i - 1; j > -1 && originalTreeSetCost[j].cost > value; j--) {
            originalTreeSetCost[j + 1].cost = originalTreeSetCost[j].cost;
        }
        originalTreeSetCost[j + 1].cost = value;
    }
    var cycleOne = [BC, CD, BD];
    var cycleTwo = [AB, BD, DF, FE, AE];
    for (i = 0; i < originalTreeSetCost.length; i++) {
        mstSet[i] = originalTreeSetCost[i];
        if (mstSet[i].vertex !== cycleOne && mstSet[i].vertex !== cycleTwo) {
            highlightVert(mstSet[i].vertex);
            highlightNode(mstSet[i].nodes[0]);
            highlightNode(mstSet[i].nodes[1]);
        }
    }
});
*/

$("#kruskals").click(function kruskalsAlgorithm(node, vert) {
    document.getElementById("kruskalspath").innerHTML = "Failed"

    var Set = [AB, AE, BC, BD, CD, CG, DF, FE];

    for (var i = 0; i < Set.length; i++) {
        let value = Set[i];

        for (var j = i - 1; j > -1 && Set[j].cost > value.cost; j--) {
            
            Set[j + 1] = Set[j];
        }
        Set[j + 1] = value;
    }

    var output = "";

    for (var i = 0; i < Set.length; i++) {
        output += ((Set[i].vertex) + ": " + Set[i].cost + "   ");
    }
    document.getElementById("kruskalspath").innerHTML = output;

    //Highlight in order

    for (var i = 0; i < Set.length; i++) {


        window.setTimeout(highlightNode(Set[i].nodes[0]), 3000);
        window.setTimeout(highlightNode(Set[i].nodes[1]), 3000);
        window.setTimeout(highlightVert(Set[i].vertex), 3000);
       
    }
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
        case "AB":
            document.getElementById("ab").style.fill = "#1850FF";
            document.getElementById("ab_line").style.stroke = "#1850FF";
            break;
        case "AE":
            document.getElementById("ae").style.fill = "#1850FF";
            document.getElementById("ae_line").style.stroke = "#1850FF";
            break;
        case "BC":
            document.getElementById("bc").style.fill = "#1850FF";
            document.getElementById("bc_line").style.stroke = "#1850FF";
            break;
        case "BD":
            document.getElementById("bd").style.fill = "#1850FF";
            document.getElementById("bd_line").style.stroke = "#1850FF";
            break;
        case "CD":
            document.getElementById("cd").style.fill = "#1850FF";
            document.getElementById("cd_line").style.stroke = "#1850FF";
            break;
        case "CG":
            document.getElementById("cg").style.fill = "#1850FF";
            document.getElementById("cg_line").style.stroke = "#1850FF";
            break;
        case "DF":
            document.getElementById("df").style.fill = "#1850FF";
            document.getElementById("df_line").style.stroke = "#1850FF";
            break;
        case "EF":
            document.getElementById("fe").style.fill = "#1850FF";
            document.getElementById("fe_line").style.stroke = "#1850FF";
            break;
    }
}

function highlightNode(node) {
    switch (node) {
        case "A":
            document.getElementById("a_circle").style.fill = "#1850FF";
            break;
        case "B":
            document.getElementById("b_circle").style.fill = "#1850FF";
            break;
        case "C":
            document.getElementById("c_circle").style.fill = "#1850FF";
            break;
        case "D":
            document.getElementById("d_circle").style.fill = "#1850FF";
            break;
        case "E":
            document.getElementById("e_circle").style.fill = "#1850FF";
            break;
        case "F":
            document.getElementById("f_circle").style.fill = "#1850FF";
            break;
        case "G":
            document.getElementById("g_circle").style.fill = "#1850FF";
            break;
       
    }
}

$("#shuffle").click(function resetHighlight() {

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
    highlightVert("AB");
    highlightVert("AE");
    highlightVert("BC");
    highlightVert("BD");
    highlightVert("CD");
    highlightVert("CG");
    highlightVert("DF");
    highlightVert("EF");
});

$("#highlightnode").click(function () {
    highlightNode("A");
    highlightNode("B");
    highlightNode("C");
    highlightNode("D");
    highlightNode("E");
    highlightNode("F");
    highlightNode("G");

});

/*
Given a string of comma + new line separated values, separate each as such:
Example input: 
    a, 6
    b, 2
    c, 8
    d, 9
Example output: [['a', 6], ['b', 2], ['c', 8], ['d', 9]]
*/
var file = "a, 6\nb, 2\nc, 8\nd, 9"

function listFormat(){
	/*
	parse string text to a formatted string.
	Quick and dirty.
	*/
	
	var stroutput = "["
	var linelist = file.split("\n");
	var linevals;
	for (i = 0; i < linelist.length; i++){
		linevals = linelist[i].split(",")
		stroutput += "['" + linevals[0] + "', " + linevals[1] + "], " 
	}
	
	stroutput = stroutput.slice(0, -2)
	stroutput += "]"
	console.log(stroutput)
	return stroutput
}

exports = listFormat() //for running in node
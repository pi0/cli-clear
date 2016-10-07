"use strict";
var windows = process.platform.indexOf("win") === 0;



function clear()
{
	var i,lines;
	var stdout = "";
	
	if (windows === false)
	{
		stdout += "\x1B[2J";
	}
	else
	{
		lines = process.stdout.isTTY ? process.stdout.getWindowSize()[1] : 3;
		
		for (i=0; i<lines; i++)
		{
			stdout += "\r\n";
		}
	}
	
	// Reset cursor
	stdout += "\x1B[0f";
	
	process.stdout.write(stdout);
}



module.exports = clear;

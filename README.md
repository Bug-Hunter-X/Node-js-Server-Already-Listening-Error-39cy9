# Node.js Server Already Listening Error
This repository demonstrates a common error in Node.js where a server fails to start because the port is already in use.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a robust solution.

## Problem
Attempting to start a Node.js HTTP server on a port that's already occupied by another process will result in an `ERR_SERVER_ALREADY_LISTEN` error. This typically happens when running multiple server instances concurrently or if another application is using the port. 

## Solution
The solution involves checking if the port is available before attempting to bind to it.  This can be done using a library or by implementing a simple check with a timeout. The provided `bugSolution.js` example shows the use of a helper function to handle this situation gracefully.
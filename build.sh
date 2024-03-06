#!/bin/bash

echo
echo "+================================"
echo "| START: Blockly"
echo "+================================"
echo

datehash=`date | md5sum | cut -d" " -f1`
abbrvhash=${datehash: -8}

echo 
echo "Building container using tag ${abbrvhash}"
echo
docker build -t graboskyc/blocklysearch:latest -t graboskyc/blocklysearch:${abbrvhash} --platform=linux/amd64 .

EXITCODE=$?

if [ $EXITCODE -eq 0 ]
    then

    echo 
    echo "Starting container"
    echo
    docker stop blockly
    docker rm blockly
    docker run -t -i -d -p 9996:80 --name blockly --restart unless-stopped graboskyc/blocklysearch:latest

    echo
    echo "+================================"
    echo "| END:  Blockly"
    echo "+================================"
    echo
else
    echo
    echo "+================================"
    echo "| ERROR: Build failed"
    echo "+================================"
    echo
fi
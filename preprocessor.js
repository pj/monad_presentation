#!/usr/bin/env node --harmony
/*
 * preprocessor.js
 * Copyright (C) 2015 pauljohnson <pauljohnson@Paul-Johnsons-MacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */

var program = require('commander'),
    esprima = require('esprima'),
    fs = require('fs');

program
    .arguments('<filename> [output_filename]')
    .action(function(filename, output_filename){
        var code = fs.readFileSync(filename);
        var ast = esprima.parse(code, {comment: true});
        var comments = ast["comments"];
        var slides = comments.filter((comment) => {
            return comment["type"] == "Block" &&
                   comment["value"].indexOf("slide") == 0;})
            .map((comment) => comment["value"].slice(comment["value"].indexOf("\n")));
        var output = slides.join("\n---\n");

        if (output_filename) {
            fs.writeFileSync(output_filename, output);
        } else {
            console.log(output);
        }
    });

if (!process.argv.slice(2).length) {
    program.outputHelp();
    process.exit();
}

program.parse(process.argv);

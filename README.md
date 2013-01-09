# String Extensions
A set of string extensions to extend string capabilities of JavaScript.

The list of extensions:

## trimLeft

    var textToBeTrimmed = "     No space please!";
    console.log( textToBeTrimmed.trimLeft() ); // outputs: "No space please!"

    textToBeTrimmed = "zzzzzzzzzzWake up!";
    console.log( textToBeTrimmed.trimLeft("z") ); // outputs: "Wake up!"

## trimRight

    var textToBeTrimmed = "No space please!     ";
    console.log( textToBeTrimmed.trimRight() ); // outputs: "No space please!"

    textToBeTrimmed = "Sleeping Beautyzzzzzzzzzz";
    console.log( textToBeTrimmed.trimRight("z") ); // outputs: "Sleeping Beauty"

## trim

    var textToBeTrimmed = "     Space, space everywhere!     ";
    console.log( textToBeTrimmed.trim() ); // outputs: "Space, space everywhere!"

    textToBeTrimmed = "zzzzzzzzzzDo not disturb...zzzzzzzzzzz";
    console.log( textToBeTrimmed.trim("z") ); // outputs: "Do not disturb..."

## padLeft

    var textToBePadded = "Pad me, right?!?";
    console.log( textToBePadded.padLeft(20) ); // outputs: "    Pad me, right?!?"

    textToBePadded = "Fill in the blanks";
    console.log( textToBePadded.padLeft(20, "_") ); // outputs: "__Fill in the blanks"

## padRight

    var textToBePadded = "No space left";
    console.log( textToBePadded.padRight(20) ); // outputs: "No space left       "

    textToBePadded = "Fill in the blanks";
    console.log( textToBePadded.padRight(20, "_") ); // outputs: "Fill in the blanks__"

## insert

    var myText = "NoSpace";
    console.log( myText.insert(2, " ") ); // outputs: "No Space"

## startsWith

    var trickyQuestion = "Does this dress make me look fat?";
    console.log( trickyQuestion.startsWith("Does") ); // outputs: true
    console.log( trickyQuestion.startsWith("D") );    // outputs: true
    console.log( trickyQuestion.startsWith("Yes") );  // outputs: false

## endsWith

    var scaryQuestion = "Does this look infected?";
    console.log( scaryQuestion.endsWith("?") );        // outputs: true
    console.log( scaryQuestion.endsWith("ed?") );      // outputs: true
    console.log( scaryQuestion.endsWith("infected") ); // outputs: false

## isNullOrEmpty

    var temp = "";
    console.log( temp.isNullOrEmpty() );        // outputs: true
    temp = "  ";
    console.log( temp.isNullOrEmpty() );        // outputs: false
    temp = "full";
    console.log( temp.isNullOrEmpty() );        // outputs: false

## isNullOrWhitespace

    var temp = "";
    console.log( temp.isNullOrWhitespace() );   // outputs: true
    temp = "  ";
    console.log( temp.isNullOrWhitespace() );   // outputs: true
    temp = "full";
    console.log( temp.isNullOrWhitespace() );   // outputs: false

## append

    console.log( "You complete ".append("me") );   // outputs: "You complete me"

## appendTo

    var perfect = "yang", balance = "ying";
    console.log( perfect.appendTo(balance) );   // outputs: "yingyang"

## prepend

    var yodaStyle = "Do, or do not. There is no try.";
    console.log( yodaStyle.prepend("No! Try not. ") );   // outputs: "No! Try not. Do, or do not. There is no try."

## prependTo

    var reverseYodaStyle = "Do, or do not. There is no try. ";
    console.log( reverseYodaStyle.prependTo("No! Try not.") );   // outputs: "Do, or do not. There is no try. No! Try not."

## valiDate[*](https://github.com/karalamalar/valiDate)

    var myDate = "8.1.2013";
    if(myDate = myDate.valiDate()) {
      console.log( myDate ); // outputs: "Tue Jan 08 2013 00:00:00 GMT+0200 (GTB Standard Time)"
    }
    myDate = "13.13.2013";
    console.log( myDate.valiDate() ); // outputs: false

Copyright (c) 2009-2013 İzzet Emre Erkan  
Licensed under Creative Commons Attribution-Share Alike 3.0 Unported License  
http://creativecommons.org/licenses/by-sa/3.0/
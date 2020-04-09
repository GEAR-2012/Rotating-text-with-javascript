# Rotating-text-with-javascript

This javascript script is created to make a text in a div box to an arched text and rotate it.

*************

The script is hopefully easy to use and understand.

- the script itself needs to be called at the end of the body element
- in the body element the user must create div element(s) with a class name: 'rotating_text'
- the text itself should be directly in the div element
- div elements should be formatted with CSS to the desired size (width & height must equal)
- the text's font-family is made by javascript but it can be changed by the user.

*************

FORMATTING AND CLASSING EXAMPLES:
---------------------------------

.rotating_text {
  color: rgb(223, 182, 0);
}

.rotating_text.small {
  width: 100px;
  height: 100px;
  font-size: 16px;
  font-weight: bold;
}

.rotating_text.medium {
  width: 300px;
  height: 300px;
  font-size: 26px;
  font-weight: bold;
}

.rotating_text.big {
  width: 500px;
  height: 500px;
  font-size: 30px;
  font-weight: bold;
}

.rotating_text.right {
  margin-left: auto;
  margin-right: 0;
}

.rotating_text.center {
  margin: 0 auto;
}

*************

CLASSING AND INLINE FORMATTING EXAMPLES:
---------------------------
<pre>
  <div class="rotating_text big center" style="color: rgb(0, 255, 34);">
    the desired text itself
  </div>
</pre>


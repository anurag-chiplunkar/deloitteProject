// External JS file
<script src="/path/to/script.js"></script>

// External JS link
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>

// Multiple script tags allowed
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>


// If src is set, the script content is ignored.
<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>


<script src="file.js"></script>
<script>
  alert(1);
</script>


// We can use a <script> tag to add JavaScript code to a page.
// The type and language attributes are not required.
// A script in an external file can be inserted with <script src="path/to/script.js"></script>.

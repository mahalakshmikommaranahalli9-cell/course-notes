<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>BCSL504 | Program 8A</title>

<style>

body{
    background:#080808;
    color:white;
    font-family:Arial;
}

.container{
    max-width:900px;
    margin:auto;
    padding:30px 20px;
}

a{
    color:#d4af37;
}

h1,h2{
    color:#d4af37;
}

.box{
    background:#111;
    padding:25px;
    margin:20px 0;
    border-radius:10px;
}

pre{
    background:#050505;
    padding:20px;
    overflow:auto;
}

.counter{
    text-align:center;
    font-size:30px;
    color:#d4af37;
}

.github{
    display:inline-block;
    background:#d4af37;
    color:#000;
    padding:12px 20px;
    border-radius:8px;
    text-decoration:none;
    font-weight:bold;
}

</style>

</head>

<body>

<div class="container">

<a href="index.html">← Back to BCSL504</a>

<h1>BCSL504 • PROGRAM 8A</h1>

<h2>PHP Visitor Counter</h2>

<div class="box">

<h2>🎯 Aim</h2>

<p>
To create a PHP program that counts the number of
visitors using a text file.
</p>

</div>

<div class="box">

<h2>📖 Explanation</h2>

<p>
PHP is a server-side scripting language. The visitor
counter stores the number of visits in a text file.
Whenever the page is loaded, the stored number is
increased by one.
</p>

</div>

<div class="box">

<h2>🛠 Use of Program</h2>

<ul>
<li>Understand PHP file handling.</li>
<li>Store simple data on the server.</li>
<li>Count webpage visits.</li>
<li>Practice server-side scripting.</li>
</ul>

</div>

<div class="box">

<h2>💻 Complete Program</h2>

<pre><code>&lt;?php

$file = "visitors.txt";

if (!file_exists($file)) {
    file_put_contents($file, "0");
}

$count = (int) file_get_contents($file);

$count++;

file_put_contents($file, $count);

?&gt;

&lt;h1&gt;
Visitors: &lt;?php echo $count; ?&gt;
&lt;/h1&gt;</code></pre>

</div>

<div class="box">

<h2>🖥 Expected Output</h2>

<div class="counter">

Visitors:
<?php

$file = "visitors.txt";

if (!file_exists($file)) {
    file_put_contents($file, "0");
}

$count = (int) file_get_contents($file);

$count++;

file_put_contents($file, $count);

echo $count;

?>

</div>

<p>
The visitor count increases whenever the page is refreshed.
</p>

</div>

<div class="box">

<h2>⚠️ How to Run</h2>

<p>
PHP cannot run directly on GitHub Pages.
Use XAMPP, WAMP or another PHP server.
</p>

<p>
Place the project inside:
</p>

<pre><code>C:\xampp\htdocs\course-notes\BCSL504\</code></pre>

<p>
Then open:
</p>

<pre><code>http://localhost/course-notes/BCSL504/program8a.php</code></pre>

</div>

<div class="box">

<h2>🎓 Viva Questions</h2>

<ol>
<li>What is PHP?</li>
<li>What is server-side scripting?</li>
<li>What is file_get_contents()?</li>
<li>What is file_put_contents()?</li>
<li>Why can't GitHub Pages execute PHP?</li>
</ol>

</div>

<h2>MAHALAKSHMI'S GITHUB</h2>

<a class="github"
href="https://github.com/mahalakshmikommaranahalli9-cell"
target="_blank">
🐙 Visit Mahalakshmi's GitHub
</a>

</div>

</body>
</html>
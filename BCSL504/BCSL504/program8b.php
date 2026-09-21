<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>BCSL504 | Program 8B</title>

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

table{
    width:100%;
    border-collapse:collapse;
}

th,td{
    border:1px solid #555;
    padding:10px;
    text-align:center;
}

th{
    background:#d4af37;
    color:#000;
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

<h1>BCSL504 • PROGRAM 8B</h1>

<h2>PHP Selection Sort</h2>

<div class="box">

<h2>🎯 Aim</h2>

<p>
To implement selection sort using PHP.
</p>

</div>

<div class="box">

<h2>📖 Explanation</h2>

<p>
Selection sort repeatedly finds the smallest element
from the unsorted portion of an array and places it
in the correct position.
</p>

</div>

<div class="box">

<h2>🛠 Use of Program</h2>

<ul>
<li>Understand sorting algorithms.</li>
<li>Practice PHP arrays.</li>
<li>Implement selection sort.</li>
<li>Understand swapping of values.</li>
</ul>

</div>

<div class="box">

<h2>💻 Complete Program</h2>

<pre><code>&lt;?php

$numbers = array(64, 25, 12, 22, 11);

$n = count($numbers);

for ($i = 0; $i &lt; $n - 1; $i++) {

    $min = $i;

    for ($j = $i + 1; $j &lt; $n; $j++) {

        if ($numbers[$j] &lt; $numbers[$min]) {
            $min = $j;
        }

    }

    $temp = $numbers[$i];

    $numbers[$i] = $numbers[$min];

    $numbers[$min] = $temp;
}

echo "Sorted Array: ";

foreach ($numbers as $number) {
    echo $number . " ";
}

?&gt;</code></pre>

</div>

<div class="box">

<h2>🖥 Expected Output</h2>

<p>
Sorted Array:
11 12 22 25 64
</p>

</div>

<div class="box">

<h2>🎓 Viva Questions</h2>

<ol>
<li>What is selection sort?</li>
<li>What is an array?</li>
<li>What is swapping?</li>
<li>What is the time complexity of selection sort?</li>
<li>What is the use of count()?</li>
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

<?php

$numbers = array(64, 25, 12, 22, 11);

$n = count($numbers);

for ($i = 0; $i < $n - 1; $i++) {

    $min = $i;

    for ($j = $i + 1; $j < $n; $j++) {

        if ($numbers[$j] < $numbers[$min]) {
            $min = $j;
        }

    }

    $temp = $numbers[$i];

    $numbers[$i] = $numbers[$min];

    $numbers[$min] = $temp;
}

echo "<script>
document.body.innerHTML += '<p style=\"text-align:center;color:#d4af37;font-size:25px\">Sorted Array: "
. implode(" ", $numbers) .
"</p>';
</script>";

?>
<?php
echo "<b>Wetterbericht vom ".date("d. M Y h:i:s")."</b><br /><br />";

$dbh = new PDO('mysql:host=localhost;dbname=PLACEHOLDER', "PLACEHOLDER", "PLACEHOLDER");
$stmt = $dbh->query('SELECT * from weather ORDER BY id ASC');
$rownr = $stmt->rowCount();

	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    			
		echo "<i>".$row['id']."</i> (".$row['portals'].") - R: ".$row['resist_portals']."/".$row['resist_level']." - E: ".$row['entlight_portals']."/".$row['entlight_level']."<br />";	
		
   }

   echo "<br />Aktualisierung alle 15 Minuten.";



?>
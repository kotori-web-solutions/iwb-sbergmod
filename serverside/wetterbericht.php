<?php
$wetter_incoming =  preg_replace("/[^a-zA-Z0-9_,.\s]/","", $_POST['weather']);


echo "<pre>";

$lines = explode("\n", $wetter_incoming);
$head = str_getcsv(array_shift($lines));

$wetterarray = array();

foreach ($lines as $line) {
    $wetterarray[] = array_combine($head, str_getcsv($line));
}

$dbh = new PDO('mysql:host=localhost;dbname=PLACEHOLDER', "PLACEHOLDER", "PLACEHOLDER");

foreach($wetterarray as $wa) {
	
	
	if (((int)$wa['resist_portals'] > 0) || ((int)$wa['entlight_portals'] > 0))
		
		{

			$id = $wa['id'];
			$portals = $wa['portals'];
			$resist_portals = $wa['resist_portals'];
			$resist_level = $wa['resist_level'];
			$entlight_portals = $wa['entlight_portals'];
			$entlight_level = $wa['entlight_level'];
			
			
			// query
			$sql = "UPDATE weather SET portals = :portals, resist_portals = :resist_portals, resist_level = :resist_level, entlight_portals = :entlight_portals, entlight_level = :entlight_level WHERE id = :id";
			
			$stmt = $dbh->prepare($sql);                                  
			$stmt->bindParam(':portals', $portals, PDO::PARAM_STR);       
			$stmt->bindParam(':resist_portals', $resist_portals, PDO::PARAM_STR);       
			$stmt->bindParam(':resist_level', $resist_level, PDO::PARAM_STR);       
			$stmt->bindParam(':entlight_portals', $entlight_portals, PDO::PARAM_STR);       
			$stmt->bindParam(':entlight_level', $entlight_level, PDO::PARAM_STR);       
			$stmt->bindParam(':id', $id, PDO::PARAM_STR);       
			
			$stmt->execute(); 
			
			
			
			
			
			
		}
	
}




?>
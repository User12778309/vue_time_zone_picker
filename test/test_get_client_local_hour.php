<?php

while (true)
{
    $timestamp = time(); 
    $currentDate = gmdate('[H,i,s]', $timestamp);
    echo $currentDate , "\n";
    system("clear");
}

?> 
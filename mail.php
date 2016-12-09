<?

echo "PHP";

if ($_POST['phone'] and $_POST['email']) 
{
	mail("date_timestamp_set()@mail.ru", "Report ".$_POST['phone'], "Report to ".$_POST['phone']." and email ".$_POST['email']); 
}


if ($_POST['phone'] and !$_POST['email']) 
{
	mail("test@mail.ru", "Callback ".$_POST['phone'], "callback to ".$_POST['phone']); 
}
?>
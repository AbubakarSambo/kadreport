<?php
session_start (); // needed for sessions.
                  // if(isset($_SESSION['url']))
                  // $url = $_SESSION['url']; // holds url for last page visited.
                  // else
                  // $url = "index.php"; // default page for
                  
// header("Location: http://example.com/$url");//redirect page you want
                  // unset($_SESSION['email']);
if (! (isset ( $_SESSION ['email'] ))) {
	
	header ( "Location: index.html" );
}

// redirect page you want
?>



<!DOCTYPE html>
<!-- saved from url=(0043)http://getbootstrap.com/examples/dashboard/ -->
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="assets/kad_icon.jpg">

<title>Scorecard Dashboard</title>

<script src="js/jquery-2.2.0.min.js"></script>
<script src="js/main.js"></script>

<!-- Bootstrap core CSS -->
<link href="./dash_files/bootstrap.min.css" rel="stylesheet">

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link href="./dash_files/ie10-viewport-bug-workaround.css"
	rel="stylesheet">

<!-- Custom styles for this template -->
<link href="./dash_files/dashboard.css" rel="stylesheet">
<link href="assets/main2.css" rel="stylesheet" type="text/css">
<!-- <link href="bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"> -->

<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script src="./dash_files/ie-emulation-modes-warning.js"></script>
<style type="text/css"></style>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand"
					href="http://getbootstrap.com/examples/dashboard/#">KAD ACADEMY
					SCORECARD </a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="http://getbootstrap.com/examples/dashboard/#">Reset
							Password</a></li>
				</ul>
				<!--           <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form> -->
			</div>
		</div>
	</nav>

	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-3 col-md-2 sidebar">
				<ul class="nav nav-sidebar"
					style="padding-top: 20px; padding-bottom: 50px; padding-left: 20px; font-size: 1.5em;">
					<li style="padding-bottom: 20px;"><button id="1">Year 1</button></li>
					<li style="padding-bottom: 20px;"><button id="2">Year 2</button></li>
					<li style="padding-bottom: 20px;"><button id="3">Year 3</button></li>
					<li style="padding-bottom: 20px;"><button id="4">Year 4</button></li>
					<li style="padding-bottom: 20px;"><button id="5">Year 5</button></li>
					<li style="padding-bottom: 20px;"><button id="6">Year 6</button></li>
					<li style="padding-bottom: 20px;"><button id="7">Year 7</button></li>
					<li style="padding-bottom: 20px;"><button id="8">Year 8</button></li>
				</ul>

			</div>
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h2 class="page-header">Your Dashboard</h2>
				<!-- 
          <div class="row placeholders">
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </div>
 -->
				<h2 class="sub-header">Year</h2>
				<div class="table-responsive">
					<table class="table table-striped">
						<col width="500px" />
						<thead>
							<tr>
								<th>Student Name</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody id="tablebody">
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="./dash_files/jquery.min.js"></script>
	<script>
		window.jQuery
				|| document
						.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')
	</script>
	<script src="./dash_files/bootstrap.min.js"></script>
	<!-- Just to make our placeholder images work. Don't actually copy the next line! -->
	<script src="./dash_files/holder.min.js"></script>
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="./dash_files/ie10-viewport-bug-workaround.js"></script>


</body>
</html>
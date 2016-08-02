$(document)
		.ready(
				function() {

					var count = 3;
					$('#login')
							.click(
									function(event) {
										event.preventDefault();

										var email = document
												.getElementById('email').value;
										var password = document
												.getElementById("password").value;

										var vars = '&email=' + email
												+ '&password=' + password

										if (checkEmail()) {
											$
													.ajax({
														type : "GET",
														url : "php/functions.php?action=login"
																+ vars,
														success : function(ans) {
															if (ans == "Signed in Successfully") {
																// if password is a match then change page to the dashboard page
																// and give teacher access to the platform
																
																window.location
																		.assign("dashb.php");
															} else {
																alert("Cannot sign in")
																window.location
																		.assign("index.html");
															}

														}
													});
										}

									});
					$('#signout').click(function(event) {
						event.preventDefault();

						$.ajax({
							type : "GET",
							url : "php/functions.php?action=logout",
							success : function(ans) {

								if (ans == "signed out") {
									window.location.assign("index.html");
								} else {
									alert("Cannot sign out")
									window.location.assign("dashb.php");
								}

							}
						});

					});
					$('#signup')
							.click(
									function(event) {
										event.preventDefault();
										

										var fname = document
												.getElementById("fname").value;
										var lname = document
												.getElementById("lname").value;
										var email = document
												.getElementById("email_").value;
										var phone = document
												.getElementById("phone").value;
										var password = document
												.getElementById("password_").value;

										var sub1 = document
												.getElementById("sub1").value;
										var sub2 = document
												.getElementById("sub2").value;
										var sub3 = document
												.getElementById("sub3").value;
										var sub4 = document
												.getElementById("sub4").value;
										var sub5 = document
												.getElementById("sub5").value;

										if (sub1 == 'none') {
											sub1 = '';
										}
										if (sub2 == 'none') {
											sub2 = '';
										}
										if (sub3 == 'none') {
											sub3 = '';
										}
										if (sub4 == 'none') {
											sub4 = '';
										}
										if (sub5 == 'none') {
											sub5 = '';
										}

										var vars = '&fname=' + fname
												+ '&lname=' + lname + '&email='
												+ email + '&phone=' + phone
												+ '&password=' + password
												+ '&sub1=' + sub1 + '&sub2='
												+ sub2 + '&sub3=' + sub3
												+ '&sub4=' + sub4 + '&sub5='
												+ sub5;

										if (checkEmail2()) {
											$
													.ajax({
														type : "GET",
														url : "php/functions.php?action=signup"
																+ vars,
														success : function(ans) {
															alert(ans);
															if (ans === "created successfully.") {
																window.location
																		.assign("index.html");
															} else {
																alert("Cannot sign in")

															}

														}
													});
										}

									});

					function checkEmail() {
						//use a regex to check if the email is of a valid type e.g '@gmail.com'
						var ans = true;
						var email = document.getElementById("email");
						var pword = document.getElementById("password").value;
						var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						var empty = verify();

						if (empty) {
							alert('Please fill all fields');
							ans = false;
						}
						if ((!filter.test(email.value))) {
							alert('Please provide a valid email address');

							email.focus();
							ans = false;
						}

						return ans;
					}

					function checkEmail2() {
						// check email for password reset
						var ans = true;
						var email = document.getElementById("email_");
						var pword = document.getElementById("password_").value;
						var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						var empty = verify2();

						if (empty) {
							alert('Please fill all fields');
						}
						if ((!filter.test(email.value))) {
							alert('Please provide a valid email address');

							email.focus();
							ans = false;
						}

						return ans;
					}

					function verify() {
						// verify that the password field is not empty
						
						var pword = document.getElementById("password").value;

						if (pword == '') {
							return true;
						} else
							return false;

					}

					function verify2() {
						// verify that the password field is not empty for reset
						
						var pword = document.getElementById("password_").value;

						if (pword == '') {
							return true;
						} else
							return false;

					}



					$('#8')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													beforeSend : function() {
														$('#gifloader').show();

													},
													success : function(ans) {
														$('#gifloader').hide();

														var returnedData = JSON
																.parse(ans);
														var length = returnedData.length;

														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}

													}
												});

									});

					$('#7')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													beforeSend : function() {
														$('#gifloader').show();

													},
													success : function(ans) {

														$('#gifloader').hide();
														var returnedData = JSON
																.parse(ans);
														var length = returnedData.length;

														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}

													}
												});

									});

					$('#6')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													beforeSend : function() {
														$('#gifloader').show();

													},
													success : function(ans) {
														$('#gifloader').hide();

														var returnedData = JSON
																.parse(ans);
														var length = returnedData.length;

														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}
													}
												});

									});

					$('#5')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													beforeSend : function() {
														$('#gifloader').show();

													},
													success : function(ans) {
														$('#gifloader').hide();

														var returnedData = JSON
																.parse(ans);
														var length = returnedData.length;

														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}
													}
												});

									});

					$('#4')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													beforeSend : function() {
														$('#gifloader').show();

													},
													success : function(ans) {
														$('#gifloader').hide();

														var returnedData = JSON
																.parse(ans);
														var length = returnedData.length;

														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}

													}
												});

									});

					$('#3')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													success : function(ans) {

														$('#gifloader').hide();
														var returnedData = JSON
																.parse(ans);
														var length = returnedData.length;

														$("#ajax").empty();
														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}

													}
												});

									});

					$('#2')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													beforeSend : function() {
														$('#gifloader').show();

													},
													success : function(ans) {
														$('#gifloader').hide();

														var returnedData = JSON
																.parse(ans);

														var length = returnedData.length;

														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}

													}
												});

									});
					$('#1')
							.click(
									function() {
										var classnumber = this.id;
										// when this year is clicked the page dynamically populates the table with all the kids
										// in this year and links to pages to either view or edit said kids' report

										$
												.ajax({
													type : "GET",
													url : "php/functions.php?action=getstudentsbyyear&class="
															+ classnumber,
													beforeSend : function() {
														
														$('#gifloader').show();

													},
													success : function(ans) {

														$('#gifloader').hide();
														var returnedData = JSON
																.parse(ans);
														var length = returnedData.length;

														$("#tablebody").text(
																' ');

														for (var i = 0; i < length; i++) {
															$("#tablebody")
																	.append(
																			'<tr>'
																					+ '<td>'
																					+ returnedData[i].name
																					+ '</td>'
																					+ '<td><a href="view.html?name='
																					+ returnedData[i].name
																					+ '">View</a></td>'
																					+ '<td><a href="edit.html?name='
																					+ returnedData[i].name
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '&id_='
																					+ returnedData[i].id_
																					+ '">Edit</td>'
																					+ '</tr>');

														}

													}
												});

									});
					$('#resetpass')
							.click(
									function() {

										// take users email and password, confirm 2 passwords match and send to reset function on the server
										var email = document
												.getElementById("inputEmail").value;
										var pass1 = document
												.getElementById("inputPassword").value;
										var pass2 = document
												.getElementById("confirmPassword").value;

										if ((pass1 === pass2)
												&& (confirmemail())) {
											var vars = "&email=" + email
													+ "&password=" + pass2;

											$
													.ajax({
														type : "GET",
														url : "php/functions.php?action=resetpassword"
																+ vars,
														success : function(ans) {
															if (ans === 'Passcode reset successfully.') {
																alert(ans);
																window.location
																		.assign("index.html");
															}

															else {
																alert('ensure that is a valid email');
																window.location
																		.assign("post_forgotpw.html");
															}

														}
													});
										} else {
											alert("passwords do not match");
										}
									});

					function confirmemail() {
						// confirm the email address is a valid type i.e @yahoo/gmail.com
						var ans = true;
						var email = document.getElementById("inputEmail");
						var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

						if ((!filter.test(email.value))) {
							alert('Please provide a valid email address');

							email.focus();
							ans = false;
						}

						return ans;
					}
				});
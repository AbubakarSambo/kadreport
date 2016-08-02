$(document)
		.ready(
				function() {

					// the variables below are passed as a url parameter and hence are global to the view.js file
					// "name" belongs to student and "id" belongs to teacher accessing page
					var name = getUrlVars()["name"];
					var id = getUrlVars()["id_"];
					// var name = 'Sergio Aguero'

					/			

					$("#editpage").click(function(){
						//alert(id);
						// on the view page, this edit button links to the current students editable page based on 
						// the permissions of current signed in teacher
				        $("#editpage").attr("href", "edit.html?name="+name+"&id_="+id);
				    });
					
					
					$
							.ajax({
								type : "GET",
								url : "php/functions.php?action=getcomments2&name="
										+ name,
								success : function(answer) {
									// for each individual subject, this function checks the appropriate remark from the database
									// and puts a tick in the correct field
									var returnedData = JSON.parse(answer);
									
									//math
									if (returnedData[0].math === 'Attention Needed') {
										document.getElementById("math").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].math === 'Needs Improvement') {
										document.getElementById("math").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("math").previousElementSibling.innerHTML = "&#10003";
									}
									
									//science
									if (returnedData[0].science === 'Attention Needed') {
										document.getElementById("science").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].science === 'Needs Improvement') {
										document.getElementById("science").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("science").previousElementSibling.innerHTML = "&#10003";
									}
									
									//literacy
									if (returnedData[0].literacy === 'Attention Needed') {
										document.getElementById("literacy").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].literacy === 'Needs Improvement') {
										document.getElementById("literacy").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("literacy").previousElementSibling.innerHTML = "&#10003";
									}
									
									//ict
									if (returnedData[0].ict === 'Attention Needed') {
										document.getElementById("ict").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].ict === 'Needs Improvement') {
										document.getElementById("ict").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("ict").previousElementSibling.innerHTML = "&#10003";
									}
									
									//socialemotionaldevelopment
									if (returnedData[0].socialemotionaldevelopment === 'Attention Needed') {
										document.getElementById("socialemotionaldevelopment").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].socialemotionaldevelopment === 'Needs Improvement') {
										document.getElementById("socialemotionaldevelopment").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("socialemotionaldevelopment").previousElementSibling.innerHTML = "&#10003";
									}
									
									//studyskills
									if (returnedData[0].studyskills === 'Attention Needed') {
										document.getElementById("studyskills").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].studyskills === 'Needs Improvement') {
										document.getElementById("studyskills").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("studyskills").previousElementSibling.innerHTML = "&#10003";
									}
									
									//art
									if (returnedData[0].art === 'Attention Needed') {
										document.getElementById("art").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].art === 'Needs Improvement') {
										document.getElementById("art").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("art").previousElementSibling.innerHTML = "&#10003";
									}
									
									//socialstudies
									if (returnedData[0].socialstudies === 'Attention Needed') {
										document.getElementById("socialstudies").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].socialstudies === 'Needs Improvement') {
										document.getElementById("socialstudies").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("socialstudies").previousElementSibling.innerHTML = "&#10003";
									}
									
									//music
									if (returnedData[0].music === 'Attention Needed') {
										document.getElementById("music").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].music === 'Needs Improvement') {
										document.getElementById("music").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("music").previousElementSibling.innerHTML = "&#10003";
									}
									
									//pe
									if (returnedData[0].pe === 'Attention Needed') {
										document.getElementById("pe").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].pe === 'Needs Improvement') {
										document.getElementById("pe").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("pe").previousElementSibling.innerHTML = "&#10003";
									}
									
									//french
									if (returnedData[0].french === 'Attention Needed') {
										document.getElementById("french").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].french === 'Needs Improvement') {
										document.getElementById("french").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("french").previousElementSibling.innerHTML = "&#10003";
									}
									
									//physics
									if (returnedData[0].physics === 'Attention Needed') {
										document.getElementById("physics").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].physics === 'Needs Improvement') {
										document.getElementById("physics").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("physics").previousElementSibling.innerHTML = "&#10003";
									}
									
									//chemistry
									if (returnedData[0].chemistry === 'Attention Needed') {
										document.getElementById("chemistry").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].chemistry === 'Needs Improvement') {
										document.getElementById("chemistry").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("chemistry").previousElementSibling.innerHTML = "&#10003";
									}
									
									//biology
									if (returnedData[0].biology === 'Attention Needed') {
										document.getElementById("biology").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].biology === 'Needs Improvement') {
										document.getElementById("biology").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("biology").previousElementSibling.innerHTML = "&#10003";
									}
									
									//homeeconomics
									if (returnedData[0].homeeconomics === 'Attention Needed') {
										document.getElementById("homeeconomics").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].homeeconomics === 'Needs Improvement') {
										document.getElementById("homeeconomics").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("homeeconomics").previousElementSibling.innerHTML = "&#10003";
									}
									
									//civiceducation
									if (returnedData[0].civiceducation === 'Attention Needed') {
										document.getElementById("civiceducation").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].civiceducation === 'Needs Improvement') {
										document.getElementById("civiceducation").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("civiceducation").previousElementSibling.innerHTML = "&#10003";
									}
									
									//english
									if (returnedData[0].english === 'Attention Needed') {
										document.getElementById("english").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].english === 'Needs Improvement') {
										document.getElementById("english").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("english").previousElementSibling.innerHTML = "&#10003";
									}
									
									//englishliterature
									if (returnedData[0].englishliterature === 'Attention Needed') {
										document.getElementById("englishliterature").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].englishliterature === 'Needs Improvement') {
										document.getElementById("englishliterature").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("englishliterature").previousElementSibling.innerHTML = "&#10003";
									}
									
									//basictechnology
									if (returnedData[0].basictechnology === 'Attention Needed') {
										document.getElementById("basictechnology").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].basictechnology === 'Needs Improvement') {
										document.getElementById("basictechnology").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("basictechnology").previousElementSibling.innerHTML = "&#10003";
									}
									
									//geography
									if (returnedData[0].geography === 'Attention Needed') {
										document.getElementById("geography").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].geography === 'Needs Improvement') {
										document.getElementById("geography").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("geography").previousElementSibling.innerHTML = "&#10003";
									}
									
									//history
									if (returnedData[0].history === 'Attention Needed') {
										document.getElementById("history").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].history === 'Needs Improvement') {
										document.getElementById("history").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("history").previousElementSibling.innerHTML = "&#10003";
									}
									
									//businessstudies
									if (returnedData[0].businessstudies === 'Attention Needed') {
										document.getElementById("businessstudies").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].businessstudies === 'Needs Improvement') {
										document.getElementById("businessstudies").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("businessstudies").previousElementSibling.innerHTML = "&#10003";
									}
									
									//library
									if (returnedData[0].library === 'Attention Needed') {
										document.getElementById("library").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].library === 'Needs Improvement') {
										document.getElementById("library").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("library").previousElementSibling.innerHTML = "&#10003";
									}
									
									//personaldevelopment
									if (returnedData[0].personaldevelopment === 'Attention Needed') {
										document.getElementById("personaldevelopment").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].personaldevelopment === 'Needs Improvement') {
										document.getElementById("personaldevelopment").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("personaldevelopment").previousElementSibling.innerHTML = "&#10003";
									}
									
									//listeningandspeaking
									if (returnedData[0].listeningandspeaking === 'Attention Needed') {
										document.getElementById("listeningandspeaking").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].listeningandspeaking === 'Needs Improvement') {
										document.getElementById("listeningandspeaking").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("listeningandspeaking").previousElementSibling.innerHTML = "&#10003";
									}
									
									//writing
									if (returnedData[0].writing === 'Attention Needed') {
										document.getElementById("writing").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].writing === 'Needs Improvement') {
										document.getElementById("writing").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("writing").previousElementSibling.innerHTML = "&#10003";
									}
									
									//organizationalskills
									if (returnedData[0].organizationalskills === 'Attention Needed') {
										document.getElementById("organizationalskills").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].organizationalskills === 'Needs Improvement') {
										document.getElementById("organizationalskills").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("organizationalskills").previousElementSibling.innerHTML = "&#10003";
									}
									
									//citizenship
									if (returnedData[0].citizenship === 'Attention Needed') {
										document.getElementById("citizenship").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else if (returnedData[0].citizenship === 'Needs Improvement') {
										document.getElementById("citizenship").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
									} else {
										document.getElementById("citizenship").previousElementSibling.innerHTML = "&#10003";
									}
									
									
									
									
									
									
									
									
									
									

								}
							});

					$
							.ajax({
								type : "GET",
								url : "php/functions.php?action=getcomments&name="
										+ name,
								success : function(ans) {
									// here we send the name of the student whose page is being viewed and 
									// get that students comments for all subjects.
									// but this depends on if said student is registered in the class whose comments is being received
									
									// alert("brah");
									var returnedData = JSON.parse(ans);
									var length = returnedData.length;

									var class_ = returnedData[0].class_;
									
									$("#homepage").click(function(){
										//alert(id);
								       $("#homepage").attr("href", "dashb.php");
								        $(class_).click();
								    });
									

									if (class_ === '1') {

										document.getElementById("physics").parentElement.style.display = "none";
										document.getElementById("chemistry").parentElement.style.display = "none";
										document.getElementById("biology").parentElement.style.display = "none";
										document
												.getElementById("homeeconomics").parentElement.style.display = "none";
										document
												.getElementById("civiceducation").parentElement.style.display = "none";
										document.getElementById("english").parentElement.style.display = "none";
										document
												.getElementById("englishliterature").parentElement.style.display = "none";
										document.getElementById("geography").parentElement.style.display = "none";
										document.getElementById("library").parentElement.style.display = "none";
										document
												.getElementById("businessstudies").parentElement.style.display = "none";
										document.getElementById("history").parentElement.style.display = "none";
										document
												.getElementById("basictechnology").parentElement.style.display = "none";
										document
												.getElementById("personaldevelopment").parentElement.style.display = "none";
										document
												.getElementById("socialemotionaldevelopment").parentElement.style.display = "none";
										document.getElementById("studyskills").parentElement.style.display = "none";

									}

									if (class_ === '2') {

										document.getElementById("physics").parentElement.style.display = "none";
										document.getElementById("chemistry").parentElement.style.display = "none";
										document.getElementById("biology").parentElement.style.display = "none";
										document.getElementById("music").parentElement.style.display = "none";
										document
												.getElementById("homeeconomics").parentElement.style.display = "none";
										document
												.getElementById("civiceducation").parentElement.style.display = "none";
										document.getElementById("english").parentElement.style.display = "none";
										document
												.getElementById("englishliterature").parentElement.style.display = "none";
										document.getElementById("geography").parentElement.style.display = "none";
										document.getElementById("library").parentElement.style.display = "none";
										document
												.getElementById("businessstudies").parentElement.style.display = "none";
										document.getElementById("history").parentElement.style.display = "none";
										document
												.getElementById("basictechnology").parentElement.style.display = "none";
										document
												.getElementById("personaldevelopment").parentElement.style.display = "none";
										document
												.getElementById("listeningandspeaking").parentElement.style.display = "none";
										document.getElementById("writing").parentElement.style.display = "none";
										document
												.getElementById("organizationalskills").parentElement.style.display = "none";
										document.getElementById("citizenship").parentElement.style.display = "none";
									}

									if ((class_ === '3') || (class_ === '4')
											|| (class_ === '5')
											|| (class_ === '6')) {

										document.getElementById("physics").parentElement.style.display = "none";
										document.getElementById("chemistry").parentElement.style.display = "none";
										document.getElementById("biology").parentElement.style.display = "none";
										document
												.getElementById("homeeconomics").parentElement.style.display = "none";
										document
												.getElementById("civiceducation").parentElement.style.display = "none";
										document.getElementById("english").parentElement.style.display = "none";
										document
												.getElementById("englishliterature").parentElement.style.display = "none";
										document.getElementById("geography").parentElement.style.display = "none";
										document.getElementById("library").parentElement.style.display = "none";
										document
												.getElementById("businessstudies").parentElement.style.display = "none";
										document.getElementById("history").parentElement.style.display = "none";
										document
												.getElementById("basictechnology").parentElement.style.display = "none";
										document
												.getElementById("socialemotionaldevelopment").parentElement.style.display = "none";
										document.getElementById("studyskills").parentElement.style.display = "none";
										document
												.getElementById("personaldevelopment").parentElement.style.display = "none";
										document
												.getElementById("listeningandspeaking").parentElement.style.display = "none";
										document.getElementById("writing").parentElement.style.display = "none";
										document
												.getElementById("organizationalskills").parentElement.style.display = "none";
										document.getElementById("citizenship").parentElement.style.display = "none";

									}
									if ((class_ === '7') || (class_ === '8')) {
										document.getElementById("science").parentElement.style.display = "none";
										document.getElementById("literacy").parentElement.style.display = "none";
										document
												.getElementById("socialemotionaldevelopment").parentElement.style.display = "none";
										document
												.getElementById("listeningandspeaking").parentElement.style.display = "none";
										document.getElementById("writing").parentElement.style.display = "none";
										document
												.getElementById("organizationalskills").parentElement.style.display = "none";
										document.getElementById("citizenship").parentElement.style.display = "none";

									}

									$("#ajax").empty();

									$("#studentname").append(
											returnedData[0].name);
									$("#studentyear").append(
											returnedData[0].class_);
									$("#math").append(returnedData[0].math);
									$("#literacy").append(
											returnedData[0].literacy);
									$("#socialstudies").append(
											returnedData[0].socialstudies);
									$("#science").append(
											returnedData[0].science);
									$("#french").append(returnedData[0].french);
									$("#music").append(returnedData[0].music);
									$("#art").append(returnedData[0].art);
									$("#pe").append(returnedData[0].pe);
									$("#ict").append(returnedData[0].ict);
									$("#socialemotionaldevelopment")
											.append(
													returnedData[0].socialemotionaldevelopment);
									$("#studyskills").append(
											returnedData[0].studyskills);
									$("#physics").append(
											returnedData[0].physics);
									$("#chemistry").append(
											returnedData[0].chemistry);
									$("#biology").append(
											returnedData[0].biology);
									$("#homeeconomics").append(
											returnedData[0].homeeconomics);
									$("#civiceducation").append(
											returnedData[0].civiceducation);
									$("#english").append(
											returnedData[0].english);
									$("#englishliterature").append(
											returnedData[0].englishliterature);
									$("#basictechnology").append(
											returnedData[0].basictechnology);
									$("#geography").append(
											returnedData[0].geography);
									$("#history").append(
											returnedData[0].history);
									$("#businessstudies").append(
											returnedData[0].businessstudies);
									$("#library").append(
											returnedData[0].library);

								}
							});

					function getUrlVars() {
						// obtains parameters present in the url.
						var vars = {};
						var parts = window.location.href.replace(
								/[?&]+([^=&]+)=([^&]*)/gi, function(m, key,
										value) {
									vars[key] = value;
								});
						return vars;
					}

				});

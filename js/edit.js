$(document).ready(
		function() {

			var name = getUrlVars()["name"];
			var id = getUrlVars()["id_"];
			// var name = 'Sergio Aguero'
			$.ajax({
				type : "GET",
				url : "php/functions.php?action=getcomments&name=" + name,
				success : function(ans) {
					// alert("brah");
					var returnedData = JSON.parse(ans);
					var length = returnedData.length;
					

					$("#studentname").append(returnedData[0].name);
					$("#studentyear").append(returnedData[0].class_);

					

				}
			});

			function getUrlVars() {
				var vars = {};
				var parts = window.location.href.replace(
						/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
							vars[key] = value;
						});
				return vars;
			}

			$
					.ajax({
						type : "GET",
						url : "php/functions.php?action=getteacher",
						success : function(ans) {
							var returnedData = JSON.parse(ans);
							var length = returnedData.length;

							$("#teachername").append(
									'    ' + returnedData[0].fname + '    ');
						$("#teachername").append(returnedData[0].lname);

							var subjects = [ returnedData[0].subject1,
									returnedData[0].subject2,
									returnedData[0].subject3,
									returnedData[0].subject4,
									returnedData[0].subject5 ];
							if (id == 7) {
								
								$('#viewer').css('display','block');
								$('#principal').css('display','block');
								$('#commprn').css('display','block');
								
								
								$
								.ajax({
									type : "GET",
									url : "php/functions.php?action=getcomments2&name="
											+ name,
									success : function(answer) {
										var returnedData = JSON.parse(answer);
										// alert(JSON.parse(answer)[0].math);
										//math
										if (returnedData[0].math === 'Attention Needed') {
											document.getElementById("math__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].math === 'Needs Improvement') {
											document.getElementById("math__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("math__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//science
										if (returnedData[0].science === 'Attention Needed') {
											document.getElementById("science__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].science === 'Needs Improvement') {
											document.getElementById("science__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("science__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//literacy
										if (returnedData[0].literacy === 'Attention Needed') {
											document.getElementById("literacy__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].literacy === 'Needs Improvement') {
											document.getElementById("literacy__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("literacy__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//ict
										if (returnedData[0].ict === 'Attention Needed') {
											document.getElementById("ict__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].ict === 'Needs Improvement') {
											document.getElementById("ict__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("ict__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//socialemotionaldevelopment
										if (returnedData[0].socialemotionaldevelopment === 'Attention Needed') {
											document.getElementById("socialemotionaldevelopment__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].socialemotionaldevelopment === 'Needs Improvement') {
											document.getElementById("socialemotionaldevelopment__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("socialemotionaldevelopment__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//studyskills
										if (returnedData[0].studyskills === 'Attention Needed') {
											document.getElementById("studyskills__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].studyskills === 'Needs Improvement') {
											document.getElementById("studyskills__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("studyskills__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//art
										if (returnedData[0].art === 'Attention Needed') {
											document.getElementById("art__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].art === 'Needs Improvement') {
											document.getElementById("art__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("art__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//socialstudies
										if (returnedData[0].socialstudies === 'Attention Needed') {
											document.getElementById("socialstudies__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].socialstudies === 'Needs Improvement') {
											document.getElementById("socialstudies__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("socialstudies__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//music
										if (returnedData[0].music === 'Attention Needed') {
											document.getElementById("music__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].music === 'Needs Improvement') {
											document.getElementById("music__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("music__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//pe
										if (returnedData[0].pe === 'Attention Needed') {
											document.getElementById("pe__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].pe === 'Needs Improvement') {
											document.getElementById("pe__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("pe__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//french
										if (returnedData[0].french === 'Attention Needed') {
											document.getElementById("french__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].french === 'Needs Improvement') {
											document.getElementById("french__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("french__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//physics
										if (returnedData[0].physics === 'Attention Needed') {
											document.getElementById("physics__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].physics === 'Needs Improvement') {
											document.getElementById("physics__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("physics__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//chemistry
										if (returnedData[0].chemistry === 'Attention Needed') {
											document.getElementById("chemistry__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].chemistry === 'Needs Improvement') {
											document.getElementById("chemistry__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("chemistry__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//biology
										if (returnedData[0].biology === 'Attention Needed') {
											document.getElementById("biology__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].biology === 'Needs Improvement') {
											document.getElementById("biology__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("biology__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//homeeconomics
										if (returnedData[0].homeeconomics === 'Attention Needed') {
											document.getElementById("homeeconomics__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].homeeconomics === 'Needs Improvement') {
											document.getElementById("homeeconomics__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("homeeconomics__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//civiceducation
										if (returnedData[0].civiceducation === 'Attention Needed') {
											document.getElementById("civiceducation__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].civiceducation === 'Needs Improvement') {
											document.getElementById("civiceducation__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("civiceducation__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//english
										if (returnedData[0].english === 'Attention Needed') {
											document.getElementById("english__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].english === 'Needs Improvement') {
											document.getElementById("english__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("english__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//englishliterature
										if (returnedData[0].englishliterature === 'Attention Needed') {
											document.getElementById("englishliterature__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].englishliterature === 'Needs Improvement') {
											document.getElementById("englishliterature__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("englishliterature__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//basictechnology
										if (returnedData[0].basictechnology === 'Attention Needed') {
											document.getElementById("basictechnology__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].basictechnology === 'Needs Improvement') {
											document.getElementById("basictechnology__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("basictechnology__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//geography
										if (returnedData[0].geography === 'Attention Needed') {
											document.getElementById("geography__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].geography === 'Needs Improvement') {
											document.getElementById("geography__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("geography__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//history
										if (returnedData[0].history === 'Attention Needed') {
											document.getElementById("history__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].history === 'Needs Improvement') {
											document.getElementById("history__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("history__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//businessstudies
										if (returnedData[0].businessstudies === 'Attention Needed') {
											document.getElementById("businessstudies__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].businessstudies === 'Needs Improvement') {
											document.getElementById("businessstudies__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("businessstudies__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//library
										if (returnedData[0].library === 'Attention Needed') {
											document.getElementById("library__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].library === 'Needs Improvement') {
											document.getElementById("library__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("library__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//personaldevelopment
										if (returnedData[0].personaldevelopment === 'Attention Needed') {
											document.getElementById("personaldevelopment__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].personaldevelopment === 'Needs Improvement') {
											document.getElementById("personaldevelopment__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("personaldevelopment__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//listeningandspeaking
										if (returnedData[0].listeningandspeaking === 'Attention Needed') {
											document.getElementById("listeningandspeaking__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].listeningandspeaking === 'Needs Improvement') {
											document.getElementById("listeningandspeaking__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("listeningandspeaking__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//writing
										if (returnedData[0].writing === 'Attention Needed') {
											document.getElementById("writing__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].writing === 'Needs Improvement') {
											document.getElementById("writing__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("writing__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//organizationalskills
										if (returnedData[0].organizationalskills === 'Attention Needed') {
											document.getElementById("organizationalskills__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].organizationalskills === 'Needs Improvement') {
											document.getElementById("organizationalskills__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("organizationalskills__").previousElementSibling.innerHTML = "&#10003";
										}
										
										//citizenship
										if (returnedData[0].citizenship === 'Attention Needed') {
											document.getElementById("citizenship__").previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else if (returnedData[0].citizenship === 'Needs Improvement') {
											document.getElementById("citizenship__").previousElementSibling.previousElementSibling.innerHTML = "&#10003";
										} else {
											document.getElementById("citizenship__").previousElementSibling.innerHTML = "&#10003";
										}
																			
									}
								});
								
								$
								.ajax({
									type : "GET",
									url : "php/functions.php?action=getcomments&name="
											+ name,
									success : function(ans) {
										// alert("brah");
										var returnedData = JSON.parse(ans);
										var length = returnedData.length;

										var class_ = returnedData[0].class_;

										if (class_ === '1') {

											document.getElementById("physics__").parentElement.style.display = "none";
											document.getElementById("chemistry__").parentElement.style.display = "none";
											document.getElementById("biology__").parentElement.style.display = "none";
											document
													.getElementById("homeeconomics__").parentElement.style.display = "none";
											document
													.getElementById("civiceducation__").parentElement.style.display = "none";
											document.getElementById("english__").parentElement.style.display = "none";
											document
													.getElementById("englishliterature__").parentElement.style.display = "none";
											document.getElementById("geography__").parentElement.style.display = "none";
											document.getElementById("library__").parentElement.style.display = "none";
											document
													.getElementById("businessstudies__").parentElement.style.display = "none";
											document.getElementById("history__").parentElement.style.display = "none";
											document
													.getElementById("basictechnology__").parentElement.style.display = "none";
											document
													.getElementById("personaldevelopment__").parentElement.style.display = "none";
											document
													.getElementById("socialemotionaldevelopment__").parentElement.style.display = "none";
											document.getElementById("studyskills__").parentElement.style.display = "none";

										}

										if (class_ === '2') {

											document.getElementById("physics__").parentElement.style.display = "none";
											document.getElementById("chemistry__").parentElement.style.display = "none";
											document.getElementById("biology__").parentElement.style.display = "none";
											document.getElementById("music__").parentElement.style.display = "none";
											document
													.getElementById("homeeconomics__").parentElement.style.display = "none";
											document
													.getElementById("civiceducation__").parentElement.style.display = "none";
											document.getElementById("english__").parentElement.style.display = "none";
											document
													.getElementById("englishliterature__").parentElement.style.display = "none";
											document.getElementById("geography__").parentElement.style.display = "none";
											document.getElementById("library__").parentElement.style.display = "none";
											document
													.getElementById("businessstudies__").parentElement.style.display = "none";
											document.getElementById("history__").parentElement.style.display = "none";
											document
													.getElementById("basictechnology__").parentElement.style.display = "none";
											document
													.getElementById("personaldevelopment__").parentElement.style.display = "none";
											document
													.getElementById("listeningandspeaking__").parentElement.style.display = "none";
											document.getElementById("writing__").parentElement.style.display = "none";
											document
													.getElementById("organizationalskills__").parentElement.style.display = "none";
											document.getElementById("citizenship__").parentElement.style.display = "none";
										}

										if ((class_ === '3') || (class_ === '4')
												|| (class_ === '5')
												|| (class_ === '6')) {

											document.getElementById("physics__").parentElement.style.display = "none";
											document.getElementById("chemistry__").parentElement.style.display = "none";
											document.getElementById("biology__").parentElement.style.display = "none";
											document
													.getElementById("homeeconomics__").parentElement.style.display = "none";
											document
													.getElementById("civiceducation__").parentElement.style.display = "none";
											document.getElementById("english__").parentElement.style.display = "none";
											document
													.getElementById("englishliterature__").parentElement.style.display = "none";
											document.getElementById("geography__").parentElement.style.display = "none";
											document.getElementById("library__").parentElement.style.display = "none";
											document
													.getElementById("businessstudies__").parentElement.style.display = "none";
											document.getElementById("history__").parentElement.style.display = "none";
											document
													.getElementById("basictechnology__").parentElement.style.display = "none";
											document
													.getElementById("socialemotionaldevelopment__").parentElement.style.display = "none";
											document.getElementById("studyskills__").parentElement.style.display = "none";
											document
													.getElementById("personaldevelopment__").parentElement.style.display = "none";
											document
													.getElementById("listeningandspeaking__").parentElement.style.display = "none";
											document.getElementById("writing__").parentElement.style.display = "none";
											document
													.getElementById("organizationalskills__").parentElement.style.display = "none";
											document.getElementById("citizenship__").parentElement.style.display = "none";

										}
										if ((class_ === '7') || (class_ === '8')) {
											document.getElementById("science__").parentElement.style.display = "none";
											document.getElementById("literacy__").parentElement.style.display = "none";
											document
													.getElementById("socialemotionaldevelopment__").parentElement.style.display = "none";
											document
													.getElementById("listeningandspeaking__").parentElement.style.display = "none";
											document.getElementById("writing__").parentElement.style.display = "none";
											document
													.getElementById("organizationalskills__").parentElement.style.display = "none";
											document.getElementById("citizenship__").parentElement.style.display = "none";

										}

										$("#ajax").empty();

										
										$("#math__").append(returnedData[0].math);
										$("#literacy__").append(
												returnedData[0].literacy);
										$("#socialstudies__").append(
												returnedData[0].socialstudies);
										$("#science__").append(
												returnedData[0].science);
										$("#french__").append(returnedData[0].french);
										$("#music__").append(returnedData[0].music);
										$("#art__").append(returnedData[0].art);
										$("#pe__").append(returnedData[0].pe);
										$("#ict__").append(returnedData[0].ict);
										$("#socialemotionaldevelopment__")
												.append(
														returnedData[0].socialemotionaldevelopment);
										$("#studyskills__").append(
												returnedData[0].studyskills);
										$("#physics__").append(
												returnedData[0].physics);
										$("#chemistry__").append(
												returnedData[0].chemistry);
										$("#biology__").append(
												returnedData[0].biology);
										$("#homeeconomics__").append(
												returnedData[0].homeeconomics);
										$("#civiceducation__").append(
												returnedData[0].civiceducation);
										$("#english__").append(
												returnedData[0].english);
										$("#englishliterature__").append(
												returnedData[0].englishliterature);
										$("#basictechnology__").append(
												returnedData[0].basictechnology);
										$("#geography__").append(
												returnedData[0].geography);
										$("#history__").append(
												returnedData[0].history);
										$("#businessstudies__").append(
												returnedData[0].businessstudies);
										$("#library__").append(
												returnedData[0].library);
										$("#commprn").append(
												returnedData[0].principal);

									}
								});
								
							} else {
								$('.report_card').each(function(idx, el) {
									for (var i = 0; i < 5; i++) {
										if (this.id === subjects[i]) {
											this.style.display = "block";
										}
									}
								})
							}

						}
					});

		});

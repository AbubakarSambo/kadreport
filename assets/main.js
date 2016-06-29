$(document).ready(function(){
    $(".subject_title").click(function(){
		// alert('clicked');
        // $(".subject_content").slideToggle("slow");
		
		$(this).next('.subject_content').slideToggle();
    });
});
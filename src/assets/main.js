$.ajax({
    url: 'https://www.codeschool.com/users/najibk.json',
    dataType: 'jsonp',
    success: function(response) {
		//# = tags, . = classes
		for (x=0; x<response.courses.completed.length; x++) {
			//my quotations might be a lil fuckd
			var newDiv = $('<div class="course"></div>');
			var newH = $('<h3>'+ response.courses.completed[x].title +'</h3>');
			var newImg = $('<img src="' + response.courses.completed[x].badge + '"></img>');
			var newA = $('<a href="' + response.courses.completed[x].url + '" target="_blank" class="btn btn-primary">See Course</a>');
			$('#badges').append(newDiv);
			$('#badges').children('.course').last().append(newH);
			$('#badges').children('.course').last().append(newImg);
			$('#badges').children('.course').last().append(newA);
		}
    }
  });
angular.module('flapperNews').controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
	$scope.test = "Hello World!";

	$scope.posts = posts.posts;
	$scope.addPost = function() {
		if (!$scope.title || $scope.title === '') { return; }
		posts.create({
			title: $scope.title,
			link: $scope.link
		});

/*
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link, 
			upvotes: 0,
			comments: [
				{author: 'Joe', body: 'Cool!', upvotes: 0},
				{author: 'Foe', body: 'Bad Post!', upvotes: 2}
			],
		});
*/
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		posts.upvote(post);
	}
}])
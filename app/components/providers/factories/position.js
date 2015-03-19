'use strict'

angular.module("goRemote")
	.factory('PositionFactory', function PositionFactory(){
		return {
			get: function() {
				return [{
					'id': 1,
					'name': "Javascript Developer",
					'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis quidem tempora provident, non aliquam cumque, perferendis, fugit necessitatibus unde eaque sed. Modi laudantium dolorem temporibus, error voluptates quasi culpa.",
					'date': moment(),
					'labels': [
						'javascript',
						'front-end',
						'CSS'
					]
				},{
					'id': 2,
					'name': "Front-end Developer",
					'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis quidem tempora provident, non aliquam cumque, perferendis, fugit necessitatibus unde eaque sed. Modi laudantium dolorem temporibus, error voluptates quasi culpa.",
					'date': moment(),
					'labels': [
						'CSS',
						'Mobile Design',
						'IOS'
					]
				},{
					'id': 3,
					'name': "Q&A Assurance",
					'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis quidem tempora provident, non aliquam cumque, perferendis, fugit necessitatibus unde eaque sed. Modi laudantium dolorem temporibus, error voluptates quasi culpa.",
					'date': moment(),
					'labels': [
						'Scheme',
						'AngularJS',
						'Famo.us'
					]
				},{
					'id': 4,
					'name': "Back-end Developer",
					'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis quidem tempora provident, non aliquam cumque, perferendis, fugit necessitatibus unde eaque sed. Modi laudantium dolorem temporibus, error voluptates quasi culpa.",
					'date': moment(),
					'labels': [
						'javascript',
						'front-end',
						'css'
					]
				},{
					'id': 5,
					'name': "Social Media",
					'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis quidem tempora provident, non aliquam cumque, perferendis, fugit necessitatibus unde eaque sed. Modi laudantium dolorem temporibus, error voluptates quasi culpa.",
					'date': moment(),
					'labels': [
						'javascript',
						'front-end',
						'css'
					]
				},{
					'id': 6,
					'name': "C++ Senior Programmer",
					'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis quidem tempora provident, non aliquam cumque, perferendis, fugit necessitatibus unde eaque sed. Modi laudantium dolorem temporibus, error voluptates quasi culpa.",
					'date': moment(),
					'labels': [
						'javascript',
						'front-end',
						'css'
					]
				},]
			},

			getById: function() {
				return {
					'id': 1,
					'name': "Javascript Developer",
					'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure blanditiis quidem tempora provident, non aliquam cumque, perferendis, fugit necessitatibus unde eaque sed. Modi laudantium dolorem temporibus, error voluptates quasi culpa.",
				};
			},
		};
	});
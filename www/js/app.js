angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('starterCtrl', function($scope){
  $scope.dataName = [
  {no: 1, nama: 'Prawito', tinggi: 171},
  {no: 2, nama: 'Hudoro', tinggi: 169},
  {no: 3, nama: 'Praw', tinggi: 167},
  {no: 4, nama: 'Wito', tinggi: 165},
  {no: 5, nama: 'Doro', tinggi: 163},
  {no: 6, nama: 'Aa Ito', tinggi: 161},
  {no: 7, nama: 'Ito', tinggi: 159},
  {no: 8, nama: 'Ndoro', tinggi: 157},
  {no: 9, nama: 'Prawitohudoro', tinggi: 155},
  {no: 10, nama: 'Hudoroprawito', tinggi: 153},
  ]
})

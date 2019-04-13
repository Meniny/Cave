angular.module('ionicApp', ['ionic'])

  .run(function($ionicPlatform, $rootScope, $ionicActionSheet) {

    $rootScope.showActionSheet = function() {
      console.log("showAS");
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          {
            text: '打电话'
          },
          {
            text: '发短信'
          },
          {
            text: '<b>Facetime</b> 视频'
          },
          {
            text: '发送 <b>QQ</b> 消息'
          },
          {
            text: '发送 <b>TIM</b> 消息'
          },
          {
            text: '发送 <b>WeChat</b> 消息'
          },
        ],
        // destructiveText: 'Delete',
        titleText: '选择一个联系方式',
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          switch (index) {
            case 0:
              window.location.replace('telprompt:13035823962')
              break;
            case 1:
              window.location.replace('sms:13035823962')
              break;
            case 2:
              window.location.replace('facetime:13035823962')
              break;
            case 3:
              window.location.replace('mqq://im/chat?chat_type=wpa&uin=2596152096&version=1&src_type=web')
              break;
            case 4:
              window.location.replace('timapi://im/chat?chat_type=wpa&uin=2596152096&version=1&src_type=web')
              break;
            case 5:
              window.location.replace('weixin://')
              break;
            default: break;
          }
          return true;
        }
      });
    };
  })

  .controller('RootCtrl', function($scope) {
    $scope.onControllerChanged = function(oldController, oldIndex, newController, newIndex) {
      console.log('Controller changed', oldController, oldIndex, newController, newIndex);
      console.log(arguments);
    };
  })

  .controller('HomeCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {

  });

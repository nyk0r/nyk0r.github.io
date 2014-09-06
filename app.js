angular.module('cv', []).
   controller('app', ['$scope', function ($scope) {
      var localization = {
         contact: {
            title: { en: 'Contact Information', ru: '' },
            name: { en: 'Full Name', ru: '' },
            dateOfBirth: { en: 'Date of Birth', ru: '' },
            email: { en: 'E-Mail', ru: 'E-Mail' },
            skype: { en: 'Skype', skype: 'Skype' }
         },

         education: {
            title: { en: 'Education', ru: '' }
         },

         spokenLanguages: {
            title: { en: 'Spoken Languages', ru: 'Знания Языков' },
            level: {
               1: { en: 'Begginer', ru: '' },
               2: { en: 'Intermediate', ru: '' },
               3: { en: 'Upper intermediate', ru: '' },
               4: { en: 'Fluent', ru: '' },
               5: { en: 'Native', ru: '' }
            }
         },

         technologies: {
            title: { en: 'Known Technologies', ru: '' }
         },

         experience: {
            title: {en: 'Working Experience', ru: ''},
            company: {},
            position: {},
            technology: {}
         }
      }

      $scope.locale = 'en',
      $scope.data = data;

      $scope.i18n = function (path) {
         path += '.' + $scope.locale;
         var parts = path.split('.'),
             value = localization,
             part;

         while (part = parts.shift()) {
            value = value[part];
         }

         return value;
      }

      $scope.getSpokenLanguageLevelTitle = function (level) {
         return $scope.i18n('spokenLanguages.level.' + level);
      }
   }]);

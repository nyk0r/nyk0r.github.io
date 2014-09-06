angular.module('cv', []).
   config(['$compileProvider', function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|skype):/);
   }]).
   controller('app', ['$scope', function ($scope) {
      var localization = {
         contact: {
            title: { en: 'Contact Information', ru: 'Контакная информация' },
            name: { en: 'Full Name', ru: 'Полное имя' },
            dateOfBirth: { en: 'Date of Birth', ru: 'Дата рождения' },
            email: { en: 'E-Mail', ru: 'E-Mail' },
            skype: { en: 'Skype', ru: 'Skype' },
            github: { en: 'Github', ru: 'Github' }
         },

         education: {
            title: { en: 'Education', ru: '' }
         },

         spokenLanguages: {
            title: { en: 'Spoken Languages', ru: 'Знания Языков' },
            level: {
               1: { en: 'Begginer', ru: 'Начинающий' },
               2: { en: 'Intermediate', ru: 'Средне' },
               3: { en: 'Upper intermediate', ru: 'Выше среднего' },
               4: { en: 'Fluent', ru: 'Свободно' },
               5: { en: 'Native', ru: 'Родной' }
            }
         },

         technologies: {
            title: { en: 'Technologies and Frameworks', ru: 'Технологии и Фреймворки' }
         },

         experience: {
            title: {en: 'Working Experience', ru: 'Опыт Работы'},
            company: {},
            position: {},
            technology: {}
         }
      };

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

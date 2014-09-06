var data = {
   contact: {
      name: 'Tsalik Mozgunov',
      name_ru: 'Мозгунов Цалик',
      dateOfBirth: new Date('1988-07-12'),
      email: 'mozgunov@gmail.com',
      skype: 'nyk0r_',
      github: {
         name: 'nyk0r',
         url: 'https://github.com/nyk0r/'
      }
   },
   education: [
      {
         institution: 'National University of Uzbekistan',
         institution_ru: 'Национальный Университет Узбекистана',
         degree: 'Bachelor of Computer Science',
         degree_ru: 'Бакалавр информационных технологий',
         start: '2005',
         end: '2009'
      }
   ],
   spokenLanguages: [
      {
         name: 'Russion',
         name_ru: 'Русский',
         level: 5
      },
      {
         name: 'English',
         name_ru: 'Английский',
         level: 4
      },
      {
         name: 'Hebrew',
         name_ru: 'Иврит',
         level: 2
      }
   ],
   technologies: [
      {
         category: 'Operating Systmes',
         category_ru: 'Операционные Системы',
         items: [
            {
               name: 'Windows',
               versions: ['98', 'Me', 'XP', '7', '8'],
               level: 5
            },
            {
               name: 'MacOS X',
               versions: ['10.6.x', '10.8.x'],
               level: 5
            },
            {
               name: 'Linux (Ubuntu)',
               versions: ['8', '9', '10'],
               level: 4
            }
         ]
      },
      {
         category: 'Languages',
         category_ru: 'Языки',
         items: [
            {
               name: 'JavaScript',
               versions: ['1.5', '1.6', '1.8.x'],
               level: 5
            },
            {
               name: 'CSS',
               versions: ['2.x', '3'],
               level: 5
            },
            {
               name: 'LESS',
               versions: ['1.4', '1.5', '1.7'],
               level: 5
            },
            {
               name: 'HTML',
               versions: ['3.2', '4.01', '5'],
               level: 5
            },
            {
               name: 'C#',
               versions: ['2', '3.5', '4'],
               level: 4
            },
            {
               name: 'Python',
               versions: ['2.x'],
               level: 3
            },
            {
               name: 'PHP',
               versions: ['4.x'],
               level: 3
            },
            {
               name: 'Objective-C',
               versions: [],
               level: 2
            }
         ]
      },
      {
         category: 'Frameworks',
         category_ru: 'Фреймворки',
         items: [
            {
               name: 'KendoUI',
               versions: ['2013 Q3', '2013 Q4', '2014 Q1'],
               level: 5
            },
            {
               name: 'jQuery',
               versions: ['1.x', '2.x'],
               level: 5
            },
            {
               name: 'AngularJS',
               versions: ['1.2.x', '1.3.x'],
               level: 4
            },
            {
               name: 'ExtJS',
               versions: ['3.x', '4.x'],
               level: 3
            },
            {
               name: '.NET Framework',
               versions: ['2', '3.5', '4', '5'],
               level: 3
            }
         ]
      },
      {
         category: 'Data Bases',
         category_ru: 'Базы Данных',
         items: [
            {
               name: 'MS SQL Server',
               versions: ['2005', '2008', '2012'],
               level: 3
            },
            {
               name: 'Postgre SQL',
               versions: ['8.3'],
               level: 3
            },
            {
               name: 'SQLite',
               versions: ['3.x'],
               level: 3
            }
         ]
      },
      {
         category: 'IDEs',
         category_ru: 'Среды Разработки',
         items: [
            {
               name: 'Visual Studio',
               versions: ['2005', '2008', '2010', '2012'],
               level: 4
            },
            {
               name: 'WebStorm',
               versions: ['6', '7'],
               level: 4
            }
         ]
      },
      {
         category: 'Tools',
         category_ru: 'Инструменты',
         items: [
            {
               name: 'SVN',
               versions: ['1.7.x'],
               level: 3
            },
            {
               name: 'Git',
               versions: ['1.6.x', '1.7.x'],
               level: 5
            }
         ]
      }
   ],
   experience: [
      {
         company: 'Access Softek',
         site: 'http://accesssoftek.com/',
         position: 'Seniore front-end developer',
         position_ru: 'Старший Front-end разработчик',
         start: new Date('2013-04-01'),
         end: null,
         projects: {
            name: 'Orpheus',
            description: '',
            description_ru: '',
            technologies: [
               {
                  name: 'KendoUI',
                  version: ''
               },
               {
                  name: 'jQuery',
                  version: ''
               },
               {
                  name: 'Orchard CMS',
                  version: ''
               },
               {
                  name: 'Asp.NET MVC',
                  version: ''
               },
               {
                  name: '.NET',
                  version: '5.0'
               }
            ]
         }
      },

      {
         company: 'Murano Software',
         site: 'https://muranosoft.com',
         position: 'Front-end developer',
         position_ru: 'Front-end разработчик',
         start: new Date('2012-06-01'),
         end: new Date('2013-04-01'),
         projects: [
            {
               name: 'Wrike',
               site: 'http://wrike.com',
               description: 'SaaS project management and collaboration portal.',
               description_ru: 'Портал для управления проектами и взаимодействия работников.',
               technologies: [
                  {
                     name: 'JavaScript',
                     version: '1.5'
                  },
                  {
                     name: 'HTML',
                     version: '4.01'
                  },
                  {
                     name: 'CSS',
                     version: '2.1'
                  },
                  {
                     name: 'ExtJS',
                     version: '3.4'
                  }
               ]
            },
            {
               name: 'Social media curation tool',
               name_ru: 'Инструмент для курирования социальных медиа',
               site: 'http://publishthis.com/',
               decription: 'A tool to discover and curate social media content concerning a person\'s organisation.',
               description_ru: 'Инструмент для обнаружения и отслеживания постов в социальных медиа, относящихся к заинтересованной организации.',
               technologies: [
                  {
                     name: 'JavaScript',
                     version: '1.5'
                  },
                  {
                     name: 'HTML',
                     version: '4.01'
                  },
                  {
                     name: 'CSS',
                     version: '2.1'
                  },
                  {
                     name: 'ExtJS',
                     version: '4.07'
                  }
               ]
            }
         ]
      },

      {
         company: 'Freelance',
         site: '',
         position: 'Developer',
         start: 'March 2012',
         end: 'June 2012',
         projects: [
            {

            },
            {

            },
            {

            }
         ]
      },

      {
         company: 'NetDec',
         site: 'http://netdec.uz',
         position: 'Technical writer',
         position_ru: 'Составитель документации',
         start: new Date(''),
         end: new Date(''),
         projects: [
            {
               name: 'Textbook "C# 2.0 Basics"',
               name_ru: 'Учебное пособие "Основы C# 2.0"',
               description: '',
               description_ru: '',
               technologies: [
                  {
                     name: 'C#',
                     version: '2.0'
                  },
                  {
                     name: '.NET',
                     version: '2.0'
                  }
               ]
            },
            {
               name: 'Textbook "Advanced C# 2.0"',
               name_ru: 'Учебное пособие "Продвинутые возможности C# 2.0"',
               description: '',
               description_ru: '',
               technologies: [
                  {
                     name: 'C#',
                     version: '2.0'
                  },
                  {
                     name: '.NET',
                     version: '2.0'
                  }
               ]
            }
         ]
      }
   ]
}

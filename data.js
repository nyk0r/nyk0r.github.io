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
         name: 'Russian',
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
         category: 'Operating Systems',
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
         category: 'Databases',
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
         position: 'Senior front-end developer',
         position_ru: 'Старший Front-end разработчик',
         start: new Date('2013-04-01'),
         end: null,
         projects: [
            {
               name: 'Orpheus',
               site: 'http://orpheusbanking.com/',
               description: 'On-line banking system.',
               description_ru: 'Система для Интернет-банкинга.',
               technologies: [
                  {
                     name: 'KendoUI',
                     version: '2014 Q1'
                  },
                  {
                     name: 'jQuery',
                     version: '2.x'
                  },
                  {
                     name: 'Orchard CMS',
                     version: '1.8.1'
                  },
                  {
                     name: '.NET',
                     version: '5.0'
                  }
               ]
            }
         ],
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
               description: 'A tool to discover and curate social media content concerning a person\'s organisation.',
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
         company: 'Murano Softare',
         site: 'https://muranosoft.com',
         position: 'Junior .NET developer',
         position_ru: 'Младший .NET разработчик',
         start: new Date('2011-04-01'),
         end: new Date('2012-01-01'),
         projects: [
            {
               name: 'PLTW Date Warehouse',
               site: 'http://pltw.org',
               description:
                  'A system collecting data from several sources like students\' assesments, teachers\'s reports, and schools ratings. ' +
                  'After the data has been collected the system generates several reports for in house use.',
               description_ru:
                  'Система для сбора данных из нескольких источников таких, как оценки студентов, отчеты преподавателей и рейтинги школ. ' +
                  'После сбора данных, система генерирует несколько отчетов для внутреннего использования.',
               technologies: [
                  {
                     name: 'ASP.Net',
                     version: '3.5'
                  },
                  {
                     name: 'Win Forms',
                     version: '3.5'
                  },
                  {
                     name: 'SQL Server',
                     version: '2008 R2'
                  },
               ]
            },
            {
               name: 'Murano Time Tracking System',
               description: 'Time tracking system used by Murano to track working time, assess employees, and bill clients.',
               description_ru: 'Система отслеживания времени, используемая Murano для отслеживания рабочего времени, оценки сотрудников и высталения счетов клиентам.',
               technologies: [
                  {
                     name: 'ASP.Net',
                     version: '2.0'
                  },
                  {
                     name: 'SQL Server',
                     version: '2005'
                  },
                  {
                     name: 'LLBLGen',
                     version: '2.4'
                  },
               ]
            }
         ]
      },

      {
         company: 'Sharq Telekom',
         site: 'http://st.uz',
         position: 'Software engineer',
         position_ru: 'Инженер программист',
         start: new Date('2010-10-01'),
         end: new Date('2011-04-01'),
         projects: [
            {
               name: 'ISP Billing System',
               name_ru: 'Автоматизированная биллинговая система',
               site: 'https://st.uz/',
               description:
                  'ISP automation and billing system. ' +
                  'The system tracks ADSL, dial-Up, telephony and hosting time and traffic and calculates the cost of these services. ' +
                  'It also accepts payments from several providers.',
               description_ru:
                  'Автоматизированная система расчетов провайдера. ' +
                  'Система отслеживает траффик и потраченное время для услуг ADSL, dial-up, телефонии и хостинга, и рассчитывает стоимость этих услуг. ' +
                  'Она также принимает платежи от нескольких провайдеров.',
               technologies: [
                  {
                     name: 'PHP',
                     version: '4.x'
                  },
                  {
                     name: 'Zend Framework',
                     version: ''
                  },
                  {
                     name: 'Apache',
                     version: ''
                  },
                  {
                     name: 'PostgreSQL',
                     version: '8.3'
                  },
                  {
                     name: 'Python',
                     version: '2.7.x'
                  }
               ]
            }
         ]
      },

      {
         company: 'Tokyoscale',
         site: null,
         position: 'Python developer',
         position_ru: 'Python разработчик',
         start: new Date('2010-05-01'),
         end: new Date('2010-10-01'),
         projects: [
            {
               name: 'iyoiyo.jp',
               site: 'http://www.iyoiyo.jp/',
               description: 'A classified portal for Japan.',
               description_ru: 'Портал объявлений для Японии.',
               technologies: [
                  {
                     name: 'Python',
                     version: '2.6.x'
                  },
                  {
                     name: 'Django',
                     version: ''
                  },
                  {
                     name: 'nginx',
                     version: ''
                  },
                  {
                     name: 'MySQL',
                     version: ''
                  },
                  {
                     name: 'Amazon S3',
                     version: ''
                  },
               ]
            }
         ]
      },

      {
         company: 'Extra Soft Media',
         site: null,
         position: 'Junior .NET developer',
         position_ru: 'Младший .NET разработчик',
         start: new Date('2008-05-01'),
         end: new Date('2009-07-01'),
         projects: [
            {
               name: 'WM Smart',
               site: 'http://invenology.com/',
               description: 'Complicated system for warehouse management.',
               description_ru: 'Система управления складами.',
               technologies: [
                  {
                     name: 'VB.Net',
                     version: '8.0'
                  },
                  {
                     name: 'C#',
                     version: '2.0'
                  },
                  {
                     name: '.NET',
                     version: '2.0'
                  },
                  {
                     name: 'Win Forms',
                     version: '2.0'
                  },
                  {
                     name: 'SQL Sever',
                     version: '2005'
                  },
               ]
            },
            {
               name: 'Yellow Pages UZ',
               site: 'http://www.yellowpages.uz/',
               description: 'Offline telephone book distributed on CD.',
               description_ru: 'Телефонный справочник, распространяемый на CD.',
               technologies: [
                  {
                     name: 'Delphi',
                     version: '7'
                  }
               ]
            }
         ]
      },

      {
         company: 'NetDec',
         site: 'http://netdec.uz',
         position: 'Technical writer',
         position_ru: 'Составитель документации',
         start: new Date('2008-02-01'),
         end: new Date('2007-08-01'),
         projects: [
            {
               name: 'Textbook "Advanced C# 2.0"',
               name_ru: 'Учебное пособие "Продвинутые возможности C# 2.0"',
               description: 'A texbook for student who passed the first course.',
               description_ru: 'Учебник для студентов, прошедших первый курс.',
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
               name: 'Textbook "C# 2.0 Basics"',
               name_ru: 'Учебное пособие "Основы C# 2.0"',
               description: 'A textbook for students beginning to study C# 2.0.',
               description_ru: 'Учебник для начинающих изучать C# 2.0.',
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

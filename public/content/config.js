const DATAS = {
    ru: {
        title: "Цикл с параметром",
        grade: "7 Класс",
        typeder: "тренажер",
        prologue: {
            author: 'Б.Л. Ворф',
            phrase: 'Язык формирует наш способ мышления и определяет то, о чем мы можем мыслить.',
        },
        parts: [
            {
                title: 'Думай',
                info: 'Давай проверим как хорошо ты знаком с циклом.',
                image: 'a1.jpg',
                interactive: {
                    name: 'true-false',
                    items: {
                        task: 'При правильном утверждении выбери ∧, при неверном: _',
                        data: [{
                            phrase: 'Цикл – это многократное повторение определенных действий',
                            state: true
                        }, {
                            phrase: 'Круговорот воды в природе не является циклом',
                            state: false
                        }, {
                            phrase: 'При работе цикла допустимо выполнение одной или нескольких команд ',
                            state: true
                        }, {
                            phrase: 'Цикл с параметром – цикл, в котором не известно число повторения команд',
                            state: false
                        }, {
                            phrase: 'Цикл с параметром имеет начальное значение цикла и конечное',
                            state: true
                        }, {
                            phrase: 'Цикл с параметром может выполнятся в обратном порядке',
                            state: true
                        }, {
                            phrase: 'Цикл добавляет избыточность команд в программе',
                            state: false
                        }, {
                            phrase: 'В решении программы может быть использован только один цикл',
                            state: false
                        }, {
                            phrase: 'Циклические процессы происходят как в природе, так и в повседневной жизни',
                            state: true
                        }, {
                            phrase: 'Единичное выполнение тела цикла называется итерацией',
                            state: true
                        }]
                    }
                }
            },
            {
                title: 'Создавай',
                info: 'Примени свои знания на практике',
                image: 'a2.jpg',
                interactive: {
                    name: 'drag',
                    items: {
                        codeJS: 'Код программы',
                        runner: 'Симулятор',
                        blocks: 'Место сбора блоков',
                        cycle: 'Цикл',
                        whenRun: 'При запуске',
                        goDown: 'вниз',
                        goUp: 'вверх',
                        goForward: 'вперед',
                        goBack: 'назад',
                        reset: 'Сбросить',
                        run: 'Выполнить',
                        columnRepeats: 'Количество\nповторений:',
                        titleDialog: 'Блоки, которые ты собирал, также могут быть отображены на языке программирования <b>Javascript</b>, самом популярном в мире.',
                        task: 'Попробуй себя в роли программиста – художника! Нарисуй линию, используя цикл с параметром:'
                    }
                }
            }
        ]
    },
    kz: {
        title: "Параметрі бар цикл",
        grade: "7-cынып",
        typeder: "жаттығу құралы",
        prologue: {
            author: 'Б.Л. Ворф',
            phrase: 'Тіл ойлау қабілетін қалыптастырады және біздің не ойлай алатындығымызды анықтайды.',
        },
        parts: [
            {
                title: 'Ойла',
                info: 'Циклді қаншалықты жақсы білетіндігіңді тексерейік',
                image: 'a1.jpg',
                interactive: {
                    name: 'true-false',
                    items: {
                        task: 'Дұрыс бекітілсе, ∧ таңда, дұрыс болмаса: _',
                        data: [{
                            phrase: 'Цикл – бұл белгілі бір әрекеттерді бірнеше рет қайталау',
                            state: true
                        }, {
                            phrase: 'Табиғаттағы су айналымы цикл емес.',
                            state: false
                        }, {
                            phrase: 'Цикл жұмысы кезінде бір немесе бірнеше команданы орындауға болады ',
                            state: true
                        }, {
                            phrase: 'Параметрі бар цикл – команданы қайталау саны белгісіз цикл',
                            state: false
                        }, {
                            phrase: 'Параметрі бар циклдің бастапқы және соңғы цикл мәні бар',
                            state: true
                        }, {
                            phrase: 'Параметрі бар цикл кері тәртіппен орындала алады',
                            state: true
                        }, {
                            phrase: 'Цикл программада артық командалар енгізеді.',
                            state: false
                        }, {
                            phrase: 'Программа шешімінде тек бір ғана цикл қолданыла алады.',
                            state: false
                        }, {
                            phrase: 'Циклдік процесстер табиғатта, сондай-ақ күнделікті өмірде орын алады.',
                            state: true
                        }, {
                            phrase: 'Цикл денесін бір рет орындау итерация деп аталады',
                            state: true
                        }]
                    }
                }
            },
            {
                title: 'Жаса',
                info: 'Біліміңді тәжірибеде қолдан',
                image: 'a2.jpg',
                interactive: {
                    name: 'drag',
                    items: {
                        codeJS: 'Программа коды',
                        runner: 'Симулятор',
                        blocks: 'Блоктарды жинайтын жер',
                        cycle: 'Цикл',
                        whenRun: 'Іске қосу кезінде',
                        goDown: 'төмен түсу',
                        goUp: 'жоғары шығу',
                        goForward: 'алға',
                        goBack: 'артқа',
                        reset: 'қайтару',
                        run: 'Орындау',
                        columnRepeats: 'Қайталау саны:',
                        titleDialog: 'Сен құрастырған блоктар әлемдегі ең танымал <b>JavaScript</b> программалау тілінде де көрсетіле алады.',
                        task: 'Программашы – суретші рөлін ойнап көр! Параметрі бар циклді қолданып, сызық сыз:'
                    }
                }
            }
        ]
    },
    en: {
        title: "For loop",
        grade: "Grade 7",
        typeder: "simulator",
        prologue: {
            author: 'B.L.Worf',
            phrase: 'Language forms our manner of thought and determines about what we can think.',
        },
        parts: [
            {
                title: 'Think',
                info: 'Let’s check how do you know this loop well.',
                image: 'a1.jpg',
                interactive: {
                    name: 'true-false',
                    items: {
                        task: 'At valid statement choose ∧, when it is not true: _',
                        data: [{
                            phrase: 'The loop is looping of determined actions',
                            state: true
                        }, {
                            phrase: 'Hydrologic cycle in nature is not a loop',
                            state: false
                        }, {
                            phrase: 'At loop work is allowed to perform one and several commands',
                            state: true
                        }, {
                            phrase: 'For loop is a cycle where iteration count is not known',
                            state: false
                        }, {
                            phrase: 'For loop has initial and end value of the loop',
                            state: true
                        }, {
                            phrase: 'For loop can be implemented at backwards',
                            state: true
                        }, {
                            phrase: 'The loop adds redundancy of commands in program',
                            state: false
                        }, {
                            phrase: 'Only one loop can be used in program solving ',
                            state: false
                        }, {
                            phrase: 'Looped processes happen both in nature and in daily life',
                            state: true
                        }, {
                            phrase: 'Single performance of loop cycle is iteration',
                            state: true
                        }]
                    }
                }
            },
            {
                title: 'Create',
                info: 'Use your knowledge on practice',
                image: 'a2.jpg',
                interactive: {
                    name: 'drag',
                    items: {
                        codeJS: 'Code',
                        runner: 'Simulator',
                        blocks: 'Blocks assembly location',
                        cycle: 'Cycle',
                        whenRun: 'When run',
                        goDown: 'go down',
                        goUp: 'go up',
                        goForward: 'go forward',
                        goBack: 'go back',
                        reset: 'reset',
                        run: 'run',
                        columnRepeats: 'Number of repetitions:',
                        titleDialog: 'Blocks which you assembled also can be showed in <b>JavaScript</b> program language, the most popular in the world.',
                        task: 'Try yourself in role of software researcher-artist! Paint line using for loop:'
                    }
                }
            }
        ]
    }
}
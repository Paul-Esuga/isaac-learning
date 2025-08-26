
import { category_value } from "../components/quiz-componenets/QuizCard";

const QuizData = [
    {
        id: "1",
        title: "Introduction to Human resource management",
        category: category_value.Foundational,
        topic: "Basic concepts of HR for beginners",
        questionCount: "5",
        quizDuration: "10",
        completors: "32",
        quizQuestions: [
            {
                id: "1",
                question: `What is the primary function of Human Resource Management?`,
                options: [
                    `To manage finanaces`,
                    `To manage operations`,
                    `To manage people`,
                    `To manage technology`
                ],
                correctAnswer: `To manage people`
            },

            {
                id: "2",
                question: `Which of the following is a key HRM activity?`,
                options: [
                    `Recruitmenet and selection`,
                    `Marketing and sales`,
                    `Finanace and accounting`,
                    `Research and developmenet`
                ],
                correctAnswer: `Recruitmenet and selection`
            },

            {
                id: "3",
                question: `What is the term for the process of planning, organizing, and controlling the use of human resources?`,
                options: [
                    `Human Resource Planning`,
                    `Human Resource Management`,
                    `Personnael Management`,
                    `Staffing`
                ],
                correctAnswer: `Human Resource Planning`
            },

            {
                id: "4",
                question: `Which of the following is a type of training program?`,
                options: [
                    `On-the-job training`,
                    `Classroom Traing`,
                    `Apprenticeship Training`,
                    `All of the above`
                ],
                correctAnswer: `All of the above`
            },

            {
                id: "5",
                question: `What is the term for the process of planning for future staffing needs`,
                options: [
                    `Succession planning`,
                    `Workforce planning`,
                    `Human resource planning`,
                    `Strategic planning`
                ],
                correctAnswer: `Workforce planning`
            }
        ]
    },

    {
        id: "2",
        title: "Introduction to Motion in Physics",
        category: category_value.Secondary,
        topic: "Concepts and Types of Motion ",
        questionCount: "5",
        quizDuration: "10",
        completors: "12",
        quizQuestions: [

            {
                id: "1",
                question: `What is the term for an object's change in position over time?`,
                options: [
                    `Speed`,
                    `Velocity`,
                    `Acceleration`,
                    `Displacement`
                ],
                correctAnswer: `Displacement`
            },

            {
                id: "2",
                question: `What of the following is a scalar quantity?`,
                options: [
                    `Distance`,
                    `Displacement`,
                    `Speed`,
                    `Velocity`
                ],
                correctAnswer: `Distance`
            },

            {
                id: "3",
                question: `What is the term for the rate of change of velocity?`,
                options: [
                    `Velocity`,
                    `Speed`,
                    `Acceleration`,
                    `Displacement`
                ],
                correctAnswer: `Acceleration`
            },

            {
                id: "4",
                question: `Which of the following types of motion is described by a constant velocity?`,
                options: [
                    `Uniform motion`,
                    `Non-uniform motion`,
                    `Accelertaed motion`,
                    `Decelerated motion`
                ],
                correctAnswer: `Uniform motion`
            },

            {
                id: "5",
                question: `What is the term for the distance travelled by an object in a given time?`,
                options: [
                    `Displacement`,
                    `Velocity`,
                    `Acceleration`,
                    `Speed`
                ],
                correctAnswer: `Speed`
            }
        ]
    },

    {
        id: "3",
        title: "Introduction to Advanced Chemistry",
        category: category_value.Tertiary,
        topic: "Organic Chemistry Concept",
        questionCount: "5",
        quizDuration: "10",
        completors: "10",
        quizQuestions: [

            {
                id: "1",
                question: `What is the term for the process, by which atoms gain or loss electrons?`,
                options: [
                    `Oxidation`,
                    `Ionization`,
                    `Ion formation`,
                    `Electron configuartion`
                ],
                correctAnswer: `Oxidation`
            },

            {
                id: "2",
                question: `What is the following types of chemical bonds involves the sharing of electrons between atoms?`,
                options: [
                    `Ionic bond`,
                    `Covalent bond`,
                    `Hydrogen bond`,
                    `Electro static bond`
                ],
                correctAnswer: `Covalent Bond`
            },

            {
                id: "3",
                question: `What is the term for the minimum amount of energy required for a chemical reaction to occur?`,
                options: [
                    `Activvation energy`,
                    `Reaction energy`,
                    `Bond energy`,
                    `Threshold energy`
                ],
                correctAnswer: `Activation energy`
            },

            {
                id: "4",
                question: `Which of the following chemical reactions involves the combination of two or more substance to form a new compound?`,
                options: [
                    `Synthesis reaction`,
                    `Decomposition reaction`,
                    `Replacement reaction`,
                    `Combustion reaction`
                ],
                correctAnswer: `Synthesis reaction`
            },

            {
                id: "5",
                question: `What is the term for the process by which a solid changes to gas, without going through liquid phase?`,
                options: [
                    `Melting`,
                    `Boiling`,
                    `Sublimation`,
                    `Deposition`
                ],
                correctAnswer: `Sublimation`
            }
        ]
    },

    
    {
        id: "4",
        title: "Introduction to Computer Science",
        category: category_value.Foundational,
        topic: "Intoduction to computer",
        questionCount: "5",
        quizDuration: "10",
        completors: "100",
        quizQuestions: [

            {
                id: "1",
                question: `What is the term for a set of instructions that a computer can execute?`,
                options: [
                    `Algorithm`,
                    `Programs`,
                    `software`,
                    `Hardware`
                ],
                correctAnswer: `Program`
            },

            {
                id: "2",
                question: `Which of the following programming paradigm involves breaking down a problem into smaller, more manageable parts?`,
                options: [
                    `Object-oriented programming`,
                    `Functional programming`,
                    `Imperative programming`,
                    `Declarative programming`
                ],
                correctAnswer: `Object-oriented programming`
            },

            {
                id: "3",
                question: `What is the term for a variable that stores a whole number value`,
                options: [
                    `Integer`,
                    `Float`,
                    `Boolean`,
                    `String`
                ],
                correctAnswer: `Integer`
            },

            {
                id: "4",
                question: `Which of the following datastructure is a collection of key-value pairs`,
                options: [
                    `Array`,
                    `Linked list`,
                    `stack`,
                    `Hash table`
                ],
                correctAnswer: `Hash table`
            },

            {
                id: "5",
                question: `What is the term for the process of finding and fixing error in a program?`,
                options: [
                    `Testing`,
                    `Compiling`,
                    `Debugging`,
                    `Interpreting`
                ],
                correctAnswer: `Debugging`
            },
        ]
    },
    
    {
        id: "5",
        title: "Introduction to Advanced Biology",
        category: category_value.Tertiary,
        topic: "Evolution in Biology",
        questionCount: "5",
        quizDuration: "10",
        completors: "50",
        quizQuestions: [

            {
                id: "1",
                question: `What is the term for the process by which the population of a living organism changes overtime?`,
                options: [
                    `Natural selection`,
                    `Evolution`,
                    `Genetic drift`,
                    `Mutation`
                ],
                correctAnswer: `Evolution`
            },

            {
                id: "2",
                question: `Who is credited with the theory of evolution through natural selection?`,
                options: [
                    `Charles Darwin`,
                    `Gregor Mendel`,
                    `Jean-Baptist Lamarck`,
                    `Alfred Russel Wallace`
                ],
                correctAnswer: `Charles Darwin`
            },

            {
                id: "3",
                question: `What is the term for the movement of individuals with certain traits into or out of a population?`,
                options: [
                    `Gene flow`,
                    `Genetic drift`,
                    `Mutation`,
                    `Natural selection`
                ],
                correctAnswer: `Gene flow`
            },

            {
                id: "4",
                question: `Which of the following types of selection favors individuals with extreme traits`,
                options: [
                    `Directional selection`,
                    `Stabilizing selection`,
                    `Disruptive selection`,
                    `Artificial selection`
                ],
                correctAnswer: `Disruptive selection`
            },

            {
                id: "5",
                question: `What is the term for the study of the distribution of traits in population over time`,
                options: [
                    `Phylogenetics`,
                    `Population genetics`,
                    `Evolutionary biology`,
                    `Systematics`
                ],
                correctAnswer: `Population genetics`
            }
        ]
    },
]

export default QuizData;
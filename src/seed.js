export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Coding
      ============================================ */
  // Javascript
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "The Complete JavaScript Course 2020",
    description:
      "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
    genre: "javascript",
    skill: "beginner",
    slug: "js-2020",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "JavaScript: Understanding the Weird Parts",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
    genre: "javascript",
    skill: "intermediate",
    slug: "js-weird",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "JavaScript Algorithms and Data Structures Masterclass",
    description: "The Missing Computer Science and Coding Interview Bootcamp.",
    genre: "javascript",
    skill: "expert",
    slug: "js-dsa",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "The Modern JavaScript Bootcamp",
    description:
      "Learn JavaScript by building real-world apps. Includes 3 real-world projects, 80 programming challenges, and ES6/ES7!",
    genre: "javascript",
    skill: "intermediate",
    slug: "js-bootcamp",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Nuxt.js - Vue.js on Steroids",
    description: "Nuxt.js - Vue.js on Steroids",
    genre: "javascript",
    skill: "intermediate",
    slug: "nuxt-js",
  });

  // Python
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Automate the Boring Stuff with Python Programming",
    description:
      "A practical programming course for office workers, academics, and administrators who want to improve their productivity",
    genre: "python",
    skill: "beginner",
    slug: "atbs",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "2020 Complete Python Bootcamp",
    description:
      "From Zero to Hero in Python, Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
    genre: "python",
    skill: "beginner",
    slug: "zth",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Python for Data Science and Machine Learning Bootcamp",
    description:
      "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more",
    genre: "python",
    skill: "expert",
    slug: "ds-ml",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "The Python Mega Course: Build 10 Real World Applications",
    description:
      "A complete Python course for both beginners and intermediates! Master Python 3 by making 10 amazing Python apps.",
    genre: "python",
    skill: "beginner",
    slug: "mc-python",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "The Modern Python 3 Bootcamp",
    description:
      "A Unique Interactive Python Experience With Nearly 200 Exercises and Quizzes.",
    genre: "python",
    skill: "intermediate",
    slug: "python-3",
  });

  // App Dev
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp",
    description:
      "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
    genre: "appdev",
    skill: "beginner",
    slug: "swift-ios",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Unit Testing Swift Mobile App",
    description:
      "Apply Test-Driven Development(TDD) process to iOS mobile app development in Swift",
    genre: "appdev",
    skill: "expert",
    slug: "tdd",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Introduction to iOS Game Development with SpriteKit & Swift",
    description:
      "Develop your first iOS game using the SpriteKit framework and Swift. A Jump'N'Run with countless awesome features!",
    genre: "appdev",
    skill: "intermediate",
    slug: "spritekit",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "iOS / OSX Game Development - From Start to Store in Swift",
    description:
      "Learn to create amazing games from scratch in minimal time by properly understanding the SpriteKit framework and Swift.",
    genre: "appdev",
    skill: "intermediate",
    slug: "gamedev",
  });

  // Ruby
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "The Complete Ruby on Rails Developer Course",
    description:
      "Learn to make innovative web apps with Ruby on Rails and unleash your creativity",
    genre: "ruby",
    skill: "intermediate",
    slug: "ror-dev",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Learn Ruby on Rails from Scratch",
    description: "A complete guide to master Ruby and Rails framework",
    genre: "ruby",
    skill: "intermediate",
    slug: "ror-scratch",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Ruby on Rails: Training and Skills to Build Web Applications",
    description:
      "Designed for entrepreneurs who want to learn to code their own ideas. No prior experience needed.",
    genre: "ruby",
    maturity: "beginner",
    slug: "ror-ent",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Ruby on Rails Foundations",
    description:
      "An in depth tutorial for learning the Ruby on Rails web framework, from basic principles to advanced coding techniques.",
    genre: "ruby",
    skill: "beginner",
    slug: "ror-found",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "The Staircase",
    description: "REST API with Ruby on Rails: The Complete Guide.",
    genre: "ruby",
    skill: "intermediate",
    slug: "ror-api",
  });

  // Java
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Java Programming Masterclass for Software Developers",
    description:
      "Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification",
    genre: "java",
    skill: "intermediate",
    slug: "java-master",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Selenium WebDriver with Java Basics to Advanced Frameworks",
    description:
      "TOP RATED (BEST SELLER) #1 Master SELENIUM java course, 5 Million students learning worldwide with great collaboration",
    genre: "java",
    skill: "beginner",
    slug: "selenium",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Java Programming for Complete Beginners",
    description:
      "Learn Java Programming with 200+ examples. For Java Beginners! Learn Java Object Oriented Programming Now!",
    genre: "java",
    skill: "beginner",
    slug: "java-beg",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "Java In-Depth",
    description:
      "Become a Complete Java Engineer!, Comprehensive Java programming course integrated with design principles, best practices & instructor-led Java EE project",
    genre: "java",
    skill: "intermediate",
    slug: "java-indepth",
  });
  firebase.firestore().collection("coding").add({
    id: getUUID(),
    title: "The Complete Java Certification Course",
    description:
      " Become a confident industry ready core Java developer and get certified as a Java professional!",
    genre: "java",
    skill: "intermediate",
    slug: "java-cert",
  });

  /* Fitness
      ============================================ */
  // Yoga
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Yoga Nidra - Conscious Sleep Practice",
    description:
      "Use the Tantric art of Yoga Nidra to clear unwanted subconscious patterns & create new ones while deepening awareness",
    genre: "yoga",
    skill: "intermediate",
    slug: "yoga-nidra",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Learn Thai Yoga Massage",
    description:
      "Learn everything you need to know to give Thai Yoga massage even if you've never given a massage before.",
    genre: "yoga",
    skill: "intermediate",
    slug: "thai-yoga",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "15-Day Yoga For Flexibility Challenge",
    description:
      "Improve your flexibility, reduce morning stiffness and alleviate recurring aches and pains in 15 minutes a day.",
    genre: "yoga",
    maturity: "beginner",
    slug: "yoga-15",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Hatha & Vinyasa Flow Yoga for Beginners",
    description:
      "Sea Yoga, Learn how to bring ALL benefits of Yoga into your own Life, effectively & effortlessly! Start FEELING FREE with Yoga!",
    genre: "yoga",
    skill: "beginner",
    slug: "hatha-yoga",
  });

  // Crossfit
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "High Intensity Interval Training (HIIT) Based On Crossfit",
    description:
      "High Intensity Interval Training (HIIT) is the basis for Crossfit. Build muscle and burn fat. Gym or home workout.",
    genre: "crossfit",
    skill: "intermediate",
    slug: "crossfit-hiit",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "The Inner WOD",
    description:
      "How to Take Your CrossFit Training to the Next Level! Learn how Mental Strength is the difference!",
    genre: "crossfit",
    skill: "expert",
    slug: "inner-wod",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Master The Burpee",
    description:
      "Learn one of the worlds best exercises for cardio and fat-loss.",
    genre: "crossfit",
    skill: "expert",
    slug: "burpee",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Hypertrophy",
    description: "Discover the secrets to muscle growth.",
    genre: "crossfit",
    skill: "expert",
    slug: "hypertrophy",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "HIIT (High Intensity Interval Training) For Busy People",
    description:
      "Learn how to Burn fat, build muscle and get in shape without spending hours in the gym. Efficient and effective.",
    genre: "crossfit",
    skill: "beginner",
    slug: "hiit-busy",
  });

  // Weightlifting
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Weightlifting-Pro: Professional Muscle Building Crash Course",
    description:
      "Weight lifting tips and tricks that will take your weight lifting training and muscle growth to a whole new level.",
    genre: "weightlifting",
    skill: "expert",
    slug: "wl-pro",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "The Complete Guide to the Snatch",
    description:
      "The snatch is one of the most complicated movements to master, but it's many benefits far out weight it's challenges",
    genre: "weightlifting",
    skill: "expert",
    slug: "snatch",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Learning and Perfecting the Power Clean",
    description:
      "The power clean is used by athletes at the highest level of sport and fitness.  Why don't you use it?  You should. ",
    genre: "weightlifting",
    maturity: "expert",
    slug: "power-clean",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Massive Impact Training",
    description: "Revolutionary Breakthrough in Gym or At Home Fitness",
    genre: "weightlifting",
    skill: "intermediate",
    slug: "mit",
  });

  // Pilates
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Pilates: Mat Pilates Sequence Beginner to Advanced,",
    description:
      "Pilates will transform your body, improve your posture, health & wellbeing, core strength, mobility and flexibility",
    genre: "pilates",
    skill: "beginner",
    slug: "pilates-mat",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Pilates Comprehensive Course (from a Pilates Instructor)",
    description:
      "Easy to Learn Pilates Exercises from an expert Pilates instructor! Gain good posture and tone up your body.",
    genre: "pilates",
    skill: "beginner",
    slug: "pilates-comp",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "The Pilates Playlist",
    description: "20-Minute Daily Workouts for a Toned Body.",
    genre: "pilates",
    skill: "intermediate",
    slug: "pilates-playlist",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "The Pilates Practice: Uncovering the Basics",
    description: "Start your Pilates journey by learning the basics.",
    genre: "pilates",
    skill: "beginner",
    slug: "pilates-prac",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Pamlattes: Pilates by Pam",
    description:
      "Fabulous over 40: A fit physiotherapist takes you on a journey to achieve excellent physical conditioning.",
    genre: "pilates",
    skill: "expert",
    slug: "pamlattes",
  });

  // Zumba
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "30 days Weight Loss w. Zumba Program",
    description: "Weight loss, shape and tone your body program in 30 days.",
    genre: "zumba",
    skill: "intermediate",
    slug: "zumba-30",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Zumba Online Class: 15MIN Daily Home Workout for Weight Loss",
    description:
      "Zumba Online Home Workout Using your Bodyweight to Burn Calories. With this Zumba Class, you will Make Your Day Better.",
    genre: "zumba",
    skill: "intermediate",
    slug: "zumba-15",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "Zumba for Beginners: 1 Hour class + Steps Breakdown",
    description:
      "Online Zumba Course with Many Choreographies, Rhythms and Songs",
    genre: "zumba",
    skill: "beginner",
    slug: "zumba-begin",
  });
  firebase.firestore().collection("fitness").add({
    id: getUUID(),
    title: "GYM PHOBIA? Or Need Lockdown Fitness",
    description:
      "Keep fit with Emma Walton, maintain fitness levels whilst gym is in lockdown,  HIIT, LBTs, Core + Zumba",
    genre: "zumba",
    skill: "beginner",
    slug: "tgym-phobia",
  });
}

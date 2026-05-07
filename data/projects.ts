export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  writeup: string;
  tags: string[];
  year: string;
  role: string;
  githubUrl?: string;
  demoUrl?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 'Laundry Webapp',
    num: '01',
    title: 'Laundry Webapp',
    subtitle: 'Sheares Hall',
    description: 'A laundry monitoring solution built for Sheares Hall, check which machines are available, get reminders on your own laundry, integrated directly with Telegram.',
    writeup: `This was more of a fun side project for me to learn more about AWS and proper deployment workflows. The webapp provides a simple UI which allow users to view which washers and dryers are in use, claim machines and set timers which will send automatic reminders to pick up your laundry, ping users to collect their laundry if they are hogging the machines.

    Through this project, I learnt more about deployment workflows - staging and prod environments, CI/CD with Github Actions, deployment via EC2 and S3 + Cloudfront. Currently trying to integrate the project with EcoVolt Plugs for more acccurate cycle tracking, but still a work in progress.
`,
    tags: ['Next.js', 'TypeScript', 'Postgres'],
    year: '2026',
    role: 'Fullstack',
    githubUrl: 'https://github.com/justinwong2/laundry',
    demoUrl: '',
  },
  {
    id: 'Ethereum Fraud Detection',
    num: '02',
    title: 'Ethereum Fraud Detection',
    subtitle: 'BT4012 Fraud Analytics',
    description: 'Final Project focused on detecting fraudulent Ethereum Transactions using traditional ML and GNNs',
    writeup: `This was definitely one of the more challenging ML project that I have completed due to the nature of blockchain fraud detection. Unlike traditional fraud where transactions are often independent, crypto fraud frequently involves coordinated fraud rings operating across multiple accounts. The high transaction volume and rapidly shifting account relationships make it difficult to establish meaningful patterns. We faced the usual issues with fraudulent datasets - the data was very imbalanced with many of the transactions being unlabelled, mimicking real world conditions.

    Since the dataset actually contained real data with real account IDs, we made use of Etherscan to query for the transactions made by these accounts, and built a GNN to capture the transaction patterns. We also explored traditional methods such as XGBoost with Feature Engineering, which proved to be more robust compared to the GNNs.

    The key challenge we faced would be the temporal nature of the dataset - each time period was independent from the previous, and the same account might not persist across the time periods, making it hard to establish long term trends.
`,
    tags: ['Rust', 'CLI', 'DevTools'],
    year: '2025',
    role: 'Development',
    githubUrl: 'https://github.com/justinwong2/BT4012_ML',
    demoUrl: 'https://njihin.github.io/bt4012_elliptic/src/graph/visualizations/address_graph_viewer.html'
  },
  {
    id: 'Credit Card Fraud Detection',
    num: '03',
    title: 'Credit Card Fraud Detection',
    subtitle: 'BT4221 Advanced Analytics with Big Data Technologies',
    description: 'Final Project focused on Credit Card Fraud Detection, exploring different approaches including ensembles and cascade models.',
    writeup: `This was my first full pipeline ML project which covered Data Cleaning and Exploration, Feature Engineering, Scaling, Model Training and Hyperparameter Tuning and finally model evaluation.

    We made use of PySpark for distributed training and Databricks for the training environment, and this was important as the dataset was large (hence the module name big data analytics lol). Through this project I built up a strong understanding and foundation for building ML pipelines and the Dos and Don'ts when working with the data for training. 
`,
    tags: ['React'],
    year: '2025',
    role: 'Frontend Lead',
    githubUrl: 'https://github.com/justinwong2/Credit_Card_Fraud_Detection_ML',
    demoUrl: '',
  },
  {
    id: 'Twitter Bot Detection',
    num: '04',
    title: 'Twitter Bot Detection',
    subtitle: 'BT4012 Fraud Analytics',
    description: 'Kaggle Competition, achieved 41/113 Students',
    writeup: `Objective of this competition was to detect Twitter Bot users from human users based on profile features. This was another full ML pipeline project, and something notable I did was finetuning pretrained HuggingFace models to provide a confidence score for the text feature in the dataset while also ensuring no data leakage between the train and test sets.

    As this was my first Kaggle competition, I made the fatal mistake of optimising for the public leaderboard and overfit my model to it. My ranking actually dropped 35 places after the full dataset was used to evaluate the model, which was devasting as we were graded based on our leaderboard positions. My mistake was not having a more robust validation - I only had a train and test set without an evaluation set, and this was something I definitely took note of for my future ML projects. 
`,
    tags: ['ML'],
    year: '2025',
    role: 'ML Development',
    githubUrl: 'https://github.com/justinwong2/TwitterBot_Detection_ML',
    demoUrl: '',
  },
  {
    id: 'AI Generated Text Detection',
    num: '05',
    title: 'AI Generated Text Detection',
    subtitle: 'BT4012 Fraud Analytics',
    description: 'Kaggle Competition, achieved 11/113 students.',
    writeup: ` The objective of this project was to detect AI-generated text from human-written text based on text. I explored textual feature engineering such as text complexity, syntactic structure and lexical diversity. I also finetuned a pretrained HuggingFace model to provide a confidence score. 
`,
    tags: ['ML'],
    year: '2025',
    role: 'ML Development',
    githubUrl: 'https://github.com/justinwong2/AI_Text_Detection_ML',
    demoUrl: '',
  },
  {
    id: 'SupHub',
    num: '06',
    title: 'SupHub',
    subtitle: 'BT3103 Application Systems Development for Business Analytics',
    description: 'P2P Supper Ordering Site built for NUS hall students',
    writeup: `First web dev project built with Vue.js + Firebase, allow students to post and accept supper orders, circumventing the expesnive Grab delivery fees.
    `,
    tags: ['Vue'],
    year: '2025',
    role: 'Fullstack',
    githubUrl: 'https://github.com/justin/ml-pipeline',
  },
];

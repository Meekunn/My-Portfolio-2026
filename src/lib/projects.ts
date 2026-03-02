import FindIt from "@/assets/projects/findit.png";
import Portfolio from "@/assets/projects/portfolio-1.png";
import TskApp from "@/assets/projects/tskapp.png";
import ThsSchool from "@/assets/projects/ths-school.png";
import SmartVault from "@/assets/projects/smart_vault.jpg";
import TextEditor from "@/assets/projects/text-editor.png";
import WeddingSite from "@/assets/projects/wedding-site.png";
import Mnist from "@/assets/projects/mnist.png";
import FaceRecognition from "@/assets/projects/face-recognition.png";
import Innova from "@/assets/projects/innova.png";
import Pathmnist from "@/assets/projects/pathmnist.png";
import Pathmnist2 from "@/assets/projects/attention-map.png";
import Pca from "@/assets/projects/pca.png";
import FreshCheck from "@/assets/projects/fresh-check.png";
import Portfolio2 from "@/assets/projects/portfolio-2.png";
import TipEase from "@/assets/projects/tipease.png";

export const webProjects = [
  {
    id: 0.5,
    title: "TipEase",
    description:
      "TipEase is an in-progress cryptocurrency tipping web app that lets users send and receive tips via crypto wallets. The frontend features a send tip flow with multi-currency selection, wallet address management with clipboard support, and form validation powered by React Hook Form. For now, State is managed through a custom React Context with localStorage persistence, keeping wallet details intact across sessions.Currently being refined for full responsiveness, with backend integration planned as a next step. The project reflects an eye for detail and a commitment to pixel-perfect UI implementation",
    image: TipEase,
    tags: ["React", "Next.js", "TypeScript", "Chakra-UI", "SCSS"],
    github: "https://github.com/Meekunn/TipEase/",
    demo: "https://tip-ease.vercel.app/",
  },
  {
    id: 0.75,
    title: "Mikun Portfolio 2",
    description:
      "A personal portfolio website designed and built from scratch to showcase projects and skills. Features a clean, responsive layout with smooth navigation and a presentation of projects.",
    image: Portfolio2,
    tags: ["React", "Next.js", "TypeScript", "Chakra-UI", "SCSS"],
    github: "https://github.com/Meekunn/meekunn.github.io",
    demo: "https://meekunn.github.io/",
  },
  {
    id: 1,
    title: "InnovaAI Landing Page",
    description:
      "Pixel-perfect React Landing page that recreates the InnovaAI Figma mock-up, showcasing  attention to layout details and smooth micro-animations powered by the AOS library, all built with Chakra UI on Vite.",
    image: Innova,
    tags: ["React", "Vite", "TypeScript", "Chakra-UI", "AOS Library"],
    github: "https://github.com/Meekunn/AI_Solutions_LandingPage",
    demo: "https://ai-solutions-landing-page.vercel.app/",
  },
  {
    id: 1.25,
    title: "Wedding Website",
    description:
      "An elegant wedding site crafted with seamlessly blending style and functionality. Through coding, I created a delightful and user-friendly experience for couples and their guests. Designed for Mobile Screens",
    image: WeddingSite,
    tags: ["React", "Next.js", "TypeScript", "Chakra-UI"],
    github: "https://github.com/Meekunn/weddingsite",
    demo: "https://weddingsite-teal.vercel.app/",
  },
  {
    id: 1.5,
    title: "Towering Heights School",
    description:
      "Collaborated with UI/UX designers to create a modern and user-friendly website for a school (Towering Heights School). Key features included a streamlined navigation system, photo gallery, and an intuitive staff carousel. By utilizing the latest web development technologies and design best practices, we were able to create a responsive and accessible platform that catered to the needs of students, parents, and staff.",
    image: ThsSchool,
    tags: ["React", "Next.js", "TypeScript", "Chakra-UI", "SCSS"],
    github: "https://github.com/Meekunn/toweringheights-frontend",
    demo: "https://ths-project.vercel.app/",
  },
  {
    id: 1.75,
    title: "Tsk App",
    description:
      "This full stack todo-app features a clean and intuitive user interface that allows users to easily manage their tasks. The app has all the basic functions such as adding, editing, deleting, and checking tasks in each collection. Additionally, users can sign in with either their email or Google account. With a focus on user experience, the design was inspired by Dribble and developed to bring a seamless experience to users.",
    image: TskApp,
    tags: ["React", "TypeScript", "Firebase", "SCSS"],
    github: "https://github.com/Meekunn/EHC-React-Project",
    demo: "https://ehc-todoapp.web.app/",
  },
  {
    id: 2.0,
    title: "Mikun Portfolio 1",
    description:
      "Developed a portfolio website showcasing my skills and experience. The design is clean and modern, with a focus on highlighting my work and achievements. The website features smooth animations and a user-friendly interface, making navigation and learning about my qualifications easy.",
    image: Portfolio,
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "Material-UI",
      "SCSS",
      "Email.js",
    ],
    github: "https://github.com/Meekunn/My-Portfolio",
    demo: "https://adedamolaorofin.web.app/",
  },
  {
    id: 2.25,
    title: "FindiT",
    description:
      "Developed a web application that simplifies the process of finding staff members and their availability for student consultations at a university. The app provides an intuitive interface for students to easily search and locate staff members. The project has been a valuable experience, combining my technical skills with the opportunity to create something that can benefit many students.",
    image: FindIt,
    tags: ["React", "TypeScript", "Firebase", "Material-UI", "SCSS"],
    github: "https://github.com/Meekunn/FindiT-app/tree/new",
    demo: "https://findit-4cd7f.web.app/",
  },
];

export const aiProjects = [
  {
    id: 0.5,
    title: "FreshCheck",
    description:
      "An AI-powered computer vision system that detects fruit ripeness stages and provides storage recommendations to reduce food waste. Built with YOLOv8 and trained on 20,000+ images, achieving 99.19% accuracy on banana classification and 98.62% accuracy on tomato classification.",
    image: FreshCheck,
    tags: [
      "Python",
      "PyTorch",
      "YOLOv8",
      "Gradio",
      "HTML/CSS",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "OpenCV",
    ],
    github: "https://github.com/Meekunn/FreshCheck",
    // demo: "https://example.com",
  },
  {
    id: 0.75,
    title: "PCA Reconstruction",
    description:
      "The project applies PCA to reduce and reconstruct both normal and spectral images. It studies information redundancy, evaluates reconstruction quality with error metrics, and visualizes results to see how well PCA preserves important image information.",
    image: Pca,
    tags: ["Python", "Scikit-learn", "Plotly", "NumPy", "Matplotlib", "OpenCV"],
    github: "https://github.com/Meekunn/PCA-Reconstruction",
    // demo: "https://example.com",
  },
  {
    id: 1.0,
    title: "PathMNIST Interpretability",
    description:
      "This project explores model interpretability on the PathMNIST dataset by visualizing how ResNet (CNN) and Vision Transformer (ViT) models make decisions. Grad-CAM is used to highlight important regions in CNN predictions, while attention maps are visualized to understand how ViTs focus on different image regions, enabling a comparison of interpretability across architectures.",
    image: Pathmnist2,
    tags: [
      "Python",
      "PyTorch",
      "PahthMnist",
      "Vision Trasformer (ViT)",
      "Grad-CAM",
      "ResNet",
      "NumPy",
      "Matplotlib",
      "OpenCV",
    ],
    github: "https://github.com/Meekunn/pathmnist-interpretability",
    // demo: "https://example.com",
  },
  {
    id: 1.25,
    title: "PathMNIST Foundation Models",
    description:
      "This compares the performance of CNNs, ResNet, and Vision Transformers (ViT) on the PathMNIST medical image dataset. The project focuses on training, evaluation, and error analysis using confusion matrices to understand class-wise behavior and architectural differences.",
    image: Pathmnist,
    tags: [
      "Python",
      "PyTorch",
      "PahthMnist",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
    ],
    github: "https://github.com/Meekunn/pathmnist-foundation-models",
    // demo: "https://example.com",
  },
  {
    id: 1.5,
    title: "Face Recognition App",
    description:
      "A React and Flask-based attendance system using facial recognition for accurate, secure, and non-invasive tracking. Integrated MySQL and a custom-trained YOLOv10-N model for face detection.",
    image: FaceRecognition,
    tags: [
      "Python",
      "PyTorch",
      "YOLOv10n",
      "DeepFace Framework",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Flask",
      "Conda",
      "MySQL",
      "React",
      "TypeScript",
      "Chakra-UI",
    ],
    github: "https://github.com/Meekunn/face_recognition_app",
    // demo: "https://example.com",
  },
  {
    id: 1.75,
    title: "Digit Recognizer – CNN",
    description:
      "Developed a Convolutional Neural Network (CNN) for MNIST digit classification, achieving higher accuracy than the ANN baseline. The project highlights feature extraction with convolutional layers, preprocessing with OpenCV, and interactive prediction capabilities.",
    image: Mnist,
    tags: [
      "Python",
      "Keras/TensorFlow",
      "MNIST Dataset",
      "NumPy",
      "Matplotlib",
      "OpenCV",
    ],
    github: "https://github.com/Meekunn/Digit_Recognizer_CNN",
    // demo: "https://example.com",
  },
  {
    id: 2,
    title: "Digit Recognizer – ANN",
    description:
      "Built a digit recognition model using a simple Artificial Neural Network (ANN) trained on the MNIST dataset. The project demonstrates basic neural network architecture, data preprocessing, and model evaluation for handwritten digit classification.",
    image: Mnist,
    tags: [
      "Python",
      "Keras/TensorFlow",
      "MNIST Dataset",
      "NumPy",
      "Matplotlib",
      "OpenCV",
    ],
    github: "https://github.com/Meekunn/Digit_Recognizer",
    // demo: "https://example.com",
  },
  {
    id: 2.25,
    title: "Feature-Rich Text Editor",
    description:
      "Developed a text editor that offers a user-friendly interface and a wide range of functionalities for editing and manipulating text. The features implemented include Text Editing, Formatting Options, File Management, and Encoding Support.",
    image: TextEditor,
    tags: ["C++", "Qt Creator"],
    github: "https://github.com/Meekunn/Text_Editor/",
    // demo: "https://example.com",
  },
  {
    id: 2.5,
    title: "Smart Room/Vault Monitoring System.",
    description:
      "An Arduino-based project that utilizes an LED, an ultrasonic sensor, and a temperature sensor. The project involves controlling the LED, reading data from the sensors, and transmitting the collected data to a computer through the Arduino's serial port. Additionally, a QT application is developed to read the data from the serial port and display it in real-time on a graphical user interface (GUI).",
    image: SmartVault,
    tags: ["C++", "Qt Creator", "Arduino"],
    github: "https://github.com/Meekunn/Smart_System_Vault/",
    // demo: "https://example.com",
  },
];

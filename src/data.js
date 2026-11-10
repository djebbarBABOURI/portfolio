const DATA = {
  name: "Djebbar Babouri", initials: "DB", first: "Djebbar",
  role: "étudiant en Master 2 Informatique, spécialité Intelligence Artificielle",
  email: "djebbarbabouri@gmail.com", phone: "+33 7 45 52 19 79", place: "Lens, France",
  linkedin: "https://linkedin.com/in/djebbar-babouri-567847283",
  cvUrl: "cv_djebbar_babouri.pdf",
  search: "Recherche de stage de fin d’études en Data & IA · 12 semaines minimum · dès mars 2027",
  marquee: ["Data Science", "Machine Learning", "Deep Learning", "LLM & MCP", "Calibration des LLMs", "Full Stack"],
  about: "Étudiant en Master 2 Intelligence Artificielle à l’Université d’Artois et titulaire d’un Master en Génie Logiciel, j’ai développé des compétences en développement full stack, en Data Science et en Machine Learning. Mon stage de recherche au CRIL sur l’incertitude des grands modèles de langage a renforcé mes connaissances en IA et mon esprit d’analyse. Sérieux et persévérant, j’aime apprendre et relever de nouveaux défis.",
  stats: [["81 %", "de variation de l’ECE après calibration"], ["85 %", "d’accuracy top-1 après fine-tuning (70 % from scratch)"], ["4", "LLMs open-source comparés"], ["7 400", "images explorées par mon assistant"]],
  skills: [
    ["Langages de programmation", "Python, Java, C, PHP"],
    ["Intelligence Artificielle et Data Science", "PyTorch, Keras, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn, Power BI, CNN, embeddings, évaluation de modèles"],
    ["LLM et IA générative", "LLM APIs, Ollama, Model Context Protocol (MCP)"],
    ["Bases de données", "SQL, PostgreSQL, MySQL, Oracle, MongoDB, SQLite"],
    ["Front-end", "HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, Bootstrap, jQuery, React.js, Next.js"],
    ["Back-end", "Node.js, Express.js, FastAPI, Django, Spring Boot, API RESTful, WebSockets"],
    ["Outils et DevOps", "Git, GitHub, GitLab, Docker, Agile et Scrum, CI/CD"]
  ],
  projects: [
    { title: "Assistant de recherche d’images piloté par LLM", date: "Automne 2026 (en cours)", ctx: "Projet de groupe en Deep Learning, Master 2 IA, Université d’Artois",
      stack: ["PyTorch", "MCP", "Ollama", "Oxford-IIIT Pets"],
      points: ["Assistant en langage naturel combinant plusieurs outils MCP pour explorer une collection de 7 400 images de 37 races animales.",
        "Réalisation personnelle : serveur MCP, client MCP, interface web, intégration du LLM local via Ollama et recherche d’images similaires à partir des embeddings du CNN.",
        "Fine-tuning d’un CNN pré-entraîné : 85 % d’accuracy top-1 contre 70 % pour un entraînement from scratch (moyenne sur 5 seeds).",
        "Évaluation du CNN et de la recherche par embeddings (F1, ECE, precision@k, baselines) et du LLM sur 20 requêtes de test (en cours)."] }
  ],
  exp: [
    { org: "Centre de Recherche en Informatique de Lens (CRIL)", role: "Stagiaire chercheur en Intelligence Artificielle", date: "Mars – juin 2026", place: "Lens, France",
      points: ["Étude de l’incertitude linguistique et de la calibration de quatre LLMs open-source en français et en anglais, sur un corpus dédié aux marqueurs épistémiques.",
        "Comparaison de LLaMA 3.1 8B, Mistral 7B, Gemma 3 4B et Granite 4 Tiny, avec analyse de la robustesse aux reformulations et des différences entre langues.",
        "Mise en œuvre de méthodes de calibration et évaluation via l’ECE et le Brier Score, avec des variations allant jusqu’à 81 % et 49,2 %."] },
    { org: "BIGNOVA", role: "Stagiaire développeur web full stack (à distance)", date: "Février – août 2025", place: "Béjaïa, Algérie",
      points: ["Conception et développement de fonctionnalités full stack avec React.js, Next.js, Node.js/Express.js et FastAPI.",
        "Conception et intégration d’API RESTful pour structurer des données métier, et optimisation d’interfaces responsives pour améliorer l’expérience utilisateur.",
        "Maintenance de modules en production et correction de 100 % des bugs signalés, en environnement Agile (Git/GitHub, revues de code)."] },
    { org: "ESTIN", role: "Stagiaire développeur web full stack (stage de Master)", date: "Janvier – juin 2023", place: "Béjaïa, Algérie",
      points: ["Module back-end avec Django, incluant la modélisation et la gestion de la base de données ainsi que la gestion des vues et des utilisateurs.",
        "Interfaces front-end responsives et intuitives avec HTML5, CSS3, JavaScript et Bootstrap.",
        "Intégration du module dans l’architecture applicative existante, en tenant compte des contraintes techniques et fonctionnelles du projet."] }
  ],
  edu: [
    ["Master 2 Informatique (Intelligence Artificielle)", "Université d’Artois, Lens", "2026 – 2027"],
    ["Master 1 Informatique (Tronc commun)", "Université d’Artois, Lens", "2025 – 2026"],
    ["Master Génie Logiciel", "Université Abderrahmane Mira, Béjaïa", "2021 – 2023"],
    ["Licence Informatique (Systèmes Informatiques)", "Université Abderrahmane Mira, Béjaïa", "2018 – 2021"]
  ],
  certs: [
    ["Machine Learning Crash Course", "Google for Developers", "Régression, classification, réseaux de neurones, embeddings, introduction aux LLMs, ML en production, AutoML, Keras"],
    ["Développement Full Stack Web", "BIGNOVA, Béjaïa", "React.js, Node.js, Express.js, Redux, MongoDB, PostgreSQL, Git/GitHub"],
    ["Développeur Python", "Institut Amis de JAVA (ATS)", "Python avancé, Django, applications bureautiques, MySQL"],
    ["Développeur Web Java EE", "Institut Amis de JAVA (ATS)", "Servlets, JSP, JSTL, Spring Boot, Thymeleaf, MySQL"]
  ],
  qualities: ["Pensée critique et curiosité scientifique", "Rigueur et attention aux détails", "Esprit d’équipe et collaboration", "Autonomie et adaptabilité"],
  langs: [["Français", "B2"], ["Anglais", "B1"]]
};
export default DATA;

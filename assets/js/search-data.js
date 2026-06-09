// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected research, systems, and course projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV for PhD applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-agentic-java-formal-verification",
          title: 'Agentic Java Formal Verification',
          description: "Multi-agent pipeline that reads Java/Spring Boot code, infers safety properties, and generates JBMC-ready harnesses.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agentic-java-formal-verification/";
            },},{id: "projects-ai-powered-pet-companion-robot",
          title: 'AI-Powered Pet Companion Robot',
          description: "Raspberry Pi pet companion robot integrating real-time vision, motion control, cloud analysis, and dashboarding.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aiot-pet-companion-robot/";
            },},{id: "projects-cellular-network-traffic-prediction",
          title: 'Cellular Network Traffic Prediction',
          description: "Final-year ML project for cellular throughput forecasting with CNN-LSTM sequence modeling and XGBoost residual correction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cellular-traffic-prediction/";
            },},{id: "projects-convnext-and-vit-for-hierarchical-open-set-image-classification",
          title: 'ConvNeXt and ViT for Hierarchical Open-Set Image Classification',
          description: "Two-stage hierarchical image classifier with open-set recognition for super-class and sub-class prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/convnext-vit-open-set/";
            },},{id: "projects-deepaudit",
          title: 'DeepAudit',
          description: "Agentic claim-level reproducibility auditing for machine learning papers and code repositories.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deepaudit/";
            },},{id: "projects-malicious-url-detection",
          title: 'Malicious URL Detection',
          description: "Security-oriented ML project combining LSTM URL sequence modeling with handcrafted structural URL features.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/malicious-url-detection/";
            },},{id: "projects-multi-turn-assetops",
          title: 'Multi-Turn AssetOps',
          description: "Supervisor-Specialist multi-agent architecture for industrial asset operations and maintenance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multi-turn-assetops/";
            },},{id: "projects-trueshot",
          title: 'TrueShot',
          description: "P2P blockchain prototype for photo provenance verification and network security analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trueshot/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%62%32%36%33%36@%63%6F%6C%75%6D%62%69%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/BrianBai093", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/brianbai", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

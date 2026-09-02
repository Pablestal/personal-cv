interface Job {
  readonly title: string;
  readonly company: string;
  readonly dates: string | null;
  readonly bullets: readonly string[];
}

interface ExperienceSection {
  readonly title: string;
  readonly current: string;
  readonly jobs: readonly Job[];
}

export const experience = {
  es: {
    title: 'Experiencia Laboral',
    current: 'ACTUAL',
    jobs: [
      {
        title: 'Desarrollador Full Stack', company: 'Qindel Group', dates: null,
        bullets: [
          'Mantenimiento y evolución del e-commerce global de Guess (marca internacional de moda) sobre Salesforce Commerce Cloud.',
          'Frontend con JavaScript nativo, jQuery y Lit (Web Components), aplicando arquitectura basada en componentes. Soporte al backoffice de SFCC (configuraciones, integraciones y flujos operativos).',
          'Colaboración con el equipo de negocio para la creación de componentes, páginas y scripts. Resolución de bugs y optimización.',
        ],
      },
      {
        title: 'Desarrollador Backend', company: 'Landra Sistemas', dates: '2023 \u2013 2024',
        bullets: [
          'Desarrollo y mantenimiento de un sistema de inventario para laboratorios farmacéuticos.',
          'Backend en Java + Spring Boot y Node.js + Express. Integración de datos con Mirth Connect. Infraestructura en AWS.',
        ],
      },
      {
        title: 'Desarrollador Full Stack', company: 'Universidade da Coruña', dates: '2020 \u2013 2023',
        bullets: [
          'Análisis, diseño y desarrollo de aplicaciones web para la gestión y visualización de datos geográficos.',
          'Frontend con React y Redux: componentes reutilizables, gestión de estado y mapas interactivos con Leaflet. También Vue.js y Vuetify.',
          'Backend con Java, Spring, Hibernate y servicios REST. PostgreSQL + PostGIS, GeoServer, Docker Compose y GitLab CI/CD.',
        ],
      },
    ],
  },
  en: {
    title: 'Work Experience',
    current: 'CURRENT',
    jobs: [
      {
        title: 'Full Stack Developer', company: 'Qindel Group', dates: null,
        bullets: [
          'Maintenance and evolution of the global e-commerce for Guess (international fashion brand) on Salesforce Commerce Cloud.',
          'Frontend with vanilla JavaScript, jQuery and Lit (Web Components), applying a component-based architecture. Backoffice support for SFCC (configurations, integrations and operational flows).',
          'Direct collaboration with the business team for the creation of components, pages and scripts. Bug fixing and performance improvements.',
        ],
      },
      {
        title: 'Backend Developer', company: 'Landra Sistemas', dates: '2023 \u2013 2024',
        bullets: [
          'Development and maintenance of an inventory application for pharmaceutical laboratories.',
          'Backend in Java + Spring Boot and Node.js + Express. Data integration with Mirth Connect. Infrastructure on AWS.',
        ],
      },
      {
        title: 'Full Stack Developer', company: 'Universidade da Coruña', dates: '2020 \u2013 2023',
        bullets: [
          'Analysis, design and development of web applications for the management and visualisation of geographic data.',
          'Frontend with React and Redux: reusable components, state management and interactive maps with Leaflet. Also Vue.js and Vuetify.',
          'Backend with Java, Spring, Hibernate and REST services. PostgreSQL + PostGIS, GeoServer, Docker Compose and GitLab CI/CD.',
        ],
      },
    ],
  },
} satisfies Record<'es' | 'en', ExperienceSection>;

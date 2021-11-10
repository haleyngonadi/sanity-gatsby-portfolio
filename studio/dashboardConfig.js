export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618bea9104f54c57a92acddc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s17qivwo',
                  apiId: '37c92f80-b817-40e3-b549-2114903e680a'
                },
                {
                  buildHookId: '618bea921ee3c354e2e540b0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-v2z39y2u',
                  apiId: '3ca6dfd9-9785-42f4-ad6d-7a21e06b6510'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haleyngonadi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-v2z39y2u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

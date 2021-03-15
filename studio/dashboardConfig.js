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
                  buildHookId: '604f36d199765a5afe0fcdbc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e1nnhyqo',
                  apiId: '7c0a5c73-358d-4186-934e-c96864cf7392'
                },
                {
                  buildHookId: '604f36d247c75bc38bbb2764',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ye32g9t4',
                  apiId: '101bfcf8-3895-489d-bbbf-5ad9e5b76977'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/riteshtailor2002/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ye32g9t4.netlify.app',
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

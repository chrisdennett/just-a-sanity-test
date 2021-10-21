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
                  buildHookId: '61714c0ea85c95ea3217c8a6',
                  title: 'Sanity Studio',
                  name: 'just-a-sanity-test-studio',
                  apiId: 'f6fbcb17-d634-41ab-a473-b98ad5de12fd'
                },
                {
                  buildHookId: '61714c0e2a51f0e04dce4955',
                  title: 'Portfolio Website',
                  name: 'just-a-sanity-test',
                  apiId: '093ac8e8-253e-4273-a110-796f05839ae8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisdennett/just-a-sanity-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://just-a-sanity-test.netlify.app',
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

export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ebb0b02d1cbb8f7bbaec40f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3ing76f7',
                  apiId: '16b9a3b3-8b0c-4a01-8d50-eb99afe1939e'
                },
                {
                  buildHookId: '5ebb0b033aa817426eb551a1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ck8cm4w1',
                  apiId: '905a023e-a010-4692-9427-bc70fe3988f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TeoAlmonte/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ck8cm4w1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

module.exports = {
	siteMetadata: {
		siteUrl: "https://nolan-seokane.netlify.app/",
		title: "Full Stack With Gatsby and Django Graphene",
	},
	plugins: [
		{
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins:300,400,500,600,700`       
                ], display: 'swap'       
            }
        },
		{
			resolve: "gatsby-source-graphql",
			options: {
			  typeName: "django",
			  fieldName: "DJANGO",
			  url: "http://127.0.0.1:8000/todo/graphql/",
			},
		},
	],
};

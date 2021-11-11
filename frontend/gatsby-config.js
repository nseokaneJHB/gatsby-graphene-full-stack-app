module.exports = {
	siteMetadata: {
		siteUrl: "https://nolan-seokane.netlify.app/",
		title: "Full Stack With Gatsby and Django Graphene",
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins: 300, 400, 500, 600, 700`       
                ], display: 'swap'       
            }
        },
	],
};

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'default-black': '#212121',
            },
        },
    },
    plugins: [],
});

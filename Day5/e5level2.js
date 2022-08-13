const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

if (webTechs.includes(`Sass`)) {
    console.log(`Sass is CSS preprocess`);
    console.log(webTechs);
} else {
    webTechs.push(`Sass`);
    // alert(`Sass has been added`);
    console.log(webTechs);
}
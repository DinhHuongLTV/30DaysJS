const mernTechDev = [];

for (const name in users) {
    let isMernDev = 1;
    for (const tech of mernTech) {
        if (!users[name].skills.includes(tech)) {
            isMernDev = 0;
            break;
        }
    }

    // if (!users[name].skills.includes(mernTech))
    // isMernDev = 0;

    if (isMernDev)
        mernTechDev.push(name);
}

console.log(`There are ${mernTechDev.length} people who are MERN developer`);
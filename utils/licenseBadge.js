// show license badge based on value 
function licenseBadge(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";




    } else if (value === "BSD 2-Clause 'simplified'") {
        return "[![License: BSDsimp](https://img.shields.io/badge/License-BSDSimp-grey.svg)](https://opensource.org/licenses/BSD-2-Clause)";




    } else if (value === "BSD 2-Clause 'new or revised'") {
        return "[![License: BSDnew](https://img.shields.io/badge/License-BSDnew-grey.svg)](https://opensource.org/licenses/BSD-3-Clause)";


    } else if (value === "Creative Commons Zero v1.0") {
        return "[![License: CC0v1.0](https://img.shields.io/badge/License-CreativeCommonsv1.0-pink.svg)](https://creativecommons.org/publicdomain/zero/1.0/)";


    } else if (value === "Eclipse Public License 2.0'") {
        return "[![License: EPL2.0](https://img.shields.io/badge/License-Eclipse2.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)";


    } else if (value === "The Unlicense") {
        return "[![License: TheUnlicense](https://img.shields.io/badge/License-unlicense%20-green.svg)](https://opensource.org/licenses/Unlicense)";
    


    } else if (value === "Apache License 2.0") {
        return "[![License: AL2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
        return "[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
}

module.exports = { 
    licenseBadge: licenseBadge
}
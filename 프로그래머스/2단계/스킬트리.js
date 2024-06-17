function solution(skill, skill_trees) {
    const temp = Array.from(Array(skill_trees.length).fill(""));
    // console.log(temp)
    for (let i = 0; i < skill_trees.length; i++) {
        const skillTree = skill_trees[i];
        for (let j = 0; j < skillTree.length; j++) {
            // if (!skill.includes(skillTree[j])) console.log(skillTree[j])
            if (skill.includes(skillTree[j])) temp[i] += skillTree[j];
        }
    }
    
    // console.log(temp)

    
    let answer = 0;
    
    for (str of temp) {
        let valid = true;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== skill[i]) {
                valid = false;
                break;
            }
        }
        if (valid) answer++;
    }
    
    return answer;
}

const users = {
    students: [
        { username: "student1", password: "password1" },
        { username: "student2", password: "password2" }
        // Add more student credentials here
    ],
    mentors: [
        { username: "mentor1", password: "mentorpass1" },
        { username: "mentor2", password: "mentorpass2" },
        { username: "Prof. John Doe", password: "johnpass" },
        { username: "Prof. Jane Smith", password: "janepass" }
    ]
};


function validateLogin(username, password) {
    const student = users.students.find(user => user.username === username && user.password === password);
    const mentor = users.mentors.find(user => user.username === username && user.password === password);
    
    if (student) {
        return { role: "student", user: student };
    } else if (mentor) {
        return { role: "mentor", user: mentor };
    }
    return null; 
}

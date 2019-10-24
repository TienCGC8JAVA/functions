function showStudentInfo(name: string, ...course: string[]): string {
    console.log(course);
    return name + " study " + course.join(", ");
}

console.log(showStudentInfo("john", "es6", "php", "typescript"));
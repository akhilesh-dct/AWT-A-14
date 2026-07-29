// Buttons
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const flipBtn = document.getElementById("flipBtn");

// Card
const idCard = document.getElementById("idCard");

// Generate ID Card
generateBtn.addEventListener("click", function () {

    // Clear previous errors
    document.querySelectorAll("small").forEach(error => {
        error.innerHTML = "";
    });

    // Get Values
    let name = document.getElementById("name").value.trim();
    let studentId = document.getElementById("studentId").value.trim();
    let courseId = document.getElementById("courseId").value.trim();
    let department = document.getElementById("department").value;
    let course = document.getElementById("course").value.trim();
    let batch = document.getElementById("batch").value.trim();
    let blood = document.getElementById("blood").value;
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let valid = true;

    // Name Validation
    if (!/^[A-Za-z ]{3,}$/.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Enter a valid name.";
        valid = false;
    }

    // Student ID Validation
    if (!/^[0-9]{2}AIFT[0-9]{7}$/.test(studentId)) {
        document.getElementById("studentIdError").innerHTML =
            "Example:24AIFT0000001";
        valid = false;
    }

  
   // Course ID Validation
     if (!/^[0-9]{2}[A-Z]{6}[0-9]{4}$/.test(courseId)) {
    document.getElementById("courseIdError").innerHTML =
        "Example:23UITPCL3508";
    valid = false;
}

    // Department
    if (department === "") {
        document.getElementById("departmentError").innerHTML =
            "Select Department";
        valid = false;
    }

    // Course
    if (course === "") {
        document.getElementById("courseError").innerHTML =
            "Enter Course";
        valid = false;
    }

    // Batch
    if (!/^[0-9]{4}-[0-9]{4}$/.test(batch)) {
        document.getElementById("batchError").innerHTML =
            "Example: 2024-2028";
        valid = false;
    }

    // Blood Group
    if (blood === "") {
        document.getElementById("bloodError").innerHTML =
            "Select Blood Group";
        valid = false;
    }

    // Email Validation
    if (!/^[a-zA-Z0-9._%+-]+@ghrcemp\.raisoni\.net$/.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Email must end with @ghrcemp.raisoni.net";
        valid = false;
    }

    // Phone Validation
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML =
            "Enter 10-digit phone number";
        valid = false;
    }

    // Stop if invalid
    if (!valid) {
        return;
    }

    // Display Details on Card
    document.getElementById("cardName").innerHTML = name;
    document.getElementById("cardStudentId").innerHTML = studentId;
    document.getElementById("cardCourseId").innerHTML = courseId;
    document.getElementById("cardDepartment").innerHTML = department;
    document.getElementById("cardCourse").innerHTML = course;
    document.getElementById("cardBatch").innerHTML = batch;
    document.getElementById("cardBlood").innerHTML = blood;
    document.getElementById("cardEmail").innerHTML = "Email : " + email;
    document.getElementById("cardPhone").innerHTML = "Phone : " + phone;
    document.getElementById("barcodeText").innerHTML = studentId;

    alert("ID Card Generated Successfully!");
});

// Flip Card
flipBtn.addEventListener("click", function () {
    idCard.classList.toggle("flip");
});

// Reset
resetBtn.addEventListener("click", function () {

    document.getElementById("name").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("courseId").value = "";
    document.getElementById("department").selectedIndex = 0;
    document.getElementById("course").value = "";
    document.getElementById("batch").value = "";
    document.getElementById("blood").selectedIndex = 0;
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    // Clear Errors
    document.querySelectorAll("small").forEach(error => {
        error.innerHTML = "";
    });

    // Reset Card
    document.getElementById("cardName").innerHTML = "Student Name";
    document.getElementById("cardStudentId").innerHTML = "-";
    document.getElementById("cardCourseId").innerHTML = "-";
    document.getElementById("cardDepartment").innerHTML = "-";
    document.getElementById("cardCourse").innerHTML = "-";
    document.getElementById("cardBatch").innerHTML = "-";
    document.getElementById("cardBlood").innerHTML = "-";
    document.getElementById("cardEmail").innerHTML = "";
    document.getElementById("cardPhone").innerHTML = "";
    document.getElementById("barcodeText").innerHTML = "";

    idCard.classList.remove("flip");
});
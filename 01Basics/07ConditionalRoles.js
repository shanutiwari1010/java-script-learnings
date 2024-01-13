var user = "testprep";

switch (user) {
  case "admin":
    console.log("You have Full Accecc");
    break;

  case "subadmin":
    console.log("get access to create/delete courses");
    break;

  case "testprep":
    console.log("get access to create/delete tests");
    break;

  case "user":
    console.log("get access to consume content");
    break;

  default:
    console.log("Trial user");
    break;
}

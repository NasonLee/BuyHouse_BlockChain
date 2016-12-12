function processFormData() {
  var name_element = document.getElementById('name');
  var name = name_element.value;
  var email_element = document.getElementById('email');
  var email = email_element.value;
  alert('你的姓名是'+name+'\n電子郵件是'+email);
}
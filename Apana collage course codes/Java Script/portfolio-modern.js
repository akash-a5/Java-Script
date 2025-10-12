function modernContact(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  alert(`Thank you, ${name}!\n\nYour message has been received.\n(For demo, this is not sent anywhere.)`);
  event.target.reset();
  return false;
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    alert(
        `Thank you, ${name}!\n\nWe have received your message.\nEmail: ${email}\n\n(Form submission is a demo.)`
    );
    event.target.reset();
    return false;
}

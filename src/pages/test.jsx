
  // useEffect will run only when `submitted` becomes true
  useEffect(() => {
    if (!submitted) return; // Do nothing until submitted

    const sendData = async () => {
      try {
        const res = await fetch('http://your-backend.com/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          setResponseMsg('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
          setResponseMsg('Failed to send message.');
        }
      } catch (error) {
        console.error('Error sending data:', error);
        setResponseMsg('Server error.');
      } finally {
        setSubmitted(false); // Reset to prevent re-submission
      }
    };

    sendData();
  }, [submitted, formData]); // Run when submitted or formData changes